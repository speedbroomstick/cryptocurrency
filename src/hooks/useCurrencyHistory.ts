import { getRightDate } from "../features/getRightDate";
import { sliceDataByDate } from "../features/sliceDataByDate";
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