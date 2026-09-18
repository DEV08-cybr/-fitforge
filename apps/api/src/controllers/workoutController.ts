import { Request, Response } from 'express';
import {
    createWorkout as createWorkoutRecord,
    getAllWorkouts as listWorkouts,
    getWorkoutById as findWorkoutById,
    updateWorkout as updateWorkoutRecord,
    deleteWorkout as deleteWorkoutRecord,
} from '../services/workoutService';

export const createWorkout = async (req: Request, res: Response) => {
    try {
        const newWorkout = await createWorkoutRecord(req.body);
        res.status(201).json(newWorkout);
    } catch (error: any) {
        res.status(500).json({ message: 'Error creating workout', error: error.message });
    }
};

export const getAllWorkouts = async (_req: Request, res: Response) => {
    try {
        const workouts = await listWorkouts();
        res.status(200).json(workouts);
    } catch (error: any) {
        res.status(500).json({ message: 'Error fetching workouts', error: error.message });
    }
};

export const getWorkoutById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const workout = await findWorkoutById(id);
        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        }
        res.status(200).json(workout);
    } catch (error: any) {
        res.status(500).json({ message: 'Error fetching workout', error: error.message });
    }
};

export const updateWorkout = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedWorkout = await updateWorkoutRecord(id, req.body);
        if (!updatedWorkout) {
            return res.status(404).json({ message: 'Workout not found' });
        }
        res.status(200).json(updatedWorkout);
    } catch (error: any) {
        res.status(500).json({ message: 'Error updating workout', error: error.message });
    }
};

export const deleteWorkout = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedWorkout = await deleteWorkoutRecord(id);
        if (!deletedWorkout) {
            return res.status(404).json({ message: 'Workout not found' });
        }
        res.status(204).send();
    } catch (error: any) {
        res.status(500).json({ message: 'Error deleting workout', error: error.message });
    }
};