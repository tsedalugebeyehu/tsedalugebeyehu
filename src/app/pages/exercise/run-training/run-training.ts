import { Component, computed, inject, signal } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";

import {
  RUN_TRAINING_PLANS,
  RunDistance,
  RunTrainingPlan,
} from "../../../data/run-training.data";

interface DistanceTab {
  id: RunDistance;
  label: string;
  description: string;
}

@Component({
  selector: "app-run-training",
  standalone: true,
  templateUrl: "./run-training.html",
  styleUrl: "./run-training.scss",
})
export class RunTraining {
  private readonly route = inject(ActivatedRoute);

  private readonly router = inject(Router);

  readonly plans = RUN_TRAINING_PLANS;

  readonly distanceTabs: DistanceTab[] = [
    {
      id: "5k",
      label: "5K",
      description: "Speed & Race Training",
    },
    {
      id: "10k",
      label: "10K",
      description: "Speed & Endurance",
    },
    {
      id: "half-marathon",
      label: "Half Marathon",
      description: "Endurance & Race Preparation",
    },
    {
      id: 'marathon',
      label: 'Marathon',
      description: '26.2 Mile Preparation',
    }
  ];

  readonly selectedDistance = signal<RunDistance>("5k");

  readonly selectedPlanId = signal<string>("5k-sub-20");

  readonly distancePlans = computed(() =>
    this.plans.filter((plan) => plan.distance === this.selectedDistance()),
  );

  readonly selectedPlan = computed<RunTrainingPlan | undefined>(() => {
    return this.plans.find((plan) => plan.id === this.selectedPlanId());
  });

  constructor() {
    /*
     * Listen to URL changes.
     *
     * Example:
     * /exercise/running/10k-sub-50
     */
    this.route.paramMap.subscribe((params) => {
      const planId = params.get("planId");

      if (!planId) {
        /*
         * /exercise/running
         *
         * Default to 5K Sub-20.
         */
        this.setPlanFromId("5k-sub-20");

        return;
      }

      this.setPlanFromId(planId);
    });
  }

  private setPlanFromId(planId: string): void {
    const plan = this.plans.find((item) => item.id === planId);

    /*
     * Unknown URL:
     *
     * /exercise/running/whatever
     */
    if (!plan) {
      this.selectedDistance.set("5k");

      this.selectedPlanId.set("5k-sub-20");

      return;
    }

    /*
     * Automatically select BOTH:
     *
     * 1. Distance tab
     * 2. Plan tab
     */
    this.selectedDistance.set(plan.distance);

    this.selectedPlanId.set(plan.id);
  }

  selectDistance(distance: RunDistance): void {
    const firstPlan = this.plans.find((plan) => plan.distance === distance);

    if (!firstPlan) {
      return;
    }

    /*
     * Instead of only changing a signal,
     * update the URL.
     */
    this.router.navigate(["/exercise/running", firstPlan.id]);
  }

  selectPlan(planId: string): void {
    /*
     * URL becomes:
     *
     * /exercise/running/5k-sub-20
     */
    this.router.navigate(["/exercise/running", planId]);
  }
}
