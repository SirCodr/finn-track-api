import { FetchStockPeriodOptions } from "../types"

export class SymbolHistoryFetchOptionsDto {
  startTimestamp: number
  endTimestamp: number
  interval: FetchStockPeriodOptions
}