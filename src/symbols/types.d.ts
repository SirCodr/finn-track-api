export type SymbolHistoryFetchParams = {
  startDate: string
  endDate: string
  interval: string
}

export type FetchStockPeriodOptions = '1m' | '2m' | '5m' | '15m' | '30m' | '60m' | '90m' | '1h' | '1d' | '5d' | '1wk' | '1mo' | '3mo'

export type CurrencyPairFetchParams = {
  startDate: string
  endDate: string
  interval: string
}

export type TrackedSymbolProfitFetchParams = {
  currency: string
  startDate: string
  endDate: string
  interval: string
}

export interface CurrencyPairHistoryResponse {
    meta:   CurrencyPairResponseMetaData;
    values: CurrencyPairResponseData[];
    status: string;
}

export interface CurrencyPairResponseMetaData {
    symbol:         string;
    interval:       string;
    currency_base:  string;
    currency_quote: string;
    type:           string;
}

export interface CurrencyPairResponseData {
    datetime: string;
    open:     string;
    high:     string;
    low:      string;
    close:    string;
}

// Symbols response

export interface SymbolsHistoryResponse {
    chart: SymbolsHistoryChart;
}

export interface SymbolsHistoryChart {
    result: SymbolsHistoryData[];
    error:  null;
}

export interface SymbolsHistoryData {
    meta:       SymbolsHistoryMeta;
    timestamp:  number[];
    indicators: SymbolsHistoryIndicators;
}

export interface SymbolsHistoryIndicators {
    quote: SymbolsHistoryQuote[];
}

export interface SymbolsHistoryQuote {
    open:   number[];
    high:   number[];
    low:    number[];
    volume: number[];
    close:  number[];
}

export interface SymbolsHistoryMeta {
    currency:             string;
    symbol:               string;
    exchangeName:         string;
    fullExchangeName:     string;
    instrumentType:       string;
    firstTradeDate:       number;
    regularMarketTime:    number;
    hasPrePostMarketData: boolean;
    gmtoffset:            number;
    timezone:             string;
    exchangeTimezoneName: string;
    regularMarketPrice:   number;
    fiftyTwoWeekHigh:     number;
    fiftyTwoWeekLow:      number;
    regularMarketDayHigh: number;
    regularMarketDayLow:  number;
    regularMarketVolume:  number;
    longName:             string;
    shortName:            string;
    chartPreviousClose:   number;
    previousClose:        number;
    scale:                number;
    priceHint:            number;
    currentTradingPeriod: CurrentTradingPeriod;
    tradingPeriods:       Array<Post[]>;
    dataGranularity:      string;
    range:                string;
    validRanges:          string[];
}

export interface CurrentTradingPeriod {
    pre:     Post;
    regular: Post;
    post:    Post;
}

export interface Post {
    timezone:  string;
    start:     number;
    end:       number;
    gmtoffset: number;
}
