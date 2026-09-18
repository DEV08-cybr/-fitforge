import { Router } from 'express';
import {
  createWorkout,
  getAllWorkouts,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
} from '../controllers/workoutController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

router.post('/', authenticate, createWorkout);
router.get('/', authenticate, getAllWorkouts);
router.get('/:id', authenticate, getWorkoutById);
router.put('/:id', authenticate, updateWorkout);
router.delete('/:id', authenticate, deleteWorkout);

export default router;