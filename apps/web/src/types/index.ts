export type UserProfile = {
  id: string;
  name: string;
  fitnessExperience: string;
  preferredWorkoutLocation: string;
  availableEquipment: string[];
  preferredWorkoutDuration: number;
  fitnessPreferences: string[];
};

export type Exercise = {
  id: string;
  name: string;
  description: string;
  targetMuscle: string;
  secondaryMuscles: string[];
  equipment: string[];
  difficulty: string;
  category: string;
  instructions: string;
  sets: number;
  repetitions: number;
  rest: number;
  commonMistakes: string[];
  safetyConsiderations: string[];
  beginnerVariation: string;
  advancedVariation: string;
  alternativeExercises: string[];
};

export type WorkoutPlan = {
  id: string;
  userId: string;
  title: string;
  exercises: Exercise[];
  createdAt: Date;
  updatedAt: Date;
};

export type CompletedWorkout = {
  id: string;
  userId: string;
  workoutPlanId: string;
  completedAt: Date;
  metrics: {
    duration: number;
    caloriesBurned: number;
    notes: string;
  };
};

export type ProgressMetric = {
  id: string;
  userId: string;
  date: Date;
  weight: number;
  bodyFatPercentage: number;
  muscleMass: number;
};

export type AIAssistantMessage = {
  id: string;
  userId: string;
  message: string;
  response: string;
  createdAt: Date;
};