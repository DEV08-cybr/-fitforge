type Workout = {
    id: string;
    name: string;
    exercises?: string[];
    [key: string]: any;
};

const workouts: Workout[] = [
    { id: 'workout_1', name: 'Morning Strength', exercises: ['Push-up', 'Squat'] },
];

export const getAllWorkouts = async (): Promise<Workout[]> => [...workouts];

export const getWorkoutById = async (id: string): Promise<Workout | null> => {
    return workouts.find((workout) => workout.id === id) || null;
};

export const createWorkout = async (data: Partial<Workout>): Promise<Workout> => {
    const workout: Workout = {
        id: `workout_${Date.now()}`,
        name: data.name || 'New Workout',
        exercises: data.exercises || [],
    };
    workouts.push(workout);
    return workout;
};

export const updateWorkout = async (id: string, data: Partial<Workout>): Promise<Workout | null> => {
    const index = workouts.findIndex((workout) => workout.id === id);
    if (index === -1) return null;
    workouts[index] = { ...workouts[index], ...data };
    return workouts[index];
};

export const deleteWorkout = async (id: string): Promise<Workout | null> => {
    const index = workouts.findIndex((workout) => workout.id === id);
    if (index === -1) return null;
    const [deleted] = workouts.splice(index, 1);
    return deleted;
};