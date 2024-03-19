import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ICurrencyAnswer, ICurrencyByIdAnswer} from "../../types/ICurrency"
import { ICurrencyHistoryAnswer } from '../../types/ICurrencyHistory'

export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    tagTypes: ['Currency'],
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL_API }),
    endpoints: (builder) => ({
        getCurrency: builder.query<ICurrencyAnswer, null>({
          query: () => 'v2/assets',
        }),
        getCurrencyById: builder.query<ICurrencyByIdAnswer,string>({
          query: (id) => `v2/assets/${id}`,
        }),
        getCurrencyHistory: builder.query<ICurrencyHistoryAnswer,{id:string,interval:string}>({
          query: ({id,interval}) => `v2/assets/${id}/history?interval=${interval}`,
        }),
      }),
})

export const {
  useGetCurrencyQuery,
  useGetCurrencyByIdQuery,
  useGetCurrencyHistoryQuery,
} = currencyApi;