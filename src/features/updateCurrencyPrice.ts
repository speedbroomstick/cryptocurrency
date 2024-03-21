import { IParsedCurrency } from "../types/ICurrency";

export function updateCurrencyPrice(data: IParsedCurrency[], name: string) {
  return data.find((item) => item.id === name)?.priceUsd;
}
