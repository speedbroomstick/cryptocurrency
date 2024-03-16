import { configureStore } from "@reduxjs/toolkit";
import { reducer as currencyReducer } from "./features/currency/currencySlice";
import {currencyApi} from "./api/api" 
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        currency:currencyReducer,
        [currencyApi.reducerPath]: currencyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(currencyApi.middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch