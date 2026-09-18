export interface Exercise {
    id: string;
    name: string;
    description: string;
    targetMuscle: string;
    secondaryMuscles: string[];
    equipment: string[];
    difficulty: 'easy' | 'medium' | 'hard';
    category: string;
    instructions: string[];
    sets: number;
    repetitions: number;
    rest: number;
    commonMistakes: string[];
    safetyConsiderations: string[];
    beginnerVariation?: string;
    advancedVariation?: string;
    alternativeExercises?: string[];
}