import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Exercise } from '../../types/exercise';

const exerciseApi = createApi({
  reducerPath: 'exerciseApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getExercises: builder.query<Exercise[], void>({
      query: () => 'exercises',
    }),
    getExerciseById: builder.query<Exercise, string>({
      query: (id) => `exercises/${id}`,
    }),
    addExercise: builder.mutation<Exercise, Partial<Exercise>>({
      query: (newExercise) => ({
        url: 'exercises',
        method: 'POST',
        body: newExercise,
      }),
    }),
    updateExercise: builder.mutation<Exercise, Partial<Exercise> & Pick<Exercise, 'id'>>({
      query: ({ id, ...patch }) => ({
        url: `exercises/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteExercise: builder.mutation<void, string>({
      query: (id) => ({
        url: `exercises/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetExercisesQuery,
  useGetExerciseByIdQuery,
  useAddExerciseMutation,
  useUpdateExerciseMutation,
  useDeleteExerciseMutation,
} = exerciseApi;

export default exerciseApi;