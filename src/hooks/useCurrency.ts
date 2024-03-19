import { useGetCurrencyQuery } from "../store/api/api";
import { ICurrency } from "../types/ICurrency";

export const useCurrency = () => {
  const { isLoading, data } = useGetCurrencyQuery(null);

  return {
    isLoading,
    data: parseCurrency(data?.data),
  };
};
function parseCurrency(data: ICurrency[] | undefined) {
  // const numberFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  return data?.map((data) => {
    return {
      key: data.id,
      id: data.id,
      symbol: data.symbol,
      icon: `https://assets.coincap.io/assets/icons/${data.symbol.toLowerCase()}@2x.png`,
      priceUsd: Math.ceil(+data.priceUsd * 100) / 100,
      marketCapUsd: (+data.marketCapUsd).toFixed(2),
      changePercent24Hr: (+data.changePercent24Hr).toFixed(2),
    };
  });
}
