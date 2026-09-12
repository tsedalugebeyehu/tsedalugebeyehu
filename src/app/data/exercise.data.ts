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
}

export const TRAINING_CATEGORIES: TrainingCategory[] = [
  {
    id: 'running',
    title: 'Running',
    icon: '🏃',
    description: 'Race training plans for 5K, 10K and half marathon goals.',
    plans: [
      {
        title: '5K Under 20 Minutes',
        description: 'Speed-focused 5K training program.',
        level: 'Advanced',
        type: 'Outdoor / Treadmill',
      },
      {
        title: '5K Under 20 — Treadmill',
        description: 'Treadmill-specific sub-20 minute 5K training.',
        level: 'Advanced',
        type: 'Treadmill',
      },
      {
        title: '10K Under 50 Minutes',
        description: 'Structured program targeting a sub-50 10K.',
        level: 'Intermediate',
        type: 'Running',
      },
      {
        title: '10K Under 40 Minutes',
        description: 'Advanced treadmill program targeting sub-40.',
        level: 'Advanced',
        type: 'Treadmill',
      },
      {
        title: 'Half Marathon',
        description: 'Half-marathon endurance and speed training.',
        level: 'Intermediate / Advanced',
        type: 'Running',
      },
      {
        title: '13.1 Mile Treadmill',
        description: 'Half-marathon-specific treadmill program.',
        level: 'Advanced',
        type: 'Treadmill',
      },
    ],
  },

  {
    id: 'daily',
    title: 'Daily Training',
    icon: '📅',
    description: 'Daily running, strength and conditioning workouts.',
    plans: [
      {
        title: 'Daily Workout',
        description: 'Current daily exercise routine.',
        level: 'All Levels',
        type: 'Mixed',
      },
      {
        title: 'Cardio',
        description: 'Cardiovascular conditioning sessions.',
        level: 'All Levels',
        type: 'Cardio',
      },
      {
        title: 'Core & Abs',
        description: 'Core-strength and abdominal workouts.',
        level: 'All Levels',
        type: 'Strength',
      },
    ],
  },

  {
    id: 'new-training',
    title: 'New Training',
    icon: '🔥',
    description: 'Latest programs and current training goals.',
    plans: [
      {
        title: 'Current Training Plan',
        description: 'Latest active training program.',
        level: 'Advanced',
        type: 'Mixed',
      },
    ],
  },

  {
    id: 'strength',
    title: 'Strength',
    icon: '🏋️',
    description: 'Strength, muscle and conditioning programs.',
    plans: [
      {
        title: 'Full Body Strength',
        description: 'Compound strength and muscle-building program.',
        level: 'Intermediate',
        type: 'Strength',
      },
      {
        title: 'Runner Strength',
        description: 'Strength training designed to complement running.',
        level: 'Intermediate',
        type: 'Strength',
      },
    ],
  },
];
