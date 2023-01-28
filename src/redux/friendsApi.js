import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const {REACT_APP_BASE_URL} = process.env;

export const friendsApi = createApi({
  reducerPath: 'friendsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${REACT_APP_BASE_URL}`,
  }),
  tagTypes: ['Friends'],
  endpoints: builder => ({
    getFriends: builder.query({
      query: () => '/services',
      providesTags: ['Friends'],
    }),
  }),
});

export const { useGetFriendsQuery } = friendsApi;
