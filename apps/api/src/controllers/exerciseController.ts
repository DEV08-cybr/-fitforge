import { Request, Response } from 'express';
import {
    getAllExercises as listExercises,
    getExerciseById as findExerciseById,
    createExercise as createExerciseRecord,
    updateExercise as updateExerciseRecord,
    deleteExercise as deleteExerciseRecord,
} from '../services/exerciseService';

export const getAllExercises = async (_req: Request, res: Response) => {
    try {
        const exercises = await listExercises();
        res.status(200).json(exercises);
    } catch (error: any) {
        res.status(500).json({ message: 'Error retrieving exercises', error: error.message });
    }
};

export const getExerciseById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const exercise = await findExerciseById(id);
        if (!exercise) {
            return res.status(404).json({ message: 'Exercise not found' });
        }
        res.status(200).json(exercise);
    } catch (error: any) {
        res.status(500).json({ message: 'Error retrieving exercise', error: error.message });
    }
};

export const createExercise = async (req: Request, res: Response) => {
    try {
        const createdExercise = await createExerciseRecord(req.body);
        res.status(201).json(createdExercise);
    } catch (error: any) {
        res.status(500).json({ message: 'Error creating exercise', error: error.message });
    }
};

export const updateExercise = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedExercise = await updateExerciseRecord(id, req.body);
        if (!updatedExercise) {
            return res.status(404).json({ message: 'Exercise not found' });
        }
        res.status(200).json(updatedExercise);
    } catch (error: any) {
        res.status(500).json({ message: 'Error updating exercise', error: error.message });
    }
};

export const deleteExercise = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deleted = await deleteExerciseRecord(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Exercise not found' });
        }
        res.status(204).send();
    } catch (error: any) {
        res.status(500).json({ message: 'Error deleting exercise', error: error.message });
    }
};