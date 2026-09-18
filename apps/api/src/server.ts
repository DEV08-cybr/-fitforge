import express from 'express';
import logger from './config/logger';
import authRoutes from './routes/authRoutes';
import exerciseRoutes from './routes/exerciseRoutes';
import workoutRoutes from './routes/workoutRoutes';
import dashboardRoutes from './routes/dashboardRoutes';
import aiRoutes from './routes/aiRoutes';
import profileRoutes from './routes/profileRoutes';
import errorHandler from './middleware/errorHandler';
import rateLimiter from './middleware/rateLimiter';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(rateLimiter);

app.use('/api/auth', authRoutes);
app.use('/api/exercises', exerciseRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/profile', profileRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});