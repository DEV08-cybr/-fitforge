import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Workout } from '../../types/workout';

const workoutApi = createApi({
  reducerPath: 'workoutApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getWorkouts: builder.query<Workout[], void>({
      query: () => 'workouts',
    }),
    getWorkoutById: builder.query<Workout, string>({
      query: (id) => `workouts/${id}`,
    }),
    createWorkout: builder.mutation<Workout, Partial<Workout>>({
      query: (newWorkout) => ({
        url: 'workouts',
        method: 'POST',
        body: newWorkout,
      }),
    }),
    updateWorkout: builder.mutation<Workout, Partial<Workout> & Pick<Workout, 'id'>>({
      query: ({ id, ...patch }) => ({
        url: `workouts/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteWorkout: builder.mutation<void, string>({
      query: (id) => ({
        url: `workouts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetWorkoutsQuery,
  useGetWorkoutByIdQuery,
  useCreateWorkoutMutation,
  useUpdateWorkoutMutation,
  useDeleteWorkoutMutation,
} = workoutApi;

export default workoutApi;