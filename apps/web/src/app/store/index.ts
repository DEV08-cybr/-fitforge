import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../features/auth/authApi';
import exerciseReducer from '../../features/exercises/exerciseApi';
import workoutReducer from '../../features/workouts/workoutApi';
import dashboardReducer from '../../features/dashboard/dashboardApi';
import aiReducer from '../../features/ai/aiApi';
import profileReducer from '../../features/profile/profileApi';

const store = configureStore({
  reducer: {
    auth: authReducer,
    exercises: exerciseReducer,
    workouts: workoutReducer,
    dashboard: dashboardReducer,
    ai: aiReducer,
    profile: profileReducer,
  },
});

export default store;