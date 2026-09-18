import { Request, Response } from 'express';
import {
    getUserProfile as getProfile,
    updateUserProfile as updateProfile,
    deleteUserProfile as deleteProfile,
} from '../services/profileService';

export const getUserProfile = async (req: Request, res: Response) => {
    try {
        const request = req as any;
        const userId = request.user?.id || 'guest';
        const profile = await getProfile(userId);
        res.status(200).json(profile || { id: userId, name: 'Guest' });
    } catch (error: any) {
        res.status(500).json({ message: 'Error retrieving profile', error: error.message });
    }
};

export const updateUserProfile = async (req: Request, res: Response) => {
    try {
        const request = req as any;
        const userId = request.user?.id || 'guest';
        const updatedProfile = await updateProfile(userId, req.body);
        res.status(200).json(updatedProfile);
    } catch (error: any) {
        res.status(500).json({ message: 'Error updating profile', error: error.message });
    }
};

export const deleteUserProfile = async (req: Request, res: Response) => {
    try {
        const request = req as any;
        const userId = request.user?.id || 'guest';
        await deleteProfile(userId);
        res.status(204).send();
    } catch (error: any) {
        res.status(500).json({ message: 'Error deleting profile', error: error.message });
    }
};