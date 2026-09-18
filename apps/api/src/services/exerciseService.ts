type Exercise = {
    id: string;
    name: string;
    category?: string;
    [key: string]: any;
};

const exercises: Exercise[] = [
    { id: 'exercise_1', name: 'Push-up', category: 'strength' },
    { id: 'exercise_2', name: 'Squat', category: 'strength' },
    { id: 'exercise_3', name: 'Plank', category: 'core' },
];

export const getAllExercises = async (): Promise<Exercise[]> => [...exercises];

export const getExerciseById = async (id: string): Promise<Exercise | null> => {
    return exercises.find((exercise) => exercise.id === id) || null;
};

export const createExercise = async (exerciseData: Partial<Exercise> = {}): Promise<Exercise> => {
    const exercise: Exercise = {
        id: `exercise_${Date.now()}`,
        name: exerciseData.name || 'New Exercise',
        category: exerciseData.category || 'general',
        ...exerciseData,
    };
    exercises.push(exercise);
    return exercise;
};

export const updateExercise = async (id: string, exerciseData: Partial<Omit<Exercise, 'id'>>): Promise<Exercise | null> => {
    const index = exercises.findIndex((exercise) => exercise.id === id);
    if (index === -1) return null;
    exercises[index] = { ...exercises[index], ...exerciseData };
    return exercises[index];
};

export const deleteExercise = async (id: string): Promise<Exercise | null> => {
    const index = exercises.findIndex((exercise) => exercise.id === id);
    if (index === -1) return null;
    const [deleted] = exercises.splice(index, 1);
    return deleted;
};