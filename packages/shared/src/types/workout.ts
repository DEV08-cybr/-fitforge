export interface Workout {
    id: string;
    name: string;
    description?: string;
    exercises: WorkoutExercise[];
    duration: number; // in minutes
    createdAt: Date;
    updatedAt: Date;
}

export interface WorkoutExercise {
    id: string;
    exerciseId: string;
    sets: number;
    repetitions: number;
    rest: number; // in seconds
}