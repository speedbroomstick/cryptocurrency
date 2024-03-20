import { useGetCurrencyHistoryQuery } from "../store/api/api";
import { ICurrencyHistory } from "../types/ICurrencyHistory";

export const useCurrencyHistory = (id: string, interval: string) => {
  const {status ,refetch, data } = useGetCurrencyHistoryQuery({ id, interval });
  return {
    status,
    refetch,
    data: parseCurrencyHistory(sliceDataByDate(data?.data, interval)),
  };
};

function parseCurrencyHistory(data: ICurrencyHistory[] | undefined) {
  data = data?.slice(data.length - 60, data.length);
  return data?.map((interval) => {
    return {
      priceUsd: interval.priceUsd,
      date: getRightDate(interval.date),
    };
  });
}

function sliceDataByDate(
  data: ICurrencyHistory[] | undefined,
  interval: string
) {
  return interval === "h1"
    ? data?.slice(data.length - 24, data.length)
    : interval === "m30"
    ? data?.slice(data.length - 24, data.length)
    : data?.slice(data.length - 60, data.length);
}

function getRightDate(date: string | number) {
  const hour = new Date(date).getHours();
  const minutes =
    new Date(date).getMinutes().toString().length === 1
      ? "0" + new Date(date).getMinutes()
      : new Date(date).getMinutes();
  return hour + ":" + minutes;
}
