export interface ICurrencyAnswer {
  data: ICurrency[];
  timestamp: number;
}
export interface ICurrencyByIdAnswer {
  data: ICurrency;
  timestamp: number;
}
export interface ICurrency {
  id: string;
  rank: string;
  symbol: string;
  name?: string;
  supply?: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr?: string;
  explorer?: string;
}

export interface IParsedCurrency {
  id?: string;
  symbol?: string;
  icon?: string;
  priceUsd?: number;
  marketCapUsd?: string;
  changePercent24Hr?: string;
}
