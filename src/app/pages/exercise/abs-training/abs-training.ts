import { Component, OnDestroy, computed, signal } from "@angular/core";

import { ABS_ROUTINES, AbsExercise } from "../../../data/abs-training.data";

@Component({
  selector: "app-abs-training",
  standalone: true,
  templateUrl: "./abs-training.html",
  styleUrl: "./abs-training.scss",
})
export class AbsTraining implements OnDestroy {
  readonly routines = ABS_ROUTINES;

  readonly selectedRoutineIndex = signal(0);

  readonly completed = signal<Record<string, boolean>>({});

  /*
   * IMPORTANT:
   *
   * These remain null until the user clicks
   * an exercise.
   */
  readonly selectedExercise = signal<AbsExercise | null>(null);

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
     * Clear any existing Google image
     * before switching routines.
     */
    this.closeExercise();

    this.selectedRoutineIndex.set(index);
  }

  previousRoutine(): void {
    const current = this.selectedRoutineIndex();

    const previous = current === 0 ? this.routines.length - 1 : current - 1;

    this.selectRoutine(previous);
  }

  nextRoutine(): void {
    const current = this.selectedRoutineIndex();

    const next = (current + 1) % this.routines.length;

    this.selectRoutine(next);
  }

  /* =====================================================
     COMPLETION
     ===================================================== */

  toggleExercise(exercise: AbsExercise, checked: boolean): void {
    const key = this.exerciseKey(exercise);

    this.completed.update((current) => ({
      ...current,
      [key]: checked,
    }));
  }

  isCompleted(exercise: AbsExercise): boolean {
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

  private exerciseKey(exercise: AbsExercise): string {
    return `${this.selectedRoutine().id}` + `:${exercise.id}`;
  }

  /* =====================================================
     EXERCISE MODAL / GOOGLE DRIVE
     ===================================================== */

  openExercise(exercise: AbsExercise): void {
    /*
     * First select the exercise.
     *
     * Still NO Google request yet unless
     * imageId exists.
     */
    this.selectedExercise.set(exercise);

    this.imageError.set(false);

    this.selectedExerciseImage.set(null);

    /*
     * Exercise has no Google image.
     */
    if (!exercise.imageId) {
      this.imageLoading.set(false);

      return;
    }

    /*
     * THIS IS THE ONLY PLACE where we
     * create the Google Drive URL.
     *
     * Therefore:
     *
     * Component render = 0 requests
     * Routine change   = 0 requests
     * Checkbox click   = 0 requests
     * Exercise click   = 1 request
     */
    this.imageLoading.set(true);

    const imageUrl = this.buildGoogleThumbnailUrl(exercise.imageId);

    this.selectedExerciseImage.set(imageUrl);
  }

  closeExercise(): void {
    /*
     * Destroy the src entirely.
     *
     * This prevents the Google URL from
     * remaining bound after closing.
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
     * Remove existing src first.
     */
    this.selectedExerciseImage.set(null);

    this.imageError.set(false);

    this.imageLoading.set(true);

    /*
     * Generate a new request only because
     * user explicitly clicked Retry.
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
    const distance = this.touchStartX - this.touchEndX;

    /*
     * Ignore small accidental gestures.
     */
    if (Math.abs(distance) < 55) {
      return;
    }

    if (distance > 0) {
      this.nextRoutine();
    } else {
      this.previousRoutine();
    }
  }
}
