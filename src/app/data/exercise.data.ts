export interface TrainingCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  plans: TrainingPlan[];
}

export interface TrainingPlan {
  title: string;
  description: string;
  level: string;
  type: string;
  route: string;
}

export const TRAINING_CATEGORIES: TrainingCategory[] = [
  {
    id: "running",
    title: "Running",
    icon: "🏃",
    description: "Race training plans for 5K, 10K and half marathon goals.",
    plans: [
      {
        title: "5K Under 20 Minutes",
        description: "Eight-week training plan for a sub-20-minute 5K.",
        level: "Advanced",
        type: "Running",
        route: "/exercise/running/5k-sub-20",
      },
      {
        title: "5K Under 20 – Treadmill",
        description: "Treadmill-specific 5K training plan.",
        level: "Advanced",
        type: "Running",
        route: "/exercise/running/5k-treadmill-sub-20",
      },
      {
        title: "10K Under 50 Minutes",
        description: "Eight-week 10K training plan.",
        level: "Intermediate",
        type: "Running",
        route: "/exercise/running/10k-sub-50",
      },
      {
        title: "10K Under 40 Minutes",
        description: "Advanced treadmill-focused 10K training.",
        level: "Advanced",
        type: "Running",
        route: "/exercise/running/10k-treadmill-sub-40",
      },
      {
        title: "Half Marathon Treadmill",
        description: "Six-month treadmill half marathon plan.",
        level: "Advanced",
        type: "Running",
        route: "/exercise/running/half-marathon-treadmill",
      },
      {
        title: "Half Marathon 24 Week",
        description: "Twenty-four-week half marathon training plan.",
        level: "Advanced",
        type: "Running",
        route: "/exercise/running/half-marathon-24-week",
      },
      {
        title: "6-Month Marathon",
        description:
          "Twenty-four-week four-day marathon training plan with progressive long runs and race-specific preparation.",
        level: "Intermediate / Advanced",
        type: "Running",
        route: "/exercise/running/marathon-6-month",
      },
      {
        title: "6-Month Marathon – Treadmill",
        description:
          "Twenty-four-week treadmill marathon program with speeds, intervals, tempo runs and progressive long runs.",
        level: "Intermediate / Advanced",
        type: "Treadmill",
        route: "/exercise/running/marathon-6-month-treadmill",
      },
    ],
  },

  {
    id: "daily",
    title: "Daily Training",
    icon: "📅",
    description: "Daily running, strength and conditioning workouts.",
    plans: [
      {
        title: "Daily Workout",
        description: "Current daily exercise routine.",
        level: "All Levels",
        type: "Mixed",
        route: "workout",
      },
      {
        title: "Cardio",
        description: "Cardiovascular conditioning sessions.",
        level: "All Levels",
        type: "Cardio",
        route: "cardio",
      },
      {
        title: "Core & Abs",
        description: "Core-strength and abdominal workouts.",
        level: "All Levels",
        type: "Strength",
        route: "core",
      },
    ],
  },

  {
    id: "new-training",
    title: "New Training",
    icon: "🔥",
    description: "Latest programs and current training goals.",
    plans: [
      {
        title: "Current Training Plan",
        description: "Latest active training program.",
        level: "Advanced",
        type: "Mixed",
        route: "current",
      },
    ],
  },

  {
    id: "strength",
    title: "Strength",
    icon: "🏋️",
    description: "Strength, muscle and conditioning programs.",
    plans: [
      {
        title: "Full Body Strength",
        description: "Compound strength and muscle-building program.",
        level: "Intermediate",
        type: "Strength",
        route: "strength",
      },
      {
        title: "Runner Strength",
        description: "Strength training designed to complement running.",
        level: "Intermediate",
        type: "Strength",
        route: "runner-strength",
      },
    ],
  },
];
