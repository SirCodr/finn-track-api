import { Injectable } from '@nestjs/common';
import { StockApiService } from 'src/api/api.service';
import { CurrencyPairFetchParams, CurrencyPairHistoryResponse } from 'src/symbols/types';

@Injectable()
export class CurrencyPairService {
  constructor(private sctokApi: StockApiService){}

  async findCurrencyPair(symbol: string, props: CurrencyPairFetchParams) {
    const { startDate, endDate, interval } = props
    return await this.sctokApi.get<CurrencyPairHistoryResponse>(`chart/${symbol}`, {
      period1: startDate,
      period2: endDate,
      interval
    })
  }
}
