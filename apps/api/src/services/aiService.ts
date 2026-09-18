import axios from 'axios';
import env from '../config/env';

const AI_API_KEY = env.AI_API_KEY || 'demo-key';
const AI_BASE_URL = 'https://api.example.com/ai';

export const generateWorkoutPlan = async (userPreferences: Record<string, unknown>) => {
    try {
        if (!AI_API_KEY || AI_API_KEY === 'demo-key') {
            return {
                message: 'AI demo mode is active.',
                plan: [
                    { day: 'Monday', focus: 'Upper body', exercise: 'Push-up' },
                    { day: 'Wednesday', focus: 'Lower body', exercise: 'Squat' },
                ],
                userPreferences,
            };
        }

        const response = await axios.post(`${AI_BASE_URL}/workout-plan`, userPreferences, {
            headers: {
                Authorization: `Bearer ${AI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error: any) {
        throw new Error('Error generating workout plan: ' + error.message);
    }
};

export const getExerciseExplanation = async (exerciseName: string) => {
    try {
        if (!AI_API_KEY || AI_API_KEY === 'demo-key') {
            return {
                exercise: exerciseName,
                explanation: `${exerciseName} is a compound movement that improves strength, stability, and coordination.`,
            };
        }

        const response = await axios.get(`${AI_BASE_URL}/exercise-explanation`, {
            params: { name: exerciseName },
            headers: {
                Authorization: `Bearer ${AI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error: any) {
        throw new Error('Error fetching exercise explanation: ' + error.message);
    }
};

export const suggestExerciseAlternatives = async (exerciseName: string) => {
    try {
        if (!AI_API_KEY || AI_API_KEY === 'demo-key') {
            return {
                exercise: exerciseName,
                alternatives: ['Band press', 'Incline push-up', 'Chest-supported row'],
            };
        }

        const response = await axios.get(`${AI_BASE_URL}/exercise-alternatives`, {
            params: { name: exerciseName },
            headers: {
                Authorization: `Bearer ${AI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error: any) {
        throw new Error('Error fetching exercise alternatives: ' + error.message);
    }
};