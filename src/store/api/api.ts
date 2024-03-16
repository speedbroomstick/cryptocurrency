import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ICurrencyAnswer} from "../../types/ICurrency"

export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    tagTypes: ['Currency'],
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL_API }),
    endpoints: (builder) => ({
        getCurrency: builder.query<ICurrencyAnswer, null>({
          query: () => '/v2/assets',
        }),
      }),
})

export const {useGetCurrencyQuery} = currencyApi