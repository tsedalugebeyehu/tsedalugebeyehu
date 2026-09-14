export interface CardioExercise {
  id: string;
  name: string;
  sets: number | string;
  reps: string;
  imageId?: string;
}

export interface CardioRoutine {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  restInfo: string;
  exercises: CardioExercise[];
}

export const CARDIO_ROUTINES: CardioRoutine[] = [
  {
    id: "day-1-hiit",

    title: "Day 1 – 10 Minute HIIT",
    shortTitle: "Day 1",

    description:
      "Full-body cardio circuit combining bodyweight strength, core work and conditioning.",

    restInfo: "10 second rest after each exercise",

    exercises: [
      {
        id: "jumping-jacks",
        name: "Jumping Jacks",
        sets: 1,
        reps: "40 Sec",
        imageId: "1pkgSKvkfeQ9ICPD9OJ83OdHR84rezaMt",
      },
      {
        id: "wall-sit",
        name: "Wall Sit",
        sets: 1,
        reps: "40 Sec",
        imageId: "16ylcz6KjglrJKaZExqT6tn8yinFh34Ua",
      },
      {
        id: "push-ups",
        name: "Push Ups",
        sets: 1,
        reps: "40 Sec",
        imageId: "1ScifPu78T9oxdhJBR7b_XKY-4WLJvh7T",
      },
      {
        id: "crunches",
        name: "Crunches",
        sets: 1,
        reps: "40 Sec",
        imageId: "1j4wlRwHXRUVFxwVl19vxV6oTfZ3aJZ-T",
      },
      {
        id: "chair-step-ups",
        name: "Chair Step-Ups",
        sets: 1,
        reps: "40 Sec",
        imageId: "1sFOoYgfeZH2gLmgPCirRhMKED00Ck_8A",
      },
      {
        id: "squats",
        name: "Squats",
        sets: 1,
        reps: "40 Sec",
        imageId: "12XlS9Gwb93vg4oHJGZDOwBJ3vxhBM13v",
      },
      {
        id: "triceps-dips",
        name: "Triceps Dips",
        sets: 1,
        reps: "40 Sec",
        imageId: "1g7cZFNH_6Zpqo4OHny5e1zeuOqZHotI5",
      },
      {
        id: "plank",
        name: "Plank",
        sets: 1,
        reps: "40 Sec",
        imageId: "1ee5EtEZFMKPcvnAFbRv1tb2_aK1TEnUI",
      },
      {
        id: "high-knees",
        name: "High Knees / Running in Place",
        sets: 1,
        reps: "40 Sec",
        imageId: "1tqxj9x-ZgLWJ_WUnS3Qpde2iZmcVFo3V",
      },
      {
        id: "lunges",
        name: "Lunges",
        sets: 1,
        reps: "40 Sec",
        imageId: "1qck2TVDF96OAWP5EcOcTd2iL4yGEqEB_",
      },
      {
        id: "side-plank",
        name: "Side Plank",
        sets: 1,
        reps: "40 Sec",
        imageId: "1ax00eXvrGo9OhoOKWfZYQNhGxEUqlbFF",
      },
      {
        id: "push-up-rotation",
        name: "Push Up Rotation",
        sets: 1,
        reps: "40 Sec",
        imageId: "1WBJ1G2zy6L0FehiCY3UyJahE0RQAx9hy",
      },
    ],
  },

  {
    id: "day-2-hiit",

    title: "Day 2 – 6 Minute HIIT",
    shortTitle: "Day 2",

    description:
      "Faster HIIT circuit using explosive movements, bodyweight strength and core conditioning.",

    restInfo: "1 minute rest after the 5th exercise",

    exercises: [
      {
        id: "jumping-jacks-burpee",
        name: "Jumping Jacks and Burpee",
        sets: 1,
        reps: "30 Sec",
        imageId: "1X-rCcJi-4N7qm48Fpu39G2-r79FH-tuD",
      },
      {
        id: "mountain-climbers-sit-throughs",
        name: "Mountain Climbers and Sit Throughs",
        sets: 1,
        reps: "30 Sec",
        imageId: "1ZRGawYp0dOZP3spvmrDW43gpQ3EJMTtQ",
      },
      {
        id: "weighted-step-ups",
        name: "Weighted Step-Ups",
        sets: 1,
        reps: "30 Sec",
        imageId: "1KylH1UyTnKKrqvrnc-sgxPyWxqGGmelJ",
      },
      {
        id: "push-ups",
        name: "Push Ups",
        sets: 1,
        reps: "30 Sec",
        imageId: "1WRH8Gv0ykULZEfjwuUrCV0gDutt1aOih",
      },
      {
        id: "split-squat-jump-burpee",
        name: "Split Squat Jump and Burpee",
        sets: 1,
        reps: "30 Sec",
        imageId: "1ycZqU0yqIaEVvBAdL7Eyd1Sol2mH10VF",
      },
      {
        id: "sprinters-sit-ups",
        name: "Sprinters Sit-Ups",
        sets: 1,
        reps: "30 Sec",
        imageId: "14uLtbbspzI-su0nwhCqZiWRlbLXUiJhR",
      },
      {
        id: "toe-taps",
        name: "Toe Taps",
        sets: 1,
        reps: "30 Sec",
        imageId: "1_C6EDWHKnf_CIYou5JW3Ou_GqXzx3QFS",
      },
      {
        id: "plank-walks",
        name: "Plank Walks",
        sets: 1,
        reps: "30 Sec",
        imageId: "1axhVPr7TPsf6ntA4iwFLnyU_j9RVZzmO",
      },
      {
        id: "squat-thrusts",
        name: "Squat Thrusts",
        sets: 1,
        reps: "30 Sec",
        imageId: "1qvYnN6vdoVSO6EvZR-ZfRgfbZUPOzerH",
      },
      {
        id: "sumo-goblet-squat-pulses",
        name: "Sumo Goblet Squat Pulses",
        sets: 1,
        reps: "30 Sec",
        imageId: "1u_EWHDuvUzG4yJ2KvT2Xsq6kdSW9JJ7e",
      },
    ],
  },

  {
    id: "day-3-hiit",

    title: "Day 3 – 10 Minute HIIT",
    shortTitle: "Day 3",

    description:
      "Cardio and strength circuit with jumping, planks, boxing, glutes and lower-body conditioning.",

    restInfo: "10 second rest after each exercise",

    exercises: [
      {
        id: "jump-squats",
        name: "Jump Squats",
        sets: 1,
        reps: "40 Sec",
        imageId: "19Oa2AzOZShFix-dZwrSNFskXbittGVA-",
      },
      {
        id: "single-leg-calf-raises",
        name: "Single Leg Calf Raises",
        sets: 1,
        reps: "40 Sec",
        imageId: "1CBdomupzNyYzrl3O0yNcbNxwL-myXxrV",
      },
      {
        id: "elbow-plank",
        name: "Elbow Plank",
        sets: 1,
        reps: "40 Sec",
        imageId: "10OycGivala3T8zig6Dj4bAjLykJUPM-S",
      },
      {
        id: "plank-rotation",
        name: "Plank Rotation",
        sets: 1,
        reps: "40 Sec",
        imageId: "1WCQ-cP6ro0euzPls91UT6TLldKNXDW6j",
      },
      {
        id: "shoulder-tap-push-up",
        name: "Shoulder Tap Push Up",
        sets: 1,
        reps: "40 Sec",
        imageId: "1CdQfL5YEChzhIXVe1ZMnDZOsUr1VJKj7",
      },
      {
        id: "boxing-punch",
        name: "Boxing Punch",
        sets: 1,
        reps: "40 Sec",
        imageId: "1lj_n4Ce23D2POOKZsRXdO-k3mHg_cJvf",
      },
      {
        id: "rope-jumping",
        name: "Rope Jumping",
        sets: 1,
        reps: "40 Sec",
        imageId: "1vVuzfhQIiphu7taz7PlRasnPUjZudYFl",
      },
      {
        id: "side-lunges",
        name: "Side Lunges",
        sets: 1,
        reps: "40 Sec",
        imageId: "1hiU-pD23Twdi5mnr-SkoSl7tLBuRPp2O",
      },
      {
        id: "donkey-kick",
        name: "Donkey Kick",
        sets: 1,
        reps: "40 Sec",
        imageId: "18aEnO6vgiLwkop8rlwP9j_K17p1YwCAH",
      },
      {
        id: "glute-bridge",
        name: "Glute Bridge",
        sets: 1,
        reps: "40 Sec",
        imageId: "1ablschTOb8sT-ZTZf0t2q7Td7sYoc00p",
      },
      {
        id: "box-jump",
        name: "Box Jump",
        sets: 1,
        reps: "40 Sec",
        imageId: "1y6vMlkwZCz96Mg4SHxc_NFQxBPZYfaOs",
      },
      {
        id: "shoulder-tap-plank",
        name: "Shoulder Tap Plank",
        sets: 1,
        reps: "30 Sec",
        imageId: "13tK3llrrNzcWNeeF215Gl3dnAoQ5g6Oa",
      },
    ],
  },

  {
    id: "day-4-hiit",

    title: "Day 4 – 10 Minute HIIT",
    shortTitle: "Day 4",

    description:
      "Explosive full-body conditioning with jumping, dumbbells, planks and core movements.",

    restInfo: "10 second rest after each exercise",

    exercises: [
      {
        id: "plank-climbers",
        name: "Plank Climbers",
        sets: 1,
        reps: "40 Sec",
        imageId: "1UTNIdYhEVxOLs4Y4UXtbv579FAJSZStZ",
      },
      {
        id: "dumbbell-bench-step-up",
        name: "Dumbbell Bench Step Up",
        sets: 1,
        reps: "40 Sec",
        imageId: "1DPLjXrMCmDlw2xQNUctZzm-VmDn6Eeuz",
      },
      {
        id: "russian-twist-dumbbell",
        name: "Russian Twists with Dumbbell",
        sets: 1,
        reps: "40 Sec",
        imageId: "1oS2SJr4KvoKTMdCme1pYI9jzlqIZukNd",
      },
      {
        id: "speed-skater-jumps",
        name: "Speed Skater Jumps",
        sets: 1,
        reps: "40 Sec",
        imageId: "1SUA7NvBCC23ThlZ3uBRDBr8noJ5wArhh",
      },
      {
        id: "tuck-jumps-twist",
        name: "Tuck Jumps and Twist",
        sets: 1,
        reps: "40 Sec",
        imageId: "1OhuYCvVK7y3aWG4TGpWqd3cUG2BCbZ0E",
      },
      {
        id: "bicycle-sprint",
        name: "Bicycle Sprint (Crunch)",
        sets: 1,
        reps: "40 Sec",
        imageId: "1iXawea-Q7IJ3hmZO1Sg2Xp1AtyHL_LnL",
      },
      {
        id: "side-plank-hip-dips",
        name: "Side Plank with Hip Dips",
        sets: 1,
        reps: "40 Sec",
        imageId: "1ac_RcWHacMyPeHZuEM473oP62yM1-7Ny",
      },
      {
        id: "squat-tuck-jump",
        name: "Squat Tucks Jump",
        sets: 1,
        reps: "40 Sec",
        imageId: "1zm0eJcVowt4Kv5NOG5NlpAZaeVQb3-_J",
      },
      {
        id: "explosive-push-ups",
        name: "Explosive Push-Ups",
        sets: 1,
        reps: "40 Sec",
        imageId: "16n69vuJtYLv0xO2_RQFy1aRlvXfFvXkT",
      },
      {
        id: "lateral-hops",
        name: "Lateral Hops",
        sets: 1,
        reps: "40 Sec",
        imageId: "1dEzFO2ZfiPpaYFoX8AgihHJpbFPetwjx",
      },
      {
        id: "butt-kicker",
        name: "Butt Kicker",
        sets: 1,
        reps: "40 Sec",
        imageId: "10O0WL6WwitbiyvJShAYL8xdsdNf00Si3",
      },
      {
        id: "power-lunge",
        name: "Power Lunge",
        sets: 1,
        reps: "40 Sec",
        imageId: "1-RPbiBK0xBEjydI-OuxhZ0SsDzWRE9Ih",
      },
    ],
  },
];
