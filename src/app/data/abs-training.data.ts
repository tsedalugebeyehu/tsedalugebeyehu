export interface AbsExercise {
  id: string;
  name: string;
  sets: number | string;
  reps: string;
  imageId?: string;
}

export interface AbsRoutine {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  exercises: AbsExercise[];
}

export const ABS_ROUTINES: AbsRoutine[] = [
  {
    id: '7-minute-abs',

    title: '7 Minute Ab Exercises',
    shortTitle: '7 Min Abs',

    description:
      'Seven core exercises with approximately 30 seconds of rest during the routine.',

    exercises: [
      {
        id: 'mountain-climber',
        name: 'Mountain Climber',
        sets: 1,
        reps: '1 Min',
        imageId: '19reXAB3hp2okGbuiWUJWzDWjfzLDkXSP',
      },
      {
        id: 'plank-marches',
        name: 'Plank Marches',
        sets: 1,
        reps: '1 Min',
        imageId: '1rVCXH8I57vTI8y3uF8Yk_zyNClHDPwck',
      },
      {
        id: 'scissors',
        name: 'Scissors',
        sets: 1,
        reps: '1 Min',
        imageId: '1ouz4R7feid6ruOHk0pwEFKzTzv4OLA8B',
      },
      {
        id: 'russian-twist',
        name: 'Russian Twist',
        sets: 2,
        reps: '10–12',
        imageId: '15ogaZQjRonvI49n_tP7AIRo_vO0HcrsD',
      },
      {
        id: 'alternating-jackknifes',
        name: 'Alternating Jackknifes',
        sets: 1,
        reps: '1 Min',
        imageId: '1YNbI57jPlOh_dPkYtDTnqVDBVBCZ5snb',
      },
      {
        id: 'alternating-thread-needle',
        name: 'Alternating Thread the Needle',
        sets: 2,
        reps: '10–12',
        imageId: '1SltkO9GBrLrYQYOCWvW2Jxm_eCjEntIV',
      },
      {
        id: 'lying-scissor-kick',
        name: 'Lying Scissor Kick',
        sets: 1,
        reps: '1 Min',
        imageId: '1PYZTGr0P36RGbe_fT5I2fKgTbicSl52t',
      },
    ],
  },

  {
    id: '28-day-abs',

    title: '28 Days Ab Exercises',
    shortTitle: '28 Day Abs',

    description:
      'Core-focused circuit combining plank variations, crunches and rotational movements.',

    exercises: [
      {
        id: 'heels-heavens',
        name: 'Heels to the Heavens',
        sets: 1,
        reps: '45 Sec',
        imageId: '1g46Gp6pGnKyTdzppcPDhuOSRQvUoykPE',
      },
      {
        id: 'step-through-planks',
        name: 'Step Through Planks',
        sets: 2,
        reps: '45 Sec',
        imageId: '1CmW3tLOW3ZZCOffSAkJpnTWYREZQh7zz',
      },
      {
        id: 'x-man-crunches',
        name: 'X Man Crunches',
        sets: 2,
        reps: '10–12',
        imageId: '11T_Y6k3k-RzV4F_BhYXg6JgoLKYVUFig',
      },
      {
        id: 'stationary-bikes',
        name: 'Stationary Bikes',
        sets: 2,
        reps: '30 Sec',
        imageId: '1D5ETPY-9en7JMdkAbdhJd7zvdX6SLSt5',
      },
      {
        id: 'twisting-pistons',
        name: 'Twisting Pistons',
        sets: 2,
        reps: '30 Sec',
        imageId: '1ZT5Vd_-xRW5DYbMG-rCsuTS_1n1hT4rt',
      },
      {
        id: 'starfish-crunch',
        name: 'Starfish Crunch',
        sets: 2,
        reps: '10–12',
        imageId: '1vtqLEGupQwQ51faSGXUYvgcymoDVQPGA',
      },
      {
        id: 'hands-free-tucks',
        name: 'Hands Free Tucks',
        sets: 2,
        reps: '10–12',
        imageId: '14ARc5xQveTpYDZuad0HAacP3c7RfqTac',
      },
      {
        id: 'plank-kick-throughs',
        name: 'Plank Kick Throughs',
        sets: 2,
        reps: '45 Sec',
        imageId: '1lMu5nL7btDp9pFRahPHQwcxBpM-dhqkn',
      },
    ],
  },

  {
    id: '10-in-10',

    title: '10 Exercises in 10 Minutes',
    shortTitle: '10 in 10',

    description:
      'Ten exercises performed for 40 seconds each for a fast abdominal workout.',

    exercises: [
      {
        id: 'leg-raise',
        name: 'Leg Raise',
        sets: 1,
        reps: '40 Sec',
        imageId: '1jQKM8TnH50Oa5I9N0z9bNBjP6WKI7-Xi',
      },
      {
        id: 'cab-toe-crunch',
        name: 'Cab Toe Crunch',
        sets: 1,
        reps: '40 Sec',
        imageId: '1H-4eGkfCpbTeaH98mAJj2cQ44x6HNJcD',
      },
      {
        id: 'one-leg-jackknife',
        name: 'One Leg Jackknife',
        sets: 1,
        reps: '40 Sec',
        imageId: '1h-80xvpVEDch4bGXFs0D7N9HVrMD2HqA',
      },
      {
        id: 'reverse-crunch',
        name: 'Reverse Crunch',
        sets: 1,
        reps: '40 Sec',
        imageId: '1LmeMou008KQ3x_f5xn2EXMYMWW8J-C8j',
      },
      {
        id: 'wipers',
        name: 'Wipers',
        sets: 1,
        reps: '40 Sec',
        imageId: '1LAGdewnBooybEdIArkoF4I24A54XkbeG',
      },
      {
        id: 'flutter-kicks',
        name: 'Flutter Kicks',
        sets: 1,
        reps: '40 Sec',
        imageId: '1beMjQ8UWPDV6S-_s6tolXsh6-95NLo5E',
      },
      {
        id: 'mountain-climbers',
        name: 'Mountain Climbers',
        sets: 1,
        reps: '40 Sec',
        imageId: '1Exqma2IUlcB8128BP0SEwYil1qu-uNtJ',
      },
      {
        id: 'thrusters',
        name: 'Thrusters',
        sets: 1,
        reps: '40 Sec',
        imageId: '1tDUkG02DqP8Wsz5dJPn8ynyR3k7R5QSj',
      },
      {
        id: 'v-crunch',
        name: 'V Crunch',
        sets: 1,
        reps: '40 Sec',
        imageId: '1g940WlOfzlDSFI3n0BxYjJSJVUiICKAC',
      },
      {
        id: 'seated-twist',
        name: 'Seated Twist',
        sets: 1,
        reps: '40 Sec',
        imageId: '1UcNoIIKMOFCiFzH-_6NPs7j7G955XZiz',
      },
    ],
  },

  {
    id: 'core-circuit',

    title: 'Core Training Circuit',
    shortTitle: 'Core Circuit',

    description:
      'Twelve 40-second abdominal and core movements emphasizing stability, rotation and control.',

    exercises: [
      {
        id: 'alternate-leg-raises',
        name: 'Alternate Leg Raises',
        sets: 1,
        reps: '40 Sec',
        imageId: '1zQKvieVn3SOyD0XWJF9WS1WddNIcn3Aq',
      },
      {
        id: 'cross-body-mountain-climber',
        name: 'Cross Body Mountain Climber',
        sets: 1,
        reps: '40 Sec',
        imageId: '1R_VO9zl1B7R_79aAmwYdyriMhGD4_v4m',
      },
      {
        id: 'plank-setup',
        name: 'Plank Setup',
        sets: 1,
        reps: '40 Sec',
        imageId: '1QJGIMkG2PHlts9qZvr-59_tjceJvqper',
      },
      {
        id: 'spiderman-plank',
        name: 'Spiderman Plank',
        sets: 1,
        reps: '40 Sec',
        imageId: '1gLccaPmzwMZ7YeRRrumMSIbKXdWzMCUO',
      },
      {
        id: 'table-top-crunch-pulse',
        name: 'Table Top Crunch Pulse',
        sets: 1,
        reps: '40 Sec',
        imageId: '1PEOCCyDqvws894tArH91626YI1qxassI',
      },
      {
        id: 'decline-sit-up',
        name: 'Decline Sit Up',
        sets: 1,
        reps: '40 Sec',
        imageId: '1_DJC39my0yE2j_ybhMOIik3_TWyh423S',
      },
      {
        id: 'plank-jacks',
        name: 'Plank Jacks',
        sets: 1,
        reps: '40 Sec',
        imageId: '1vtXuIt0t046oKeSI1GgV_4h0sBRYrLXC',
      },
      {
        id: 'reverse-plank-leg-raises',
        name: 'Reverse Plank Leg Raises',
        sets: 1,
        reps: '40 Sec',
        imageId: '19p3orlXod9pvm6oYmhYxk1IWuq3xMsLg',
      },
      {
        id: 'standing-side-crunch',
        name: 'Standing Side Crunch',
        sets: 1,
        reps: '40 Sec',
        imageId: '1i6mDsRAxdjlwC2p46iI7cHxmScnkIQ9N',
      },
      {
        id: 'lying-hollow-body-hold',
        name: 'Lying Hollow Body Hold',
        sets: 1,
        reps: '40 Sec',
        imageId: '1ZYXaHi0OVoLCps04maX_AlXd58UuR2PU',
      },
      {
        id: 'oblique-v-crunch',
        name: 'Oblique V Crunch',
        sets: 1,
        reps: '40 Sec',
        imageId: '1ZiHIzt47RylqY2vAp0UX1pi-92pvpokm',
      },
      {
        id: 'dead-bug',
        name: 'Dead Bug',
        sets: 1,
        reps: '40 Sec',
        imageId: '1njDixHY_beq0za0uICMCJCWI7HSwval6',
      },
    ],
  },
];