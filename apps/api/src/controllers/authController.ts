import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export const signup = async (req: Request, res: Response) => {
    try {
        const result = await AuthService.signup(req.body);
        res.status(201).json(result);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { token, user } = await AuthService.login(req.body);
        res.status(200).json({ token, user });
    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
};

export const logout = async (req: Request, res: Response) => {
    try {
        const request = req as any;
        await AuthService.logout(request.user);
        res.status(204).send();
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const resetPassword = async (req: Request, res: Response) => {
    try {
        await AuthService.resetPassword(req.body);
        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};