export interface Exercise {
  id: string;
  name: string;
  sets: number | string;
  reps: number | string;
  imageId?: string;
}

export interface TrainingDay {
  id: string;
  day: number;
  title: string;
  shortTitle: string;
  subtitle: string;
  exercises: Exercise[];
}

export interface DailyTrainingPlan {
  id: string;
  title: string;
  description: string;
  days: TrainingDay[];
}

export const DAILY_TRAINING_PLANS: DailyTrainingPlan[] = [
  {
    id: "daily-strength",
    title: "Daily Strength Training",
    description:
      "Four-day strength program covering back, chest, legs, shoulders, arms and core.",

    days: [
      {
        id: "day-1",
        day: 1,
        title: "Back & Biceps",
        shortTitle: "Back",
        subtitle: "Back, pulling strength and biceps",

        exercises: [
          {
            id: "deadlift",
            name: "Deadlift",
            sets: 3,
            reps: "8–12",
            imageId: "142f9TJLa4Y6HzjDG6H3gLJLv6kobZBf3",
          },
          {
            id: "concentration-curl",
            name: "Concentration Curl",
            sets: 3,
            reps: "8–12",
            imageId: "1tgnWDrvmfpsP4NMXi9ENidhDQMJhw14l",
          },
          {
            id: "pull-up-lat-pulldown",
            name: "Pull Up or Lat Pull Down",
            sets: 3,
            reps: "10–12",
            imageId: "1Zq9maLUu6AsGttHZWGNN4c2NJW3ffMqo",
          },
          {
            id: "seated-cable-row",
            name: "Seated Cable Row or Machine Row",
            sets: 3,
            reps: "Burn",
            imageId: "1k7zZd2kwt-v6_Kfv4QiriYzKMCGVS28L",
          },
          {
            id: "barbell-row",
            name: "Barbell Row",
            sets: 3,
            reps: "8–12",
            imageId: "15pU5f1Gux6vbea6nVoGE-5pvvzb95Qa1",
          },
          {
            id: "preacher-curl",
            name: "EZ Bar Preacher Curl",
            sets: 3,
            reps: "8–12",
            imageId: "1EurcEEltqRV2jFihpjPIRyIVwDPBC-vm",
          },
          {
            id: "one-arm-row",
            name: "One Arm Dumbbell Row",
            sets: 3,
            reps: "8–12",
            imageId: "1Nzvv8pinayOs3yqtkfjglCXd0Kp-i--4",
          },
          {
            id: "seated-dumbbell-curl",
            name: "Seated Dumbbell Curl",
            sets: 3,
            reps: "Burn",
            imageId: "1BwHpd4J4COaCC_KvMGsbWflRTevjKWY_",
          },
          {
            id: "dumbbell-bicep-curl",
            name: "Dumbbell Bicep Curl",
            sets: 3,
            reps: "8–12",
            imageId: "11A3NRhIqkD8b79Ij5HDVvJyzlcFfLp9B",
          },
          {
            id: "hammer-curl",
            name: "Dumbbell Hammer Curl",
            sets: 3,
            reps: "8–12",
            imageId: "1kR_p_XLTHFdTeP66n6UaqTLSbmV9Vy7t",
          },
        ],
      },

      {
        id: "day-2",
        day: 2,
        title: "Chest & Triceps",
        shortTitle: "Chest",
        subtitle: "Chest pressing strength and triceps",

        exercises: [
          {
            id: "bench-press",
            name: "Bench Press",
            sets: 3,
            reps: "6–10",
            imageId: "1EKC1amaiZ70-9DojIWxnJNbtkIW5IyWA",
          },
          {
            id: "cable-tricep-extension",
            name: "Cable Tricep Extension",
            sets: 3,
            reps: "Burn",
            imageId: "1zGsC2sDCAUI_LI1UUO_6Y8A5Nomt8e8h",
          },
          {
            id: "incline-dumbbell-bench",
            name: "Incline Dumbbell Bench Press",
            sets: 3,
            reps: "8–12",
            imageId: "16duQlfVmRknN-WVblGqIObMnuc1VcKx5",
          },
          {
            id: "two-arm-extension",
            name: "Two Arm Seated Dumbbell Extension",
            sets: 3,
            reps: "8–12",
            imageId: "1TsPAtEycpG_alZKizuSYx0oVmtn3DLH3",
          },
          {
            id: "landmine-press",
            name: "Landmine Press — 1 & 2 Arm",
            sets: 3,
            reps: "10–12",
            imageId: "1_ncL28JSm8jTcYADbksvNJMm4tq0dfyV",
          },
          {
            id: "cable-crossover",
            name: "Cable Crossover or Pec Deck",
            sets: 3,
            reps: "12–15",
            imageId: "1z-eUft2IbvdgHXQr32RmwqmOcY_FzDlZ",
          },
          {
            id: "machine-press",
            name: "Machine Press or Dumbbell Bench Press",
            sets: 3,
            reps: "Burn",
            imageId: "1Lx7StAgog13cvOL3Rd4OPhHekLSzTmI5",
          },
          {
            id: "skullcrusher",
            name: "EZ Bar Skullcrusher",
            sets: 3,
            reps: "8–12",
            imageId: "1aoZlgkFO9TphWqdXoPVBgFp8C37jfkit",
          },
          {
            id: "hammer-press",
            name: "Dumbbell Hammer Press",
            sets: 3,
            reps: "Burn",
            imageId: "1GxnNZWASVnYO84XsV8hUkbmM1k3QmJdV",
          },
          {
            id: "tricep-kickback",
            name: "Dumbbell Tricep Kickback",
            sets: 3,
            reps: "Burn",
            imageId: "1ZqK3ExseY1Yl0_rLIhFWfGbTt-ebTTAS",
          },
        ],
      },

      {
        id: "day-3",
        day: 3,
        title: "Quads, Hamstrings & Calves",
        shortTitle: "Legs",
        subtitle: "Lower body strength and core",

        exercises: [
          {
            id: "squat",
            name: "Squat",
            sets: 3,
            reps: "6–10",
            imageId: "1Qm2JhL6ghXgcUi_A0vsiFVdkZxonKrl8",
          },
          {
            id: "step-ups",
            name: "Dumbbell Step Ups",
            sets: 3,
            reps: "8–12",
            imageId: "1zzLeumK3XzE84Onj_UC5QycKWlJCMev3",
          },
          {
            id: "hack-squat",
            name: "Barbell Hack Squat",
            sets: 3,
            reps: "8–12",
            imageId: "1NFag-5PpxiLWTdktnsbiWVNvwMgIElvv",
          },
          {
            id: "cable-crunch",
            name: "Kneeling Cable Crunch",
            sets: 3,
            reps: "8–12",
            imageId: "1zRMAxHo4gCZfllM6NoKruUUbYPsDIUjd",
          },
          {
            id: "dumbbell-lunge",
            name: "Dumbbell Lunge",
            sets: 3,
            reps: "10–12",
            imageId: "1F2Go3VG9cFZ1TFMoOCZSBVdL8JBn6JpA",
          },
          {
            id: "stiff-leg-deadlift",
            name: "Stiff Leg Deadlift",
            sets: 3,
            reps: "12–15",
            imageId: "1e3ChSwnUR9lAiAIw5XqSjV4CfX2HRkn-",
          },
          {
            id: "seated-calf-raise",
            name: "Seated Calf Raise",
            sets: 3,
            reps: "Burn",
            imageId: "1LgoZS6GhBMs39AWItdqJ1kIQDQfBsh9H",
          },
          {
            id: "goblet-squat",
            name: "Goblet Squat",
            sets: 3,
            reps: "Burn",
            imageId: "1yOxgwMCb1bg-o9GzcKcF9JOGjWakQDjJ",
          },
          {
            id: "standing-calf-raise",
            name: "Standing Calf Raise",
            sets: 3,
            reps: "8–12",
            imageId: "1QyPp5ThnUkXwsLOr9bHAy8WVfYaUVC7M",
          },
          {
            id: "sumo-squat",
            name: "Sumo Squat",
            sets: 3,
            reps: "Burn",
            imageId: "1Fv9-G2k7mju-4X4AMyEaIYq39qZ51HNc",
          },
          {
            id: "romanian-deadlift",
            name: "Romanian Deadlift",
            sets: 3,
            reps: "Burn",
            imageId: "1OfWdIln1oBSp_inrBcLMAalEGXnGwMKW",
          },
        ],
      },

      {
        id: "day-4",
        day: 4,
        title: "Shoulders & Forearms",
        shortTitle: "Shoulders",
        subtitle: "Shoulder strength, traps and forearms",

        exercises: [
          {
            id: "seated-barbell-press",
            name: "Seated Barbell Press",
            sets: 3,
            reps: "6–10",
            imageId: "1LhNAqipISIowO1WM2FnhiB06p3kbachZ",
          },
          {
            id: "shrugs",
            name: "Barbell Shrug or Dumbbell Shrug",
            sets: 3,
            reps: "Burn",
            imageId: "1ybm1Nej50Tjs2oQIkCJ3m2Bb1_CCZZmi",
          },
          {
            id: "arnold-press",
            name: "Seated Arnold Press",
            sets: 3,
            reps: "8–12",
            imageId: "1rzZnyT9cPuzmZc7GoCavySfEJqXWHsG9",
          },
          {
            id: "upright-row",
            name: "Upright Row",
            sets: 3,
            reps: "8–12",
            imageId: "1tDpzhBbZQSKq4ZoJQxXX-ZLhW-gSRHIj",
          },
          {
            id: "lateral-raise",
            name: "Dumbbell Lateral Raise",
            sets: 3,

            // Preserved from your original HTML.
            reps: "10–52",

            imageId: "1Il2Oo3rERANNtBIqnOQKuTOmY-M-42hz",
          },
          {
            id: "smith-press",
            name: "Hammer Strength Press or Smith Press",
            sets: 3,
            reps: "Burn",
            imageId: "1P1AJwX9UeWfJ3FtMn8Knyx36HnuSKIuD",
          },
          {
            id: "wrist-curl",
            name: "Seated Barbell Wrist Curl",
            sets: 3,
            reps: "12–15",
            imageId: "1rsnAm2AjT31mfBOJ0NRykiqonKEXIZK0",
          },
          {
            id: "shoulder-press",
            name: "Dumbbell Shoulder Press",
            sets: 3,
            reps: "8–12",
            imageId: "1SR48U-H9CwV0PsJekO4GzDTVnSfHm9ww",
          },
          {
            id: "front-raise",
            name: "Dumbbell Front Raise",
            sets: 3,
            reps: "8–12",
            imageId: "11cKORG52DaXTiHYYNg--Xs08GKmjhztT",
          },
          {
            id: "static-hold",
            name: "Barbell Static Hold",
            sets: 3,
            reps: "Burn",
            imageId: "1iHcD0UvOwb6CbN--vbfCteN5HI4h3Ysy",
          },
        ],
      },
    ],
  },
];
