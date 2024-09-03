import { FetchStockPeriodOptions } from "../types"

export class SymbolHistoryFetchOptionsDto {
  startDate: string
  endDate: string
  interval: string
}

export class TrackedSymbolProfitFetchDto {
  amount: number
  currency: string
  startDate: string
  endDate: string
}