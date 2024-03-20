import { ICurrencyHistory } from "../types/ICurrencyHistory";

export function sliceDataByDate(
    data: ICurrencyHistory[] | undefined,
    interval: string
  ) {
    return interval === "h1"
      ? data?.slice(data.length - 24, data.length)
      : interval === "m30"
      ? data?.slice(data.length - 24, data.length)
      : data?.slice(data.length - 60, data.length);
  }
  