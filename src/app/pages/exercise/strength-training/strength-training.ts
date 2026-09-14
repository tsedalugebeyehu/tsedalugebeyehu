import { Component, OnDestroy, computed, inject, signal } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";

import { STRENGTH_PROGRAMS, StrengthExercise } from "../../../data/strength-training.data";

@Component({
  selector: "app-strength-training",
  standalone: true,
  templateUrl: "./strength-training.html",
  styleUrl: "./strength-training.scss",
})
export class StrengthTraining implements OnDestroy {
  private readonly route = inject(ActivatedRoute);

  private readonly router = inject(Router);

  readonly programs = STRENGTH_PROGRAMS;

  readonly selectedProgramIndex = signal(0);

  readonly completed = signal<Record<string, boolean>>({});

  readonly selectedExercise = signal<StrengthExercise | null>(null);

  readonly selectedExerciseImage = signal<string | null>(null);

  readonly imageLoading = signal(false);

  readonly imageError = signal(false);

  /* =====================================================
     TIMER
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

  readonly selectedProgram = computed(() => {
    return this.programs[this.selectedProgramIndex()];
  });

  readonly completedCount = computed(() => {
    return this.selectedProgram().exercises.filter((exercise) =>
      this.isCompleted(exercise),
    ).length;
  });

  readonly totalExercises = computed(() => {
    return this.selectedProgram().exercises.length;
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

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const programId = params.get("programId");

      /*
       * /exercise/strength
       *
       * Defaults to Full Body.
       */
      if (!programId) {
        this.setProgramFromId("full-body");

        return;
      }

      this.setProgramFromId(programId);
    });
  }

  ngOnDestroy(): void {
    this.clearTimer();

    this.closeExercise();
  }

  /* =====================================================
     ROUTE / TAB SELECTION
     ===================================================== */

  private setProgramFromId(programId: string): void {
    const index = this.programs.findIndex(
      (program) => program.id === programId,
    );

    /*
     * Invalid URL:
     * default to Full Body.
     */
    if (index === -1) {
      const defaultIndex = this.programs.findIndex(
        (program) => program.id === "full-body",
      );

      this.selectedProgramIndex.set(defaultIndex >= 0 ? defaultIndex : 0);

      return;
    }

    this.selectedProgramIndex.set(index);
  }

  selectProgram(index: number): void {
    const program = this.programs[index];

    if (!program) {
      return;
    }

    /*
     * Clear any currently opened
     * exercise/Google image.
     */
    this.closeExercise();

    /*
     * Route controls the selected tab.
     */
    this.router.navigate(["/exercise/strength", program.id]);
  }

  previousProgram(): void {
    const current = this.selectedProgramIndex();

    const previous = current === 0 ? this.programs.length - 1 : current - 1;

    this.selectProgram(previous);
  }

  nextProgram(): void {
    const next = (this.selectedProgramIndex() + 1) % this.programs.length;

    this.selectProgram(next);
  }

  /* =====================================================
     CHECKBOX
     ===================================================== */

  toggleExercise(exercise: StrengthExercise, checked: boolean): void {
    const key = this.exerciseKey(exercise);

    this.completed.update((current) => ({
      ...current,
      [key]: checked,
    }));
  }

  isCompleted(exercise: StrengthExercise): boolean {
    return !!this.completed()[this.exerciseKey(exercise)];
  }

  resetProgram(): void {
    const program = this.selectedProgram();

    this.completed.update((current) => {
      const updated = {
        ...current,
      };

      for (const exercise of program.exercises) {
        delete updated[`${program.id}:${exercise.id}`];
      }

      return updated;
    });
  }

  private exerciseKey(exercise: StrengthExercise): string {
    return `${this.selectedProgram().id}` + `:${exercise.id}`;
  }

  /* =====================================================
     GOOGLE DRIVE IMAGE
     ===================================================== */

  openExercise(exercise: StrengthExercise): void {
    this.selectedExercise.set(exercise);

    this.selectedExerciseImage.set(null);

    this.imageError.set(false);

    if (!exercise.imageId) {
      this.imageLoading.set(false);

      return;
    }

    /*
     * Google Drive URL is created
     * ONLY after exercise click.
     */
    this.imageLoading.set(true);

    this.selectedExerciseImage.set(
      this.buildGoogleThumbnailUrl(exercise.imageId),
    );
  }

  closeExercise(): void {
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
      this.nextProgram();
    } else {
      this.previousProgram();
    }
  }
}
