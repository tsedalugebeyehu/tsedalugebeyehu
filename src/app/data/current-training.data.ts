export interface CurrentExercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  imageId?: string;
}

export interface CurrentTrainingDay {
  id: string;
  shortTitle: string;
  title: string;
  muscleGroups: string;
  exercises: CurrentExercise[];
}

export const CURRENT_TRAINING_DAYS: CurrentTrainingDay[] = [
  /* =====================================================
     DAY 1 — PUSH
     ===================================================== */

  {
    id: "push",

    shortTitle: "Push",

    title: "Day 1 — Push",

    muscleGroups: "Chest + Shoulders + Triceps",

    exercises: [
      {
        id: "smith-machine-bench-press",

        name: "Smith Machine Bench Press",

        sets: 4,

        reps: "8–10",

        /*
         * Closest existing match:
         * Bench Press
         */
        imageId: "1EKC1amaiZ70-9DojIWxnJNbtkIW5IyWA",
      },

      {
        id: "inverted-rows",

        name: "Inverted Rows",

        sets: 4,

        reps: "10–12",

        /*
         * No sufficiently reliable
         * Inverted Row image found.
         *
         * Better to show no image than
         * an incorrect exercise.
         */
      },

      {
        id: "dumbbell-shoulder-press",

        name: "Dumbbell Shoulder Press",

        sets: 3,

        reps: "6–8",

        /*
         * EXACT MATCH:
         * Dumbbell Shoulder Press
         */
        imageId: "1SR48U-H9CwV0PsJekO4GzDTVnSfHm9ww",
      },

      {
        id: "dumbbell-lateral-raises",

        name: "Dumbbell Lateral Raises",

        sets: 3,

        reps: "12–15",

        /*
         * MATCH:
         * Dumbbell lateral Raise
         */
        imageId: "1Il2Oo3rERANNtBIqnOQKuTOmY-M-42hz",
      },

      {
        id: "tricep-rope-pushdown",

        name: "Tricep Rope Pushdown",

        sets: 3,

        reps: "10–12",

        /*
         * I am intentionally NOT using
         * the previous image.
         *
         * The previous ID belonged to
         * Chair Step-Ups, not a pushdown.
         *
         * Leave it without an image until
         * we find a true rope-pushdown image.
         */
      },

      {
        id: "overhead-tricep-extension",

        name: "Overhead Tricep Extension / Bench Dip",

        sets: 3,

        reps: "10–12",

        /*
         * Closest existing match:
         * Two Arm Seated Dumbbell Extension
         */
        imageId: "1TsPAtEycpG_alZKizuSYx0oVmtn3DLH3",
      },
    ],
  },

  /* =====================================================
     DAY 2 — LOWER BODY
     ===================================================== */

  {
    id: "lower-quads",

    shortTitle: "Lower",

    title: "Day 2 — Lower Body",

    muscleGroups: "Quads + Glutes",

    exercises: [
      {
        id: "smith-machine-squats",

        name: "Smith Machine Squats",

        sets: 4,

        reps: "8–10",

        /*
         * Existing Squat image
         */
        imageId: "1Qm2JhL6ghXgcUi_A0vsiFVdkZxonKrl8",
      },

      {
        id: "bodyweight-jump-squats",

        name: "Bodyweight Jump Squats",

        sets: 4,

        reps: "10–15",

        /*
         * EXACT movement:
         * Jump Squats
         */
        imageId: "19Oa2AzOZShFix-dZwrSNFskXbittGVA-",
      },

      {
        id: "dumbbell-walking-lunges",

        name: "Dumbbell Walking Lunges",

        sets: 3,

        reps: "12 per Leg",

        /*
         * Existing:
         * Dumbbell Lunge
         */
        imageId: "1F2Go3VG9cFZ1TFMoOCZSBVdL8JBn6JpA",
      },

      {
        id: "smith-machine-calf-raises",

        name: "Smith Machine Calf Raises",

        sets: 3,

        reps: "15–20",

        /*
         * Existing:
         * Standing Calf Raise
         */
        imageId: "1QyPp5ThnUkXwsLOr9bHAy8WVfYaUVC7M",
      },

      {
        id: "dumbbell-goblet-squat",

        name: "Dumbbell Goblet Squat",

        sets: 3,

        reps: "12",

        /*
         * Existing:
         * Goblet Squat
         */
        imageId: "1yOxgwMCb1bg-o9GzcKcF9JOGjWakQDjJ",
      },

      {
        id: "wall-sit",

        name: "Wall Sit",

        sets: 3,

        reps: "30–45 Sec",

        /*
         * EXACT MATCH from
         * cardio component.
         */
        imageId: "16ylcz6KjglrJKaZExqT6tn8yinFh34Ua",
      },
    ],
  },

  /* =====================================================
     DAY 3 — PULL
     ===================================================== */

  {
    id: "pull",

    shortTitle: "Pull",

    title: "Day 3 — Pull",

    muscleGroups: "Back + Biceps",

    exercises: [
      {
        id: "smith-machine-bent-row",

        name: "Smith Machine Bent-Over Row",

        sets: 4,

        reps: "8–10",

        /*
         * Closest existing exercise:
         * Barbell Row
         */
        imageId: "15pU5f1Gux6vbea6nVoGE-5pvvzb95Qa1",
      },

      {
        id: "push-ups",

        name: "Push-Ups",

        sets: 4,

        reps: "12–15",

        /*
         * EXACT Push Ups image
         * from cardio data.
         */
        imageId: "1ScifPu78T9oxdhJBR7b_XKY-4WLJvh7T",
      },

      {
        id: "one-arm-dumbbell-row",

        name: "One Arm Dumbbell Row",

        sets: 3,

        reps: "12–15",

        /*
         * EXACT MATCH
         */
        imageId: "1Nzvv8pinayOs3yqtkfjglCXd0Kp-i--4",
      },

      {
        id: "dumbbell-reverse-fly",

        name: "Dumbbell Reverse Fly",

        sets: 3,

        reps: "12–15",

        /*
         * I did not find another
         * verified Reverse Fly mapping.
         *
         * Don't reuse the Plank Rotation
         * image that was previously here.
         */
      },

      {
        id: "dumbbell-curl",

        name: "Dumbbell Curl",

        sets: 3,

        reps: "10–12",

        /*
         * Existing:
         * Dumbbell Bicep Curl
         */
        imageId: "11A3NRhIqkD8b79Ij5HDVvJyzlcFfLp9B",
      },

      {
        id: "hammer-curl",

        name: "Hammer Curl",

        sets: 3,

        reps: "10–12",

        /*
         * Existing:
         * Dumbbell Hammer Curl
         */
        imageId: "1kR_p_XLTHFdTeP66n6UaqTLSbmV9Vy7t",
      },
    ],
  },

  /* =====================================================
     DAY 4 — LOWER + CORE
     ===================================================== */

  {
    id: "lower-core",

    shortTitle: "Lower + Core",

    title: "Day 4 — Lower + Core",

    muscleGroups: "Hamstrings + Abs",

    exercises: [
      {
        id: "smith-machine-romanian-deadlift",

        name: "Smith Machine Romanian Deadlift",

        sets: 4,

        reps: "8–10",

        /*
         * Existing:
         * Romanian Deadlifts
         */
        imageId: "1OfWdIln1oBSp_inrBcLMAalEGXnGwMKW",
      },

      {
        id: "glute-bridge",

        name: "Glute Bridge (Bodyweight or DB)",

        sets: 4,

        reps: "12–15",

        /*
         * EXACT Glute Bridge
         * from cardio component.
         */
        imageId: "1ablschTOb8sT-ZTZf0t2q7Td7sYoc00p",
      },

      {
        id: "bulgarian-split-squat",

        name: "Dumbbell Bulgarian Split Squat",

        sets: 3,

        reps: "8 per Leg",

        /*
         * No trustworthy Bulgarian
         * Split Squat mapping found
         * outside the incorrectly
         * assigned current-training data.
         */
      },

      {
        id: "standing-hamstring-stretch",

        name: "Standing Hamstring Stretch",

        sets: 3,

        reps: "30 Sec",

        /*
         * No verified matching
         * thumbnail found yet.
         */
      },

      {
        id: "leg-raises",

        name: "Hanging or Lying Leg Raises",

        sets: 3,

        reps: "12–15",

        /*
         * Existing Abs component:
         * Leg Raise
         */
        imageId: "1jQKM8TnH50Oa5I9N0z9bNBjP6WKI7-Xi",
      },

      {
        id: "plank",

        name: "Plank",

        sets: 3,

        reps: "40–60 Sec",

        /*
         * EXACT Plank image
         * from cardio component.
         */
        imageId: "1ee5EtEZFMKPcvnAFbRv1tb2_aK1TEnUI",
      },
    ],
  },
];
