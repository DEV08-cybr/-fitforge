import { Request, Response } from 'express';
import {
    getDashboardData as getDashboard,
    updateUserProgress as updateProgress,
    getWorkoutHistory as getHistory,
} from '../services/dashboardService';

export const getDashboardData = async (req: Request, res: Response) => {
    try {
        const request = req as any;
        const userId = request.user?.id || 'guest';
        const dashboardData = await getDashboard(userId);
        res.status(200).json(dashboardData);
    } catch (error: any) {
        res.status(500).json({ message: 'Error retrieving dashboard data', error: error.message });
    }
};

export const updateUserProgress = async (req: Request, res: Response) => {
    try {
        const request = req as any;
        const userId = request.user?.id || 'guest';
        const progressData = req.body;
        await updateProgress(userId, progressData);
        res.status(200).json({ message: 'Progress updated successfully' });
    } catch (error: any) {
        res.status(500).json({ message: 'Error updating progress', error: error.message });
    }
};

export const getWorkoutHistory = async (req: Request, res: Response) => {
    try {
        const request = req as any;
        const userId = request.user?.id || 'guest';
        const workoutHistory = await getHistory(userId);
        res.status(200).json(workoutHistory);
    } catch (error: any) {
        res.status(500).json({ message: 'Error retrieving workout history', error: error.message });
    }
};