import { ActionCreatorWithPayload } from "@reduxjs/toolkit"
import { IParsedCurrency } from "./ICurrency"

export type typehandleAddButton = {
    e:React.MouseEvent,
    record:IParsedCurrency,
    setActiveAddModal:ActionCreatorWithPayload<boolean, "activeAddModal/setActiveAddModal">,
    setdataCurrencyForBuy: ActionCreatorWithPayload<IParsedCurrency, "dataCurrencyForBuy/setdataCurrencyForBuy">
}