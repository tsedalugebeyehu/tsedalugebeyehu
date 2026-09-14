export type RunDistance = "5k" | "10k" | "half-marathon" | "marathon";

export interface RunWorkout {
  day: string;
  workout: string;
  detail?: string;
  note?: string;
}

export interface RunTrainingBlock {
  title: string;
  subtitle?: string;
  workouts: RunWorkout[];
}

export interface RunTrainingPlan {
  id: string;
  distance: RunDistance;

  title: string;
  shortTitle: string;

  description: string;

  goal: string;
  duration: string;

  trainingDays?: string;

  blocks: RunTrainingBlock[];
}

/* =========================================================
   5K
   ========================================================= */

const FIVE_K_SUB_20: RunTrainingPlan = {
  id: "5k-sub-20",
  distance: "5k",

  title: "5K Under 20 Minutes",
  shortTitle: "Sub-20 Plan",

  description:
    "Eight-week four-day running plan focused on speed, tempo, easy running and endurance.",

  goal: "Sub 20:00",
  duration: "8 Weeks",
  trainingDays: "Monday · Wednesday · Thursday · Saturday",

  blocks: [
    {
      title: "Week 1",
      workouts: [
        {
          day: "Monday",
          workout: "6 × 400m @ 9.5 mph",
          note: "Rest: 90s walk",
        },
        {
          day: "Wednesday",
          workout: "2.5 mi @ 6.0 mph",
          detail: "Easy",
        },
        {
          day: "Thursday",
          workout: "2 mi @ 7.5 mph",
          detail: "Tempo",
        },
        {
          day: "Saturday",
          workout: "3.5 mi @ 6.2 mph",
          detail: "Long Run",
        },
      ],
    },

    {
      title: "Week 2",
      workouts: [
        {
          day: "Monday",
          workout: "5 × 600m @ 9.3 mph",
          note: "Rest: 90s jog",
        },
        {
          day: "Wednesday",
          workout: "3 mi @ 6.2 mph",
          detail: "Easy",
        },
        {
          day: "Thursday",
          workout: "2.5 mi",
          detail: "Last 1 mi @ 7.8 mph",
        },
        {
          day: "Saturday",
          workout: "4 mi @ 6.2 mph",
          detail: "Long Run",
        },
      ],
    },

    {
      title: "Week 3",
      workouts: [
        {
          day: "Monday",
          workout: "4 × 800m @ 9.0 mph",
          note: "Rest: 2 min jog",
        },
        {
          day: "Wednesday",
          workout: "3 mi @ 6.2 mph",
          detail: "Easy",
        },
        {
          day: "Thursday",
          workout: "3 mi @ 7.8 mph",
          detail: "Tempo",
        },
        {
          day: "Saturday",
          workout: "4.5 mi @ 6.4 mph",
          detail: "Long Run",
        },
      ],
    },

    {
      title: "Week 4",
      workouts: [
        {
          day: "Monday",
          workout: "8 × 400m @ 9.5 mph",
          note: "Rest: 90s walk",
        },
        {
          day: "Wednesday",
          workout: "3 mi @ 6.2 mph",
          detail: "Easy",
        },
        {
          day: "Thursday",
          workout: "3.5 mi @ 7.8 mph",
          detail: "Tempo",
        },
        {
          day: "Saturday",
          workout: "5 mi @ 6.5 mph",
          detail: "Long Run",
        },
      ],
    },

    {
      title: "Week 5",
      workouts: [
        {
          day: "Monday",
          workout: "6 × 600m @ 9.3 mph",
          note: "Rest: 90s jog",
        },
        {
          day: "Wednesday",
          workout: "3 mi @ 6.2 mph",
          detail: "Easy",
        },
        {
          day: "Thursday",
          workout: "4 mi",
          detail: "Last 2 mi @ 8.0 mph",
        },
        {
          day: "Saturday",
          workout: "5.5 mi @ 6.5 mph",
          detail: "Long Run",
        },
      ],
    },

    {
      title: "Week 6",
      workouts: [
        {
          day: "Monday",
          workout: "5 × 800m @ 9.0–9.2 mph",
          note: "Rest: 2 min jog",
        },
        {
          day: "Wednesday",
          workout: "3.5 mi @ 6.5 mph",
          detail: "Easy",
        },
        {
          day: "Thursday",
          workout: "3.5 mi @ 8.0 mph",
          detail: "Tempo",
        },
        {
          day: "Saturday",
          workout: "6 mi @ 6.5 mph",
          detail: "Long Run",
        },
      ],
    },

    {
      title: "Week 7",
      workouts: [
        {
          day: "Monday",
          workout: "6 × 400m @ 9.5 mph",
          note: "Rest: 1 min jog",
        },
        {
          day: "Wednesday",
          workout: "3 mi easy",
        },
        {
          day: "Thursday",
          workout: "2.5 mi @ 8.0 mph",
          detail: "Tempo",
        },
        {
          day: "Saturday",
          workout: "4 mi @ 8.3 mph",
          detail: "Race pace",
        },
      ],
    },

    {
      title: "Week 8",
      subtitle: "Taper / Race Week",

      workouts: [
        {
          day: "Monday",
          workout: "4 × 200m @ 10.0 mph",
          note: "Rest: 60s walk",
        },
        {
          day: "Wednesday",
          workout: "2 mi @ 6.0 mph",
          detail: "Easy",
        },
        {
          day: "Thursday",
          workout: "REST",
        },
        {
          day: "Saturday",
          workout: "Race Day – 5K!",
          detail: "Target: Under 20 minutes",
        },
      ],
    },
  ],
};

/* =========================================================
   5K TREADMILL
   ========================================================= */

const FIVE_K_TREADMILL: RunTrainingPlan = {
  id: "5k-treadmill-sub-20",
  distance: "5k",

  title: "Treadmill 5K Training Plan",
  shortTitle: "Sub-20 Treadmill",

  description:
    "Aggressive treadmill-focused 5K program with intervals, tempo running, easy mileage and progressive long runs.",

  goal: "19:30–19:59",
  duration: "8 Weeks",
  trainingDays: "4 Runs / Week",

  blocks: [
    {
      title: "Week 1",
      workouts: [
        {
          day: "Day 1",
          workout: "8 × 0.25 mi @ 9.6 mph",
          detail: "Intervals",
          note: "6:15/mi · 90s jog @ 6.0 mph",
        },
        {
          day: "Day 2",
          workout: "2.5 mi @ 9.0 mph",
          detail: "Tempo",
          note: "6:40/mi",
        },
        {
          day: "Day 3",
          workout: "3 mi @ 7.1 mph",
          detail: "Easy",
          note: "8:30/mi",
        },
        {
          day: "Day 4",
          workout: "5 mi @ 7.7 mph",
          detail: "Long Run",
          note: "7:45/mi",
        },
      ],
    },

    {
      title: "Week 2",
      workouts: [
        {
          day: "Day 1",
          workout: "10 × 0.25 mi @ 9.7 mph",
          detail: "Intervals",
          note: "6:10/mi · 90s jog @ 6.0 mph",
        },
        {
          day: "Day 2",
          workout: "3 mi @ 9.1 mph",
          detail: "Tempo",
          note: "6:35/mi",
        },
        {
          day: "Day 3",
          workout: "3.5 mi @ 7.1 mph",
          detail: "Easy",
          note: "8:30/mi",
        },
        {
          day: "Day 4",
          workout: "5.5 mi @ 7.8 mph",
          detail: "Long Run",
          note: "7:40/mi",
        },
      ],
    },

    {
      title: "Week 3",
      workouts: [
        {
          day: "Day 1",
          workout: "6 × 0.5 mi @ 9.6 mph",
          detail: "Intervals",
          note: "6:15/mi · 2 min jog @ 6.0 mph",
        },
        {
          day: "Day 2",
          workout: "3.1 mi @ 9.1 mph",
          detail: "Tempo",
          note: "5K @ 6:35/mi",
        },
        {
          day: "Day 3",
          workout: "4 mi @ 7.1 mph",
          detail: "Easy",
        },
        {
          day: "Day 4",
          workout: "6 mi @ 7.8 mph",
          detail: "Long Run",
          note: "7:40/mi",
        },
      ],
    },

    {
      title: "Week 4",
      workouts: [
        {
          day: "Day 1",
          workout: "8 × 0.4 mi @ 9.7 mph",
          detail: "Intervals",
          note: "6:10/mi · 2 min jog",
        },
        {
          day: "Day 2",
          workout: "3.5 mi @ 9.2 mph",
          detail: "Tempo",
          note: "6:30/mi",
        },
        {
          day: "Day 3",
          workout: "4 mi @ 7.1 mph",
          detail: "Easy",
        },
        {
          day: "Day 4",
          workout: "6.5 mi @ 7.8 mph",
          detail: "Long Run",
        },
      ],
    },

    {
      title: "Week 5",
      workouts: [
        {
          day: "Day 1",
          workout: "12 × 0.25 mi @ 9.9 mph",
          detail: "Intervals",
          note: "6:05/mi · 90s jog",
        },
        {
          day: "Day 2",
          workout: "4 mi @ 9.2 mph",
          detail: "Tempo",
        },
        {
          day: "Day 3",
          workout: "3 mi @ 7.1 mph",
          detail: "Easy",
        },
        {
          day: "Day 4",
          workout: "7 mi @ 7.9 mph",
          detail: "Long Run",
          note: "7:35/mi",
        },
      ],
    },

    {
      title: "Week 6",
      workouts: [
        {
          day: "Day 1",
          workout: "5 × 1 mi @ 9.4 mph",
          detail: "Intervals",
          note: "6:20/mi · 3 min jog",
        },
        {
          day: "Day 2",
          workout: "4.5 mi @ 9.2 mph",
          detail: "Tempo",
        },
        {
          day: "Day 3",
          workout: "3.5 mi @ 7.1 mph",
          detail: "Easy",
        },
        {
          day: "Day 4",
          workout: "7.5 mi",
          detail: "Long Run",
          note: "Last 2 mi @ 8.7 mph",
        },
      ],
    },

    {
      title: "Week 7",
      workouts: [
        {
          day: "Day 1",
          workout: "6 × 1 mi @ 9.6 mph",
          detail: "Intervals",
          note: "6:15/mi · 2.5 min jog",
        },
        {
          day: "Day 2",
          workout: "5 mi @ 9.3 mph",
          detail: "Tempo",
          note: "6:25/mi",
        },
        {
          day: "Day 3",
          workout: "3 mi @ 7.1 mph",
          detail: "Easy",
        },
        {
          day: "Day 4",
          workout: "6 mi progression",
          detail: "Long Run",
          note: "Finish @ 9.3 mph",
        },
      ],
    },

    {
      title: "Week 8",
      subtitle: "Race Week",

      workouts: [
        {
          day: "Day 1",
          workout: "6 × 0.25 mi @ 10 mph",
          detail: "Intervals",
          note: "6:00/mi · 90s jog",
        },
        {
          day: "Day 2",
          workout: "2 mi @ 9.3 mph",
          detail: "Tempo",
        },
        {
          day: "Day 3",
          workout: "2 mi @ 7.1 mph",
          detail: "Easy",
        },
        {
          day: "Day 4",
          workout: "5K Race",
          detail: "Race Day",
          note: "Target 19:30–19:59",
        },
      ],
    },
  ],
};

/* =========================================================
   10K SUB-50
   ========================================================= */

const TEN_K_SUB_50: RunTrainingPlan = {
  id: "10k-sub-50",
  distance: "10k",

  title: "10K Sub-50 Treadmill Training",
  shortTitle: "Sub-50 Plan",

  description: "Eight-week treadmill program designed around four weekly runs.",

  goal: "Sub 50:00",
  duration: "8 Weeks",
  trainingDays: "Monday · Wednesday · Thursday · Saturday",

  blocks: [
    {
      title: "Week 1",
      workouts: [
        {
          day: "Monday",
          workout: "6 × 400m @ 8.5 mph",
          detail: "Speed",
          note: "Rest: 90s walk",
        },
        {
          day: "Wednesday",
          workout: "3 mi @ 6.0 mph",
          detail: "Easy",
        },
        {
          day: "Thursday",
          workout: "2 mi @ 7.0 mph",
          detail: "Tempo",
        },
        {
          day: "Saturday",
          workout: "4 mi @ 6.2 mph",
          detail: "Long",
        },
      ],
    },

    {
      title: "Week 2",
      workouts: [
        {
          day: "Monday",
          workout: "5 × 600m @ 8.3 mph",
          detail: "Speed",
          note: "Rest: 90s jog",
        },
        {
          day: "Wednesday",
          workout: "3.5 mi @ 6.0 mph",
          detail: "Easy",
        },
        {
          day: "Thursday",
          workout: "2.5 mi @ 7.2 mph",
          detail: "Tempo",
        },
        {
          day: "Saturday",
          workout: "5 mi @ 6.2 mph",
          detail: "Long",
        },
      ],
    },

    {
      title: "Week 3",
      workouts: [
        {
          day: "Monday",
          workout: "4 × 800m @ 8.0 mph",
          detail: "Speed",
          note: "Rest: 2 min jog",
        },
        {
          day: "Wednesday",
          workout: "3.5 mi @ 6.2 mph",
          detail: "Easy",
        },
        {
          day: "Thursday",
          workout: "3 mi @ 7.3 mph",
          detail: "Tempo",
        },
        {
          day: "Saturday",
          workout: "5.5 mi @ 6.3 mph",
          detail: "Long",
        },
      ],
    },

    {
      title: "Week 4",
      workouts: [
        {
          day: "Monday",
          workout: "8 × 400m @ 8.5 mph",
          detail: "Speed",
          note: "Rest: 90s walk",
        },
        {
          day: "Wednesday",
          workout: "4 mi @ 6.2 mph",
          detail: "Easy",
        },
        {
          day: "Thursday",
          workout: "3.5 mi @ 7.4 mph",
          detail: "Tempo",
        },
        {
          day: "Saturday",
          workout: "6 mi @ 6.5 mph",
          detail: "Long",
        },
      ],
    },

    {
      title: "Week 5",
      workouts: [
        {
          day: "Monday",
          workout: "6 × 600m @ 8.3 mph",
          detail: "Speed",
          note: "Rest: 90s jog",
        },
        {
          day: "Wednesday",
          workout: "4 mi @ 6.2 mph",
          detail: "Easy",
        },
        {
          day: "Thursday",
          workout: "4 mi",
          detail: "Tempo",
          note: "Last 2 mi @ 7.5 mph",
        },
        {
          day: "Saturday",
          workout: "6.5 mi @ 6.5 mph",
          detail: "Long",
        },
      ],
    },

    {
      title: "Week 6",
      workouts: [
        {
          day: "Monday",
          workout: "5 × 800m @ 8.0–8.2 mph",
          detail: "Speed",
          note: "Rest: 2 min jog",
        },
        {
          day: "Wednesday",
          workout: "4.5 mi @ 6.5 mph",
          detail: "Easy",
        },
        {
          day: "Thursday",
          workout: "4 mi @ 7.6 mph",
          detail: "Tempo",
        },
        {
          day: "Saturday",
          workout: "7 mi @ 6.5 mph",
          detail: "Long",
        },
      ],
    },

    {
      title: "Week 7",
      workouts: [
        {
          day: "Monday",
          workout: "6 × 400m @ 8.7 mph",
          detail: "Speed",
          note: "Rest: 1 min jog",
        },
        {
          day: "Wednesday",
          workout: "3.5 mi easy",
        },
        {
          day: "Thursday",
          workout: "3 mi @ 7.5 mph",
          detail: "Tempo",
        },
        {
          day: "Saturday",
          workout: "6 mi @ 7.5 mph",
          detail: "Race Pace",
        },
      ],
    },

    {
      title: "Week 8",
      subtitle: "Taper",

      workouts: [
        {
          day: "Monday",
          workout: "4 × 200m @ 9.0 mph",
          detail: "Speed",
          note: "Rest: 60s walk",
        },
        {
          day: "Wednesday",
          workout: "2.5 mi @ 6.0 mph",
          detail: "Easy",
        },
        {
          day: "Thursday",
          workout: "REST",
        },
        {
          day: "Saturday",
          workout: "Race Day – 10K!",
        },
      ],
    },
  ],
};

/* =========================================================
   10K SUB-40
   ========================================================= */

const TEN_K_SUB_40: RunTrainingPlan = {
  id: "10k-treadmill-sub-40",
  distance: "10k",

  title: "Treadmill 10K Sub-40 Training",
  shortTitle: "Sub-40 Treadmill",

  description:
    "Eight-week advanced treadmill plan targeting a sub-40-minute 10K.",

  goal: "39:30–39:59",
  duration: "8 Weeks",
  trainingDays: "4 Runs / Week",

  blocks: [
    {
      title: "Week 1",
      workouts: [
        {
          day: "Day 1",
          workout: "8 × 0.25 mi @ 9.7 mph",
          detail: "Intervals",
          note: "90s easy jog",
        },
        {
          day: "Day 2",
          workout: "3.1 mi @ 9.1 mph",
          detail: "Tempo",
        },
        {
          day: "Day 3",
          workout: "45 min @ 7.1 mph",
          detail: "Easy",
        },
        {
          day: "Day 4",
          workout: "6.2 mi @ 7.8 mph",
          detail: "Long Run",
        },
      ],
    },

    {
      title: "Week 2",
      workouts: [
        {
          day: "Day 1",
          workout: "10 × 0.25 mi @ 10.0 mph",
          detail: "Intervals",
          note: "90s recovery",
        },
        {
          day: "Day 2",
          workout: "3.7 mi @ 9.3 mph",
          detail: "Tempo",
        },
        {
          day: "Day 3",
          workout: "50 min @ 7.1 mph",
          detail: "Easy",
        },
        {
          day: "Day 4",
          workout: "6.8 mi @ 7.8 mph",
          detail: "Long Run",
        },
      ],
    },

    {
      title: "Week 3",
      workouts: [
        {
          day: "Day 1",
          workout: "6 × 0.5 mi @ 9.7 mph",
          detail: "Intervals",
          note: "2 min recovery",
        },
        {
          day: "Day 2",
          workout: "4 mi @ 9.3 mph",
          detail: "Tempo",
        },
        {
          day: "Day 3",
          workout: "50 min @ 7.0 mph",
          detail: "Easy",
        },
        {
          day: "Day 4",
          workout: "7.5 mi @ 7.8 mph",
          detail: "Long Run",
        },
      ],
    },

    {
      title: "Week 4",
      workouts: [
        {
          day: "Day 1",
          workout: "8 × 0.37 mi @ 10.0 mph",
          detail: "Intervals",
          note: "2 min recovery",
        },
        {
          day: "Day 2",
          workout: "4.3 mi @ 9.4 mph",
          detail: "Tempo",
        },
        {
          day: "Day 3",
          workout: "55 min @ 7.1 mph",
          detail: "Easy",
        },
        {
          day: "Day 4",
          workout: "8.1 mi @ 7.8 mph",
          detail: "Long Run",
        },
      ],
    },

    {
      title: "Week 5",
      workouts: [
        {
          day: "Day 1",
          workout: "12 × 0.25 mi @ 10.1 mph",
          detail: "Intervals",
          note: "90s recovery",
        },
        {
          day: "Day 2",
          workout: "4.7 mi @ 9.4 mph",
          detail: "Tempo",
        },
        {
          day: "Day 3",
          workout: "50 min @ 7.0 mph",
          detail: "Easy",
        },
        {
          day: "Day 4",
          workout: "8.7 mi @ 7.8 mph",
          detail: "Long Run",
        },
      ],
    },

    {
      title: "Week 6",
      workouts: [
        {
          day: "Day 1",
          workout: "5 × 0.62 mi @ 9.7 mph",
          detail: "Intervals",
          note: "3 min recovery",
        },
        {
          day: "Day 2",
          workout: "5 mi @ 9.6 mph",
          detail: "Tempo",
        },
        {
          day: "Day 3",
          workout: "55 min @ 7.1 mph",
          detail: "Easy",
        },
        {
          day: "Day 4",
          workout: "8.7 mi",
          detail: "Long Run",
          note: "Last 1.2 mi @ 9.3 mph",
        },
      ],
    },

    {
      title: "Week 7",
      workouts: [
        {
          day: "Day 1",
          workout: "6 × 0.62 mi @ 9.9 mph",
          detail: "Intervals",
          note: "2.5 min recovery",
        },
        {
          day: "Day 2",
          workout: "5.3 mi @ 9.6 mph",
          detail: "Tempo",
        },
        {
          day: "Day 3",
          workout: "50 min @ 7.0 mph",
          detail: "Easy",
        },
        {
          day: "Day 4",
          workout: "7.5 mi progression",
          detail: "Long Run",
          note: "Finish @ 9.3 mph",
        },
      ],
    },

    {
      title: "Week 8",
      subtitle: "Race Week",

      workouts: [
        {
          day: "Day 1",
          workout: "6 × 0.25 mi @ 10.1 mph",
          detail: "Intervals",
          note: "90s recovery",
        },
        {
          day: "Day 2",
          workout: "3.1 mi @ 9.6 mph",
          detail: "Tempo",
        },
        {
          day: "Day 3",
          workout: "30 min @ 7.0 mph",
          detail: "Easy",
        },
        {
          day: "Day 4",
          workout: "6.2 mi Race",
          detail: "Race Day",
          note: "Target 39:30–39:59",
        },
      ],
    },
  ],
};

/* =========================================================
   HALF MARATHON – TREADMILL
   ========================================================= */

const HALF_TREADMILL: RunTrainingPlan = {
  id: "half-marathon-treadmill",
  distance: "half-marathon",

  title: "6-Month Half Marathon Treadmill Plan",
  shortTitle: "6-Month Treadmill",

  description:
    "Progressive treadmill-based half marathon training from aerobic base through race-specific preparation.",

  goal: "Sub 1:30",
  duration: "6 Months",
  trainingDays: "M · W · T · S",

  blocks: [
    {
      title: "Month 1",
      subtitle: "Base Building",

      workouts: [
        {
          day: "M",
          workout: "Easy 4 mi",
          detail: "6.5–7 mph",
          note: "Comfort & cadence",
        },
        {
          day: "W",
          workout: "3 × 1 mi Tempo",
          detail: "8.5–9 mph",
          note: "0.5 mi jog recovery",
        },
        {
          day: "T",
          workout: "6 × 2 min Hill",
          detail: "7.5–8 mph",
          note: "4% incline",
        },
        {
          day: "S",
          workout: "Long 7 mi",
          detail: "6.5–7.2 mph",
          note: "End strong",
        },
      ],
    },

    {
      title: "Month 2",
      subtitle: "Aerobic Endurance",

      workouts: [
        {
          day: "M",
          workout: "Easy 5 mi",
          detail: "6.5–7 mph",
          note: "Zone 2",
        },
        {
          day: "W",
          workout: "Tempo 4 mi",
          detail: "8–8.5 mph",
          note: "Comfort-hard",
        },
        {
          day: "T",
          workout: "3 × 6 min Hill",
          detail: "7.5–8 mph",
          note: "3% incline",
        },
        {
          day: "S",
          workout: "Long 9 mi",
          detail: "6.5–7.2 mph",
          note: "Last mile faster",
        },
      ],
    },

    {
      title: "Month 3",
      subtitle: "Strength & Speed",

      workouts: [
        {
          day: "M",
          workout: "Recovery 4 mi",
          detail: "6.2–6.5 mph",
          note: "Very easy",
        },
        {
          day: "W",
          workout: "6 × 800m",
          detail: "9–9.5 mph",
          note: "400m recovery",
        },
        {
          day: "T",
          workout: "4 × 5 min Hill",
          detail: "8 mph",
          note: "3% incline",
        },
        {
          day: "S",
          workout: "Long 10 mi",
          detail: "6.7–7.3 mph",
          note: "Progress end",
        },
      ],
    },

    {
      title: "Month 4",
      subtitle: "Threshold & Endurance",

      workouts: [
        {
          day: "M",
          workout: "Easy 5 mi",
          detail: "6.5–7 mph",
          note: "Low intensity",
        },
        {
          day: "W",
          workout: "Tempo 5 mi",
          detail: "8–8.3 mph",
          note: "HM effort",
        },
        {
          day: "T",
          workout: "8 × 90s Hill",
          detail: "7.8–8 mph",
          note: "5% incline",
        },
        {
          day: "S",
          workout: "Long 11 mi",
          detail: "6.8–7.2 mph",
          note: "Finish strong",
        },
      ],
    },

    {
      title: "Month 5",
      subtitle: "Race Simulation",

      workouts: [
        {
          day: "M",
          workout: "Recovery 4 mi",
          detail: "6.3–6.8 mph",
          note: "Shakeout",
        },
        {
          day: "W",
          workout: "5 × 1 mi",
          detail: "8.5–8.8 mph",
          note: "10K pace",
        },
        {
          day: "T",
          workout: "3 × 10 min",
          detail: "8 mph",
          note: "2% incline",
        },
        {
          day: "S",
          workout: "Long 12 mi",
          detail: "6.8–7.3 mph",
          note: "Simulate fueling",
        },
      ],
    },

    {
      title: "Month 6",
      subtitle: "Peak & Taper",

      workouts: [
        {
          day: "M",
          workout: "Easy 4 mi",
          detail: "6.2–6.8 mph",
          note: "Short & light",
        },
        {
          day: "W",
          workout: "Race-Pace 5 mi",
          detail: "8.5 mph",
          note: "7:00/mi",
        },
        {
          day: "T",
          workout: "6 × 1 min Strides",
          detail: "9 mph",
          note: "Full recovery",
        },
        {
          day: "S",
          workout: "Long 8–9 mi",
          detail: "6.5–8 mph",
          note: "Last 3 mi @ race pace",
        },
      ],
    },
  ],
};

/* =========================================================
   HALF MARATHON – 24 WEEK
   ========================================================= */

const HALF_24_WEEK: RunTrainingPlan = {
  id: "half-marathon-24-week",
  distance: "half-marathon",

  title: "24-Week Half Marathon Plan",
  shortTitle: "24-Week Plan",

  description:
    "Four-run-per-week half marathon plan progressing from base building through race simulation, peak training and taper.",

  goal: "Sub 1:30",
  duration: "24 Weeks",
  trainingDays: "Monday · Wednesday · Thursday · Saturday",

  blocks: [
    {
      title: "Weeks 1–4",
      subtitle: "Base Building",

      workouts: [
        {
          day: "Monday",
          workout: "Easy Run 4–5 mi",
          note: "Keep it light; build aerobic base.",
        },
        {
          day: "Wednesday",
          workout: "Tempo 3 mi @ 7:10/mi",
          detail: "Inside 6 mi total",
          note: "Controlled pace, not all-out.",
        },
        {
          day: "Thursday",
          workout: "Easy 4 mi + 6 strides",
          note: "Short strides improve form.",
        },
        {
          day: "Saturday",
          workout: "Long Run 8–10 mi",
          note: "Stay relaxed and steady.",
        },
      ],
    },

    {
      title: "Weeks 5–8",
      subtitle: "Strength & Endurance",

      workouts: [
        {
          day: "Monday",
          workout: "Easy Run 5 mi",
          note: "Keep effort light.",
        },
        {
          day: "Wednesday",
          workout: "6 × 800m @ 10K pace",
          note: "400m jog recovery.",
        },
        {
          day: "Thursday",
          workout: "Tempo 4 mi @ 7:00/mi",
          detail: "Inside 7 mi",
          note: "Steady threshold effort.",
        },
        {
          day: "Saturday",
          workout: "Long Run 10–12 mi",
          note: "Add approximately 1 mile gradually.",
        },
      ],
    },

    {
      title: "Weeks 9–12",
      subtitle: "Speed Development",

      workouts: [
        {
          day: "Monday",
          workout: "Easy Run 5–6 mi",
          note: "Optional short hill sprints.",
        },
        {
          day: "Wednesday",
          workout: "8 × 400m @ 5K pace",
          note: "200m jog recovery.",
        },
        {
          day: "Thursday",
          workout: "Tempo 5 mi @ 6:50/mi",
          note: "Push threshold gently.",
        },
        {
          day: "Saturday",
          workout: "Long Run 12–13 mi",
          detail: "Last 2 mi faster",
          note: "Endurance & pacing.",
        },
      ],
    },

    {
      title: "Weeks 13–16",
      subtitle: "Race Simulation",

      workouts: [
        {
          day: "Monday",
          workout: "Easy Run 6 mi",
          note: "Stay aerobic.",
        },
        {
          day: "Wednesday",
          workout: "5 × 1K @ 5K pace",
          note: "400m recovery.",
        },
        {
          day: "Thursday",
          workout: "Tempo 6 mi @ 6:50–6:55",
          detail: "Goal pace",
          note: "Simulate race rhythm.",
        },
        {
          day: "Saturday",
          workout: "Long Run 13–15 mi",
          detail: "Last 3 mi @ goal pace",
          note: "Race rehearsal.",
        },
      ],
    },

    {
      title: "Weeks 17–20",
      subtitle: "Peak Phase",

      workouts: [
        {
          day: "Monday",
          workout: "Easy Run 6–7 mi",
          note: "Optional 8 strides.",
        },
        {
          day: "Wednesday",
          workout: "10 × 400m",
          detail: "Faster than 5K pace",
          note: "Speed & efficiency.",
        },
        {
          day: "Thursday",
          workout: "Tempo 7 mi @ 6:45–6:55",
          note: "Strong effort; confidence run.",
        },
        {
          day: "Saturday",
          workout: "Long Run 14–16 mi",
          note: "Peak endurance.",
        },
      ],
    },

    {
      title: "Weeks 21–24",
      subtitle: "Taper & Race Week",

      workouts: [
        {
          day: "Monday",
          workout: "Easy Run 5 mi",
          note: "Reduce mileage 20–30%.",
        },
        {
          day: "Wednesday",
          workout: "Short Tempo 3–4 mi",
          detail: "Goal pace",
          note: "Keep legs fresh.",
        },
        {
          day: "Thursday",
          workout: "4 × 400m @ 5K pace",
          detail: "Speed",
          note: "Stay sharp.",
        },
        {
          day: "Saturday",
          workout: "Race Simulation 8–10 mi",
          detail: "Final Week: Race Day",
          note: "Trust the training.",
        },
      ],
    },
  ],
};

const MARATHON_6_MONTH: RunTrainingPlan = {
  id: "marathon-6-month",
  distance: "marathon",

  title: "6-Month Marathon Training Plan",
  shortTitle: "6-Month Road Plan",

  description:
    "Twenty-four-week marathon plan built around four weekly runs, progressing from aerobic base and threshold development into marathon-specific long runs, peak mileage and taper.",

  goal: "26.2 Miles",
  duration: "24 Weeks",
  trainingDays: "Monday · Wednesday · Thursday · Saturday",

  blocks: [
    {
      title: "Weeks 1–4",
      subtitle: "Base Building",

      workouts: [
        {
          day: "Monday",
          workout: "Easy Run 4–5 mi",
          detail: "Easy",
          note: "Comfortable conversational effort.",
        },
        {
          day: "Wednesday",
          workout: "Tempo 3 mi",
          detail: "Tempo",
          note: "Include warm-up and cool-down.",
        },
        {
          day: "Thursday",
          workout: "Easy 4 mi + 6 strides",
          detail: "Easy + Strides",
          note: "Relaxed running with short controlled strides.",
        },
        {
          day: "Saturday",
          workout: "Long Run 8–10 mi",
          detail: "Long Run",
          note: "Stay easy and focus on aerobic endurance.",
        },
      ],
    },

    {
      title: "Weeks 5–8",
      subtitle: "Aerobic Endurance",

      workouts: [
        {
          day: "Monday",
          workout: "Easy Run 5 mi",
          detail: "Easy",
          note: "Keep the effort controlled.",
        },
        {
          day: "Wednesday",
          workout: "5 × 800m",
          detail: "Intervals",
          note: "Run around 10K effort with easy jog recovery.",
        },
        {
          day: "Thursday",
          workout: "Tempo 4–5 mi",
          detail: "Tempo",
          note: "Controlled threshold effort.",
        },
        {
          day: "Saturday",
          workout: "Long Run 11–13 mi",
          detail: "Long Run",
          note: "Build distance gradually.",
        },
      ],
    },

    {
      title: "Weeks 9–12",
      subtitle: "Strength & Endurance",

      workouts: [
        {
          day: "Monday",
          workout: "Recovery Run 5 mi",
          detail: "Recovery",
          note: "Very comfortable effort.",
        },
        {
          day: "Wednesday",
          workout: "6 × 1 km",
          detail: "Intervals",
          note: "Approximately 10K effort with controlled recovery.",
        },
        {
          day: "Thursday",
          workout: "Medium Run 7–8 mi",
          detail: "Steady",
          note: "Finish the final miles moderately strong.",
        },
        {
          day: "Saturday",
          workout: "Long Run 14–16 mi",
          detail: "Long Run",
          note: "Practice hydration and fueling.",
        },
      ],
    },

    {
      title: "Weeks 13–16",
      subtitle: "Marathon Specific",

      workouts: [
        {
          day: "Monday",
          workout: "Easy Run 5–6 mi",
          detail: "Easy",
          note: "Recovery-oriented aerobic running.",
        },
        {
          day: "Wednesday",
          workout: "3 × 2 mi",
          detail: "Threshold",
          note: "Comfortably hard effort with easy recovery.",
        },
        {
          day: "Thursday",
          workout: "8–10 mi Steady",
          detail: "Medium Long",
          note: "Include 3–4 mi at marathon effort.",
        },
        {
          day: "Saturday",
          workout: "Long Run 17–19 mi",
          detail: "Long Run",
          note: "Finish the last 3–4 mi stronger when comfortable.",
        },
      ],
    },

    {
      title: "Weeks 17–20",
      subtitle: "Peak Phase",

      workouts: [
        {
          day: "Monday",
          workout: "Recovery Run 5–6 mi",
          detail: "Recovery",
          note: "Keep the legs fresh after long runs.",
        },
        {
          day: "Wednesday",
          workout: "5 × 1 mi",
          detail: "Intervals",
          note: "Approximately half-marathon to 10K effort.",
        },
        {
          day: "Thursday",
          workout: "10 mi with 5–6 mi Marathon Pace",
          detail: "Marathon Pace",
          note: "Practice controlled race rhythm.",
        },
        {
          day: "Saturday",
          workout: "Long Run 18–20 mi",
          detail: "Peak Long Run",
          note: "Practice race-day fueling, hydration and equipment.",
        },
      ],
    },

    {
      title: "Weeks 21–24",
      subtitle: "Taper & Race",

      workouts: [
        {
          day: "Monday",
          workout: "Easy Run 4–5 mi",
          detail: "Easy",
          note: "Reduce overall mileage.",
        },
        {
          day: "Wednesday",
          workout: "Short Marathon-Pace Run",
          detail: "Marathon Pace",
          note: "3–5 mi at controlled marathon effort.",
        },
        {
          day: "Thursday",
          workout: "Easy 3–4 mi + Strides",
          detail: "Easy",
          note: "Keep the legs sharp without creating fatigue.",
        },
        {
          day: "Saturday",
          workout: "Long Run 12 → 8 → Race",
          detail: "Taper / Race",
          note: "Final week: Marathon Race Day — 26.2 mi.",
        },
      ],
    },
  ],
};

const MARATHON_6_MONTH_TREADMILL: RunTrainingPlan = {
  id: "marathon-6-month-treadmill",
  distance: "marathon",

  title: "6-Month Marathon Treadmill Plan",
  shortTitle: "6-Month Treadmill",

  description:
    "Twenty-four-week treadmill marathon plan using four running days per week with easy mileage, intervals, tempo work, marathon-pace sessions and progressive long runs.",

  goal: "26.2 Miles",
  duration: "24 Weeks",
  trainingDays: "Monday · Wednesday · Thursday · Saturday",

  blocks: [
    {
      title: "Weeks 1–4",
      subtitle: "Base Building",

      workouts: [
        {
          day: "Monday",
          workout: "Easy 4–5 mi",
          detail: "6.5–7.0 mph",
          note: "0.5–1% incline · conversational effort.",
        },
        {
          day: "Wednesday",
          workout: "Tempo 3 mi",
          detail: "7.5–8.2 mph",
          note: "Include easy warm-up and cool-down.",
        },
        {
          day: "Thursday",
          workout: "Easy 4 mi + 6 Strides",
          detail: "6.5–7.0 mph",
          note: "Strides: 20–30 sec around 8.5–9.0 mph.",
        },
        {
          day: "Saturday",
          workout: "Long Run 8–10 mi",
          detail: "6.5–7.2 mph",
          note: "Use 0.5–1% incline.",
        },
      ],
    },

    {
      title: "Weeks 5–8",
      subtitle: "Aerobic Endurance",

      workouts: [
        {
          day: "Monday",
          workout: "Easy 5 mi",
          detail: "6.5–7.0 mph",
          note: "Keep heart rate controlled.",
        },
        {
          day: "Wednesday",
          workout: "5 × 800m",
          detail: "8.5–9.0 mph",
          note: "400m easy recovery around 6.0–6.5 mph.",
        },
        {
          day: "Thursday",
          workout: "Tempo 4–5 mi",
          detail: "7.8–8.4 mph",
          note: "Comfortably hard sustained running.",
        },
        {
          day: "Saturday",
          workout: "Long Run 11–13 mi",
          detail: "6.5–7.2 mph",
          note: "Practice hydration during the run.",
        },
      ],
    },

    {
      title: "Weeks 9–12",
      subtitle: "Strength & Endurance",

      workouts: [
        {
          day: "Monday",
          workout: "Recovery 5 mi",
          detail: "6.2–6.7 mph",
          note: "Very easy effort.",
        },
        {
          day: "Wednesday",
          workout: "6 × 1 km",
          detail: "8.5–9.2 mph",
          note: "2–3 min easy jog recovery.",
        },
        {
          day: "Thursday",
          workout: "Medium Run 7–8 mi",
          detail: "6.8–7.5 mph",
          note: "Finish progressively faster.",
        },
        {
          day: "Saturday",
          workout: "Long Run 14–16 mi",
          detail: "6.5–7.2 mph",
          note: "Practice fueling every 30–45 minutes.",
        },
      ],
    },

    {
      title: "Weeks 13–16",
      subtitle: "Marathon Specific",

      workouts: [
        {
          day: "Monday",
          workout: "Easy 5–6 mi",
          detail: "6.4–7.0 mph",
          note: "Keep effort relaxed.",
        },
        {
          day: "Wednesday",
          workout: "3 × 2 mi",
          detail: "8.0–8.5 mph",
          note: "3 min easy jog between repetitions.",
        },
        {
          day: "Thursday",
          workout: "8–10 mi Steady",
          detail: "7.0–7.8 mph",
          note: "Last 3–4 mi near marathon effort.",
        },
        {
          day: "Saturday",
          workout: "Long Run 17–19 mi",
          detail: "6.5–7.3 mph",
          note: "Optional final 3 mi around 7.5–8.0 mph.",
        },
      ],
    },

    {
      title: "Weeks 17–20",
      subtitle: "Peak Phase",

      workouts: [
        {
          day: "Monday",
          workout: "Recovery 5–6 mi",
          detail: "6.2–6.7 mph",
          note: "Very comfortable running.",
        },
        {
          day: "Wednesday",
          workout: "5 × 1 mi",
          detail: "8.3–8.8 mph",
          note: "2–3 min easy recovery jog.",
        },
        {
          day: "Thursday",
          workout: "10 mi with Marathon Pace",
          detail: "7.5–8.2 mph",
          note: "Run 5–6 mi of the workout at marathon effort.",
        },
        {
          day: "Saturday",
          workout: "Long Run 18–20 mi",
          detail: "6.5–7.3 mph",
          note: "Peak endurance run. Practice complete race nutrition.",
        },
      ],
    },

    {
      title: "Weeks 21–24",
      subtitle: "Peak, Taper & Race",

      workouts: [
        {
          day: "Monday",
          workout: "Easy 4–5 mi",
          detail: "6.2–6.8 mph",
          note: "Reduce volume while maintaining frequency.",
        },
        {
          day: "Wednesday",
          workout: "Marathon Pace 3–5 mi",
          detail: "7.5–8.2 mph",
          note: "Controlled race-specific effort.",
        },
        {
          day: "Thursday",
          workout: "Easy 3–4 mi + Strides",
          detail: "6.3–6.8 mph",
          note: "Short strides around 8.5–9.0 mph.",
        },
        {
          day: "Saturday",
          workout: "12 mi → 8 mi → Race",
          detail: "Long / Race",
          note: "Final week: 26.2-mile marathon race.",
        },
      ],
    },
  ],
};

export const RUN_TRAINING_PLANS: RunTrainingPlan[] = [
  FIVE_K_SUB_20,
  FIVE_K_TREADMILL,

  TEN_K_SUB_50,
  TEN_K_SUB_40,

  HALF_TREADMILL,
  HALF_24_WEEK,

  MARATHON_6_MONTH,
  MARATHON_6_MONTH_TREADMILL,
];
