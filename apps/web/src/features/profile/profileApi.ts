import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserProfile } from '../../types';

const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/profile' }),
  endpoints: (builder) => ({
    getUserProfile: builder.query<UserProfile, string>({
      query: (userId) => `/${userId}`,
    }),
    updateUserProfile: builder.mutation<UserProfile, Partial<UserProfile>>({
      query: (profile) => ({
        url: `/${profile.id}`,
        method: 'PUT',
        body: profile,
      }),
    }),
    deleteUserProfile: builder.mutation<void, string>({
      query: (userId) => ({
        url: `/${userId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation, useDeleteUserProfileMutation } = profileApi;
export default profileApi;