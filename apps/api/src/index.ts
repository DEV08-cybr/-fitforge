import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import logger from './config/logger';
import authRoutes from './routes/authRoutes';
import exerciseRoutes from './routes/exerciseRoutes';
import workoutRoutes from './routes/workoutRoutes';
import dashboardRoutes from './routes/dashboardRoutes';
import aiRoutes from './routes/aiRoutes';
import profileRoutes from './routes/profileRoutes';
import errorHandler from './middleware/errorHandler';
import rateLimiter from './middleware/rateLimiter';
import env from './config/env';

dotenv.config();

const app = express();
const port = env.PORT;

app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use('/api/auth', authRoutes);
app.use('/api/exercises', exerciseRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api', aiRoutes);

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, message: 'FitForge API is running' });
});

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`FitForge API started on port ${port}`);
});