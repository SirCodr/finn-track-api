import { FetchStockPeriodOptions } from "../types"

export class SymbolHistoryFetchOptionsDto {
  startDate: string
  endDate: string
  interval: string
}

export class TrackedSymbolProfitFetchDto {
  symbol: string
  currency: string
  startDate: string
  endDate: string
  interval: string
}