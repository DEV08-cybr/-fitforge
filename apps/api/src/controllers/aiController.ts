import { Request, Response } from 'express';
import {
    generateWorkoutPlan,
    getExerciseExplanation,
    suggestExerciseAlternatives,
} from '../services/aiService';

export const createWorkoutPlan = async (req: Request, res: Response) => {
    try {
        const workoutPlan = await generateWorkoutPlan(req.body || {});
        res.status(200).json(workoutPlan);
    } catch (error: any) {
        res.status(500).json({ message: 'Error generating workout plan', error: error.message });
    }
};

export const explainExercise = async (req: Request, res: Response) => {
    try {
        const { exerciseName } = req.params;
        const explanation = await getExerciseExplanation(exerciseName);
        res.status(200).json(explanation);
    } catch (error: any) {
        res.status(500).json({ message: 'Error fetching exercise explanation', error: error.message });
    }
};

export const getAlternativeExercises = async (req: Request, res: Response) => {
    try {
        const { exerciseName } = req.params;
        const alternatives = await suggestExerciseAlternatives(exerciseName);
        res.status(200).json(alternatives);
    } catch (error: any) {
        res.status(500).json({ message: 'Error fetching alternative exercises', error: error.message });
    }
};

export const getRecoveryGuidance = async (req: Request, res: Response) => {
    try {
        const { symptoms } = req.body || {};
        res.status(200).json({
            symptoms,
            guidance: 'Prioritize rest, hydration, and a gradual return to movement while monitoring pain.',
        });
    } catch (error: any) {
        res.status(500).json({ message: 'Error fetching recovery guidance', error: error.message });
    }
};