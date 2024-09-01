import { Injectable } from '@nestjs/common'
import { StockApiService } from 'src/api/api.service'
import { SymbolHistoryFetchParams } from './types'

@Injectable()
export class SymbolsService {
  constructor(private stockApi: StockApiService) {}

  async findSymbolHistory(symbol: string, options: SymbolHistoryFetchParams) {
    const { interval, startTimestamp, endTimestamp } = options
    return await this.stockApi.get(`chart/${symbol}`, {
      interval,
      period1: startTimestamp,
      period2: endTimestamp,
    })
  }
}
