import { useGetCurrencyByIdQuery } from "../store/api/api";
import { ICurrency } from "../types/ICurrency";

export const useCurrencyById = (id: string) => {
  const { isLoading, data } = useGetCurrencyByIdQuery(id);
  return {
    isLoadingCurrency: isLoading,
    currencyData: parseCurrencyById(data?.data),
  };
};
function parseCurrencyById(data: ICurrency | undefined) {
  // const numberFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  return {
    id: data?.id,
    symbol: data?.symbol,
    name: data?.name,
    rank: data?.rank,
    icon: `https://assets.coincap.io/assets/icons/${data?.symbol.toLowerCase()}@2x.png`,
    priceUsd: Math.ceil(+data?.priceUsd! * 100) / 100,
    marketCapUsd: (+data?.marketCapUsd!).toFixed(2),
    supply: data?.supply,
    maxSupply: data?.maxSupply === null ? "no information" : data?.maxSupply,
  };
}
