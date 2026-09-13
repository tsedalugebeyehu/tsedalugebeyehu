import {
  Component,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from "@angular/core";

import { isPlatformBrowser } from "@angular/common";

import { DAILY_TRAINING_PLANS, Exercise } from "../../../data/daily-training.data";

interface DailyProgress {
  date: string;
  completed: Record<string, boolean>;
}

@Component({
  selector: "app-daily-training",
  standalone: true,
  templateUrl: "./daily-training.html",
  styleUrl: "./daily-training.scss",
})
export class DailyTraining implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);

  private readonly storageKey = "tsedalu-daily-training-progress-v1";

  private midnightTimer?: ReturnType<typeof setTimeout>;

  readonly plans = DAILY_TRAINING_PLANS;

  readonly selectedPlanIndex = signal(0);
  readonly selectedDayIndex = signal(0);

  readonly completed = signal<Record<string, boolean>>({});

  readonly selectedExercise = signal<Exercise | null>(null);

  /*
   * Important:
   * This starts as null.
   *
   * No Google thumbnail request is made
   * until openExercise() is called.
   */
  readonly selectedExerciseImage = signal<string | null>(null);

  readonly imageLoading = signal(false);
  readonly imageError = signal(false);

  readonly selectedPlan = computed(() => this.plans[this.selectedPlanIndex()]);

  readonly selectedDay = computed(
    () => this.selectedPlan().days[this.selectedDayIndex()],
  );

  readonly completedCount = computed(() => {
    return this.selectedDay().exercises.filter((exercise) =>
      this.isCompleted(exercise),
    ).length;
  });

  readonly totalExercises = computed(() => this.selectedDay().exercises.length);

  readonly progressPercent = computed(() => {
    const total = this.totalExercises();

    if (!total) {
      return 0;
    }

    return Math.round((this.completedCount() / total) * 100);
  });

  readonly allComplete = computed(
    () =>
      this.totalExercises() > 0 &&
      this.completedCount() === this.totalExercises(),
  );

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.loadProgress();
    this.scheduleMidnightReset();
  }

  ngOnDestroy(): void {
    if (this.midnightTimer) {
      clearTimeout(this.midnightTimer);
    }
  }

  /* ============================
     PLAN
     ============================ */

  selectPlan(index: number): void {
    this.selectedPlanIndex.set(index);
    this.selectedDayIndex.set(0);

    this.closeExercise();
  }

  /* ============================
     DAY
     ============================ */

  selectDay(index: number): void {
    this.selectedDayIndex.set(index);

    this.closeExercise();
  }

  previousDay(): void {
    const total = this.selectedPlan().days.length;

    const index =
      this.selectedDayIndex() === 0 ? total - 1 : this.selectedDayIndex() - 1;

    this.selectedDayIndex.set(index);

    this.closeExercise();
  }

  nextDay(): void {
    const total = this.selectedPlan().days.length;

    const index = (this.selectedDayIndex() + 1) % total;

    this.selectedDayIndex.set(index);

    this.closeExercise();
  }

  /* ============================
     CHECKBOX
     ============================ */

  toggleExercise(exercise: Exercise, checked: boolean): void {
    const key = this.exerciseKey(exercise);

    this.completed.update((current) => ({
      ...current,
      [key]: checked,
    }));

    this.saveProgress();
  }

  isCompleted(exercise: Exercise): boolean {
    return !!this.completed()[this.exerciseKey(exercise)];
  }

  resetToday(): void {
    this.completed.set({});

    this.saveProgress();
  }

  /* ============================
     EXERCISE MODAL
     ============================ */

  openExercise(exercise: Exercise): void {
    this.selectedExercise.set(exercise);

    this.imageLoading.set(false);
    this.imageError.set(false);

    /*
     * No image ID means there is
     * nothing to request.
     */
    if (!exercise.imageId) {
      this.selectedExerciseImage.set(null);

      return;
    }

    /*
     * Google URL is created ONLY here,
     * after the user clicked the exercise.
     *
     * This means the list itself does not
     * make Google thumbnail requests.
     */
    this.selectedExerciseImage.set(
      this.buildGoogleThumbnailUrl(exercise.imageId),
    );

    this.imageLoading.set(true);
  }

  closeExercise(): void {
    this.selectedExercise.set(null);

    /*
     * Remove the URL completely when
     * the modal closes.
     */
    this.selectedExerciseImage.set(null);

    this.imageLoading.set(false);
    this.imageError.set(false);
  }

  onImageLoad(): void {
    this.imageLoading.set(false);
    this.imageError.set(false);
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

    this.imageError.set(false);
    this.imageLoading.set(true);

    /*
     * Clearing first forces Angular/browser
     * to treat the retry as a fresh source.
     */
    this.selectedExerciseImage.set(null);

    setTimeout(() => {
      this.selectedExerciseImage.set(
        this.buildGoogleThumbnailUrl(exercise.imageId!),
      );
    });
  }

  private buildGoogleThumbnailUrl(imageId: string): string {
    /*
     * Keep this modest.
     *
     * You don't need w1000 for most
     * workout modals on phones.
     */
    return "https://drive.google.com/thumbnail" + `?id=${imageId}` + "&sz=w600";
  }

  /* ============================
     STORAGE
     ============================ */

  private exerciseKey(exercise: Exercise): string {
    return [this.selectedPlan().id, this.selectedDay().id, exercise.id].join(
      ":",
    );
  }

  private loadProgress(): void {
    const today = this.todayKey();

    try {
      const raw = localStorage.getItem(this.storageKey);

      if (!raw) {
        this.writeEmptyProgress(today);

        return;
      }

      const saved = JSON.parse(raw) as DailyProgress;

      if (saved.date !== today) {
        this.writeEmptyProgress(today);

        return;
      }

      this.completed.set(saved.completed ?? {});
    } catch {
      this.writeEmptyProgress(today);
    }
  }

  private saveProgress(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const state: DailyProgress = {
      date: this.todayKey(),

      completed: this.completed(),
    };

    localStorage.setItem(this.storageKey, JSON.stringify(state));
  }

  private writeEmptyProgress(date: string): void {
    this.completed.set({});

    const state: DailyProgress = {
      date,

      completed: {},
    };

    localStorage.setItem(this.storageKey, JSON.stringify(state));
  }

  /* ============================
     MIDNIGHT RESET
     ============================ */

  private scheduleMidnightReset(): void {
    const now = new Date();

    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0,
      100,
    );

    const delay = midnight.getTime() - now.getTime();

    this.midnightTimer = setTimeout(() => {
      this.writeEmptyProgress(this.todayKey());

      this.scheduleMidnightReset();
    }, delay);
  }

  private todayKey(): string {
    const date = new Date();

    const year = date.getFullYear();

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
}
