import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const {REACT_APP_BASE_URL} = process.env;

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${REACT_APP_BASE_URL}`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Info', 'Pet'],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => ({
        url: '/info',
        invalidatesTags: ['Info'],
      }),
    }),
    updateUser: builder.mutation({
      query: userField => ({
        url: '/info',
        method: 'PATCH',
        body: userField,
        invalidatesTags: ['Info'],
      }),
    }),

    getPets: builder.query({
      query: () => `/pets`,
      providesTags: ['Pet'],
    }),

 
    deletePet: builder.mutation({
      query: PetId => ({
        url: `/pets/${PetId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Pet'],
    }),

    editPet: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/pets/${id}`,
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['Pet'],
    }),

   
    createPet: builder.mutation({
      query: newPet => ({
        url: '/pets',
        method: 'POST',
        body: newPet,
      }),
      invalidatesTags: ['Pet'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useGetPetsQuery,
  useDeletePetMutation,
  useEditPetMutation,
  useCreatePetMutation,
} = usersApi;
