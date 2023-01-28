import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const {REACT_APP_BASE_URL} = process.env;

export const newsApi = createApi({
    reducePath: 'newsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${REACT_APP_BASE_URL}`,
    }),
    tagTypes: ['News'],
    endpoints: builder => ({
        getAllNews: builder.query({
            query: (newsName) => {
                if (newsName !== '') {
                    return `news?search=${newsName}`;
                }
                return 'news';
            },
            providesTags: ['News'],
        }),
        getSearchNews: builder.query({
            query: newsName => `news?search=${newsName}`,
            providesTags: ['News'],
        }),
    })
});

export const { useGetAllNewsQuery, useGetSearchNewsQuery } = newsApi;
