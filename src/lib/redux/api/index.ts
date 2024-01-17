import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://dummyjson.com'

const createRequest = (url: string) => ({
  url,
  headers: { 'content-type': 'application/json' },
})

export const frontendAPI = createApi({
  reducerPath: 'frontendAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ skip = null, limit = 10 }: { skip?: number | null , limit?: number }) =>
        createRequest(`/products?limit=${limit}${skip ? '&skip=' + skip : ''}`),
    }),
    getSingleProduct: builder.query({
      query: (id: number) => createRequest(`/products/${id}`),
    }),
  }),
})

export const { useGetAllProductsQuery, useGetSingleProductQuery } = frontendAPI
