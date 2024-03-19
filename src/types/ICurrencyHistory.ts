export interface ICurrencyHistoryAnswer {
  data: ICurrencyHistory[];
  timestamp: number;
}
export interface ICurrencyHistory {
  priceUsd: string;
  time: number;
  date: string;
}