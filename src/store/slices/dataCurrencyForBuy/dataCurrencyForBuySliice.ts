import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IParsedCurrency } from "../../../types/ICurrency";

interface IActiveAddModal {
    value: IParsedCurrency
  }

const initialState:IActiveAddModal = {
    value: {},
}

export const dataCurrencyForBuySlice = createSlice({
    name:'dataCurrencyForBuy',
    initialState,
    reducers:{
        setdataCurrencyForBuy: (state, action: PayloadAction<IParsedCurrency>) =>{
            state.value = action.payload;
        }
    }
})

export const {actions,reducer} = dataCurrencyForBuySlice