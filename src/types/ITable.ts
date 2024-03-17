import {IParsedCurrency } from "./ICurrency";

export interface ITableCurrency{
    isLoading:boolean;
    dataSource: IParsedCurrency[] | undefined;
}