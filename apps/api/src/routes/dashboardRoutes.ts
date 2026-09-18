import { Router } from 'express';
import {
  getDashboardData,
  updateUserProgress,
  getWorkoutHistory,
} from '../controllers/dashboardController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

router.get('/', authenticate, getDashboardData);
router.put('/', authenticate, updateUserProgress);
router.get('/history', authenticate, getWorkoutHistory);

export default router;