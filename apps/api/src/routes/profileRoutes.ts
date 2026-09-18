import { Router } from 'express';
import { getUserProfile, updateUserProfile, deleteUserProfile } from '../controllers/profileController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

// Get user profile
router.get('/me', authenticate, getUserProfile);

// Update user profile
router.put('/me', authenticate, updateUserProfile);

// Delete user profile
router.delete('/me', authenticate, deleteUserProfile);

export default router;