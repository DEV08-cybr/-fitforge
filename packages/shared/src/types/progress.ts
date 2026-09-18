export interface Progress {
    userId: string;
    workoutId: string;
    date: Date;
    duration: number; // in minutes
    caloriesBurned: number;
    exercisesCompleted: number;
    notes?: string; // optional notes about the workout
}

export interface ProgressMetrics {
    totalWorkouts: number;
    totalDuration: number; // in minutes
    totalCaloriesBurned: number;
    averageDuration: number; // in minutes
    averageCaloriesBurned: number;
}

export interface WorkoutHistory {
    workoutId: string;
    date: Date;
    duration: number; // in minutes
    caloriesBurned: number;
    exercises: string[]; // array of exercise names
}