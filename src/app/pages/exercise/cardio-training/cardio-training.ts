import { Component, OnDestroy, computed, signal } from "@angular/core";

import { CARDIO_ROUTINES, CardioExercise } from "../../../data/cardio-training.data";

@Component({
  selector: "app-cardio-training",
  standalone: true,
  templateUrl: "./cardio-training.html",
  styleUrl: "./cardio-training.scss",
})
export class CardioTraining implements OnDestroy {
  readonly routines = CARDIO_ROUTINES;

  readonly selectedRoutineIndex = signal(0);

  readonly completed = signal<Record<string, boolean>>({});

  /*
   * Google Drive state.
   *
   * IMPORTANT:
   * Both remain null until an exercise
   * is explicitly clicked.
   */
  readonly selectedExercise = signal<CardioExercise | null>(null);

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
     SWIPE
     ===================================================== */

  private touchStartX = 0;

  private touchEndX = 0;

  /* =====================================================
     COMPUTED
     ===================================================== */

  readonly selectedRoutine = computed(() => {
    return this.routines[this.selectedRoutineIndex()];
  });

  readonly completedCount = computed(() => {
    return this.selectedRoutine().exercises.filter((exercise) =>
      this.isCompleted(exercise),
    ).length;
  });

  readonly totalExercises = computed(() => {
    return this.selectedRoutine().exercises.length;
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
  }

  /* =====================================================
     ROUTINE NAVIGATION
     ===================================================== */

  selectRoutine(index: number): void {
    if (index < 0 || index >= this.routines.length) {
      return;
    }

    /*
     * Ensure any Google Drive URL is
     * destroyed before changing routines.
     */
    this.closeExercise();

    this.selectedRoutineIndex.set(index);
  }

  previousRoutine(): void {
    const current = this.selectedRoutineIndex();

    const index = current === 0 ? this.routines.length - 1 : current - 1;

    this.selectRoutine(index);
  }

  nextRoutine(): void {
    const index = (this.selectedRoutineIndex() + 1) % this.routines.length;

    this.selectRoutine(index);
  }

  /* =====================================================
     CHECKBOX
     ===================================================== */

  toggleExercise(exercise: CardioExercise, checked: boolean): void {
    const key = this.exerciseKey(exercise);

    this.completed.update((current) => ({
      ...current,
      [key]: checked,
    }));
  }

  isCompleted(exercise: CardioExercise): boolean {
    return !!this.completed()[this.exerciseKey(exercise)];
  }

  resetRoutine(): void {
    const routine = this.selectedRoutine();

    this.completed.update((current) => {
      const updated = {
        ...current,
      };

      for (const exercise of routine.exercises) {
        delete updated[`${routine.id}:${exercise.id}`];
      }

      return updated;
    });
  }

  private exerciseKey(exercise: CardioExercise): string {
    return `${this.selectedRoutine().id}` + `:${exercise.id}`;
  }

  /* =====================================================
     GOOGLE DRIVE IMAGE

     CRITICAL RULE:
     URL IS GENERATED ONLY AFTER CLICK.
     ===================================================== */

  openExercise(exercise: CardioExercise): void {
    this.selectedExercise.set(exercise);

    /*
     * Start clean.
     */
    this.selectedExerciseImage.set(null);

    this.imageError.set(false);

    if (!exercise.imageId) {
      this.imageLoading.set(false);

      return;
    }

    /*
     * This is the ONLY place that creates
     * the initial Google Drive image URL.
     *
     * Page render = 0 requests
     * Tab change  = 0 requests
     * Checkbox    = 0 requests
     * Click item  = 1 request
     */
    this.imageLoading.set(true);

    this.selectedExerciseImage.set(
      this.buildGoogleThumbnailUrl(exercise.imageId),
    );
  }

  closeExercise(): void {
    /*
     * Remove src first.
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

    this.selectedExerciseImage.set(null);

    this.imageError.set(false);

    this.imageLoading.set(true);

    /*
     * Explicit user retry.
     */
    setTimeout(() => {
      this.selectedExerciseImage.set(
        this.buildGoogleThumbnailUrl(exercise.imageId!),
      );
    });
  }

  private buildGoogleThumbnailUrl(imageId: string): string {
    return "https://drive.google.com/thumbnail" + `?id=${imageId}` + "&sz=w600";
  }

  /* =====================================================
     STOPWATCH
     ===================================================== */

  startTimer(): void {
    if (this.running()) {
      return;
    }

    this.running.set(true);

    this.startedAt = Date.now();

    this.timer = setInterval(() => {
      const currentElapsed = Date.now() - this.startedAt;

      this.elapsedMilliseconds.set(this.previousElapsed + currentElapsed);
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

    this.startedAt = 0;

    this.previousElapsed = 0;

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
     MOBILE SWIPE
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
      this.nextRoutine();
    } else {
      this.previousRoutine();
    }
  }
}
