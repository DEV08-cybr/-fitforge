import { Router } from 'express';
import { signup, login, logout, resetPassword } from '../controllers/authController';
import { authenticate } from '../middleware/authMiddleware';

const authRoutes = Router();

// User signup route
authRoutes.post('/signup', signup);

// User login route
authRoutes.post('/login', login);

// User logout route
authRoutes.post('/logout', authenticate, logout);

// Password reset route
authRoutes.post('/reset-password', resetPassword);

export default authRoutes;