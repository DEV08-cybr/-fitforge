import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthResponse, LoginPayload, SignupPayload } from '../../types/auth';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/auth' }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginPayload>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: builder.mutation<AuthResponse, SignupPayload>({
      query: (newUser) => ({
        url: '/signup',
        method: 'POST',
        body: newUser,
      }),
    }),
    resetPassword: builder.mutation<void, { email: string }>({
      query: (payload) => ({
        url: '/reset-password',
        method: 'POST',
        body: payload,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useResetPasswordMutation, useLogoutMutation } = authApi;
export default authApi;