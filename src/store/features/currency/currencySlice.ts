import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICurrency } from "../../../types/ICurrency";

const initialState: ICurrency[] = [];

export const currencySlice = createSlice({
    name:'currency',
    initialState,
    reducers:{
        setCurrency: (state, action: PayloadAction<ICurrency[]>) =>{
            state = [...action.payload];
        }
    }
})

export const {actions,reducer} = currencySlice