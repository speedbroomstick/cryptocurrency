import { useMemo } from "react";
import { activeAddModalSlice } from "../store/slices/activeAddModal/activeAddModalSlice";
import { dataCurrencyForBuySlice } from "../store/slices/dataCurrencyForBuy/dataCurrencyForBuySliice"
import { useAppDispatch } from "./hooks";
import { bindActionCreators } from "@reduxjs/toolkit";

const RootActions = {
    ...activeAddModalSlice.actions,
    ...dataCurrencyForBuySlice.actions
}

export const useActions = () =>{
    const despatch = useAppDispatch()

    return useMemo(()=>bindActionCreators(RootActions,despatch),[despatch])
}