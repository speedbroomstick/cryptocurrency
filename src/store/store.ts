import { configureStore } from "@reduxjs/toolkit";
import { currencyApi } from "./api/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { reducer as activeAddModalReducer } from "./slices/activeAddModal/activeAddModalSlice";
import {reducer as dataCurrencyForBuyReducer} from "./slices/dataCurrencyForBuy/dataCurrencyForBuySliice"

export const store = configureStore({
  reducer: {
    dataCurrencyForBuy:dataCurrencyForBuyReducer,
    activeAddModal:activeAddModalReducer,
    [currencyApi.reducerPath]: currencyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currencyApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
