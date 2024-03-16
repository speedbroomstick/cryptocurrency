export interface ICurrencyAnswer {
    data:      ICurrency[];
    timestamp: number;
}

export interface ICurrency {
    id:                string;
    rank:              string;
    symbol:            string;
    name:              string;
    supply:            string;
    maxSupply:         string;
    marketCapUsd:      string;
    volumeUsd24Hr:     string;
    priceUsd:          string;
    changePercent24Hr: string;
    vwap24Hr:          string;
    explorer:          string;
}
