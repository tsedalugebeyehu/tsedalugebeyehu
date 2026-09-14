import { Component, OnDestroy, computed, signal } from "@angular/core";

import {
  CURRENT_TRAINING_DAYS,
  CurrentExercise,
} from "../../../data/current-training.data";

@Component({
  selector: "app-current-training",
  standalone: true,
  templateUrl: "./current-training.html",
  styleUrl: "./current-training.scss",
})
export class CurrentTraining implements OnDestroy {
  readonly trainingDays = CURRENT_TRAINING_DAYS;

  readonly selectedDayIndex = signal(0);

  readonly completed = signal<Record<string, boolean>>({});

  /* =====================================================
     GOOGLE DRIVE IMAGE STATE

     MUST STAY NULL UNTIL USER CLICKS.
     ===================================================== */

  readonly selectedExercise = signal<CurrentExercise | null>(null);

  readonly selectedExerciseImage = signal<string | null>(null);

  readonly imageLoading = signal(false);

  readonly imageError = signal(false);

  /* =====================================================
     STOPWATCH
     ===================================================== */

  readonly elapsedMilliseconds = signal(0);

  readonly running = signal(false);

  private timer: ReturnType<typeof setInterval> | undefined;

  private startedAt = 0;

  private previousElapsed = 0;

  /* =====================================================
     MOBILE SWIPE
     ===================================================== */

  private touchStartX = 0;

  private touchEndX = 0;

  /* =====================================================
     COMPUTED
     ===================================================== */

  readonly selectedDay = computed(() => {
    return this.trainingDays[this.selectedDayIndex()];
  });

  readonly completedCount = computed(() => {
    return this.selectedDay().exercises.filter((exercise) =>
      this.isCompleted(exercise),
    ).length;
  });

  readonly totalExercises = computed(() => {
    return this.selectedDay().exercises.length;
  });

  readonly progressPercent = computed(() => {
    const total = this.totalExercises();

    if (!total) {
      return 0;
    }

    return Math.round((this.completedCount() / total) * 100);
  });

  readonly formattedTime = computed(() => {
    const milliseconds = this.elapsedMilliseconds();

    const totalSeconds = Math.floor(milliseconds / 1000);

    const hours = Math.floor(totalSeconds / 3600);

    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const seconds = totalSeconds % 60;

    const hundredths = Math.floor((milliseconds % 1000) / 10);

    return {
      hours: this.pad(hours),

      minutes: this.pad(minutes),

      seconds: this.pad(seconds),

      hundredths: this.pad(hundredths),
    };
  });

  ngOnDestroy(): void {
    this.clearTimer();

    this.closeExercise();
  }

  /* =====================================================
     DAY NAVIGATION
     ===================================================== */

  selectDay(index: number): void {
    if (index < 0 || index >= this.trainingDays.length) {
      return;
    }

    /*
     * Also destroys any active Google URL.
     */
    this.closeExercise();

    this.selectedDayIndex.set(index);
  }

  previousDay(): void {
    const current = this.selectedDayIndex();

    const previous = current === 0 ? this.trainingDays.length - 1 : current - 1;

    this.selectDay(previous);
  }

  nextDay(): void {
    const next = (this.selectedDayIndex() + 1) % this.trainingDays.length;

    this.selectDay(next);
  }

  /* =====================================================
     COMPLETION
     ===================================================== */

  toggleExercise(exercise: CurrentExercise, checked: boolean): void {
    const key = this.exerciseKey(exercise);

    this.completed.update((current) => ({
      ...current,
      [key]: checked,
    }));
  }

  isCompleted(exercise: CurrentExercise): boolean {
    return !!this.completed()[this.exerciseKey(exercise)];
  }

  resetDay(): void {
    const day = this.selectedDay();

    this.completed.update((current) => {
      const updated = {
        ...current,
      };

      for (const exercise of day.exercises) {
        delete updated[`${day.id}:${exercise.id}`];
      }

      return updated;
    });
  }

  private exerciseKey(exercise: CurrentExercise): string {
    return `${this.selectedDay().id}` + `:${exercise.id}`;
  }

  /* =====================================================
     EXERCISE / GOOGLE DRIVE

     IMPORTANT:
     GOOGLE URL IS ONLY CREATED HERE.
     ===================================================== */

  openExercise(exercise: CurrentExercise): void {
    /*
     * Select exercise first.
     */
    this.selectedExercise.set(exercise);

    /*
     * Make certain an old image URL
     * cannot survive.
     */
    this.selectedExerciseImage.set(null);

    this.imageError.set(false);

    if (!exercise.imageId) {
      this.imageLoading.set(false);

      return;
    }

    /*
     * USER CLICKED THE EXERCISE.
     *
     * Only now do we create the
     * Google Drive thumbnail URL.
     */
    this.imageLoading.set(true);

    this.selectedExerciseImage.set(
      this.buildGoogleThumbnailUrl(exercise.imageId),
    );
  }

  closeExercise(): void {
    /*
     * Remove Google src before
     * destroying modal state.
     */
    this.selectedExerciseImage.set(null);

    this.selectedExercise.set(null);

    this.imageLoading.set(false);

    this.imageError.set(false);
  }

  onImageLoad(): void {
    this.imageLoading.set(false);
  }

  onImageError(): void {
    this.imageLoading.set(false);

    this.imageError.set(true);
  }

  retryImage(): void {
    const exercise = this.selectedExercise();

    if (!exercise?.imageId) {
      return;
    }

    /*
     * Remove current src first.
     */
    this.selectedExerciseImage.set(null);

    this.imageError.set(false);

    this.imageLoading.set(true);

    /*
     * New request only after explicit
     * Retry click.
     */
    setTimeout(() => {
      this.selectedExerciseImage.set(
        this.buildGoogleThumbnailUrl(exercise.imageId!),
      );
    });
  }

  private buildGoogleThumbnailUrl(imageId: string): string {
    return "https://drive.google.com/thumbnail" + `?id=${imageId}` + "&sz=w700";
  }

  /* =====================================================
     TIMER
     ===================================================== */

  startTimer(): void {
    if (this.running()) {
      return;
    }

    this.running.set(true);

    this.startedAt = Date.now();

    this.timer = setInterval(() => {
      const elapsed = Date.now() - this.startedAt;

      this.elapsedMilliseconds.set(this.previousElapsed + elapsed);
    }, 30);
  }

  stopTimer(): void {
    if (!this.running()) {
      return;
    }

    this.previousElapsed = this.elapsedMilliseconds();

    this.running.set(false);

    this.clearTimer();
  }

  resetTimer(): void {
    this.running.set(false);

    this.clearTimer();

    this.previousElapsed = 0;

    this.startedAt = 0;

    this.elapsedMilliseconds.set(0);
  }

  private clearTimer(): void {
    if (!this.timer) {
      return;
    }

    clearInterval(this.timer);

    this.timer = undefined;
  }

  private pad(value: number): string {
    return String(value).padStart(2, "0");
  }

  /* =====================================================
     SWIPE
     ===================================================== */

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;

    this.touchEndX = this.touchStartX;
  }

  onTouchMove(event: TouchEvent): void {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd(): void {
    const difference = this.touchStartX - this.touchEndX;

    if (Math.abs(difference) < 55) {
      return;
    }

    if (difference > 0) {
      this.nextDay();
    } else {
      this.previousDay();
    }
  }
}
