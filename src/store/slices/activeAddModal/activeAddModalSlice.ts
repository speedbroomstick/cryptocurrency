import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IActiveAddModal {
    value: boolean
  }

const initialState:IActiveAddModal = {
    value: false,
}

export const activeAddModalSlice = createSlice({
    name:'activeAddModal',
    initialState,
    reducers:{
        setActiveAddModal: (state, action: PayloadAction<boolean>) =>{
            state.value = action.payload;
        }
    }
})

export const {actions,reducer} = activeAddModalSlice