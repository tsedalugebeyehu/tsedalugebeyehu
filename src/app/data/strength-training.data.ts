export interface StrengthExercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  imageId?: string;
}

export interface StrengthProgram {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  exercises: StrengthExercise[];
}

export const STRENGTH_PROGRAMS: StrengthProgram[] = [
  /* =====================================================
     RUNNER STRENGTH
     ===================================================== */

  {
    id: "runner-strength",

    title: "Runner Strength",

    shortTitle: "Runner Strength",

    subtitle: "Strength training designed to complement running.",

    description:
      "A runner-focused strength session emphasizing single-leg control, glutes, hamstrings, calves, posterior-chain strength and core stability.",

    exercises: [
      {
        id: "goblet-squat",

        name: "Goblet Squat",

        sets: 3,

        reps: "8–12",

        /*
         * Existing exact exercise:
         * Goblet Squat
         */
        imageId: "1yOxgwMCb1bg-o9GzcKcF9JOGjWakQDjJ",
      },

      {
        id: "dumbbell-walking-lunge",

        name: "Dumbbell Walking Lunges",

        sets: 3,

        reps: "10 per Leg",

        /*
         * Existing close match:
         * Dumbbell Lunge
         */
        imageId: "1F2Go3VG9cFZ1TFMoOCZSBVdL8JBn6JpA",
      },

      {
        id: "romanian-deadlift",

        name: "Romanian Deadlift",

        sets: 3,

        reps: "8–12",

        /*
         * Existing exact movement:
         * Romanian Deadlifts
         */
        imageId: "1OfWdIln1oBSp_inrBcLMAalEGXnGwMKW",
      },

      {
        id: "bulgarian-split-squat",

        name: "Bulgarian Split Squat",

        sets: 3,

        reps: "8 per Leg",

        /*
         * No verified Bulgarian Split Squat
         * image in the older source.
         *
         * Leave blank rather than use
         * an unrelated thumbnail.
         */
      },

      {
        id: "standing-calf-raise",

        name: "Standing Calf Raise",

        sets: 3,

        reps: "12–15",

        /*
         * Exact existing exercise.
         */
        imageId: "1QyPp5ThnUkXwsLOr9bHAy8WVfYaUVC7M",
      },

      {
        id: "glute-bridge",

        name: "Glute Bridge",

        sets: 3,

        reps: "12–15",

        /*
         * Existing exact match from
         * cardio training.
         */
        imageId: "1ablschTOb8sT-ZTZf0t2q7Td7sYoc00p",
      },

      {
        id: "single-leg-calf-raise",

        name: "Single Leg Calf Raises",

        sets: 3,

        reps: "10–12 per Leg",

        /*
         * Exact match from cardio.
         */
        imageId: "1CBdomupzNyYzrl3O0yNcbNxwL-myXxrV",
      },

      {
        id: "plank",

        name: "Plank",

        sets: 3,

        reps: "40–60 Sec",

        /*
         * Existing exact Plank image.
         */
        imageId: "1ee5EtEZFMKPcvnAFbRv1tb2_aK1TEnUI",
      },
    ],
  },

  /* =====================================================
     FULL BODY STRENGTH
     ===================================================== */

  {
    id: "full-body",

    title: "Full Body Strength",

    shortTitle: "Full Body",

    subtitle: "Compound strength and muscle-building program.",

    description:
      "A balanced full-body routine built around squatting, pressing, pulling, hip hinging and accessory strength work.",

    exercises: [
      {
        id: "smith-machine-squat",

        name: "Smith Machine Squat",

        sets: 4,

        reps: "6–10",

        /*
         * Closest verified movement:
         * Squat
         */
        imageId: "1Qm2JhL6ghXgcUi_A0vsiFVdkZxonKrl8",
      },

      {
        id: "smith-machine-bench-press",

        name: "Smith Machine Bench Press",

        sets: 4,

        reps: "6–10",

        /*
         * Closest verified movement:
         * Bench Press
         */
        imageId: "1EKC1amaiZ70-9DojIWxnJNbtkIW5IyWA",
      },

      {
        id: "romanian-deadlift",

        name: "Romanian Deadlift",

        sets: 3,

        reps: "8–12",

        imageId: "1OfWdIln1oBSp_inrBcLMAalEGXnGwMKW",
      },

      {
        id: "one-arm-dumbbell-row",

        name: "One Arm Dumbbell Row",

        sets: 3,

        reps: "8–12 per Side",

        /*
         * Exact match.
         */
        imageId: "1Nzvv8pinayOs3yqtkfjglCXd0Kp-i--4",
      },

      {
        id: "dumbbell-shoulder-press",

        name: "Dumbbell Shoulder Press",

        sets: 3,

        reps: "8–12",

        /*
         * Exact match.
         */
        imageId: "1SR48U-H9CwV0PsJekO4GzDTVnSfHm9ww",
      },

      {
        id: "dumbbell-lateral-raise",

        name: "Dumbbell Lateral Raise",

        sets: 3,

        reps: "12–15",

        /*
         * Exact/near-exact match.
         */
        imageId: "1Il2Oo3rERANNtBIqnOQKuTOmY-M-42hz",
      },

      {
        id: "dumbbell-curl",

        name: "Dumbbell Curl",

        sets: 3,

        reps: "10–12",

        /*
         * Existing Dumbbell Bicep Curl.
         */
        imageId: "11A3NRhIqkD8b79Ij5HDVvJyzlcFfLp9B",
      },

      {
        id: "hammer-curl",

        name: "Hammer Curl",

        sets: 3,

        reps: "10–12",

        /*
         * Existing Dumbbell Hammer Curl.
         */
        imageId: "1kR_p_XLTHFdTeP66n6UaqTLSbmV9Vy7t",
      },
    ],
  },
];
