import { Injectable } from '@nestjs/common';
import { ForexApiService } from 'src/api/api.service';
import { CurrencyPairFetchParams } from 'src/symbols/types';

@Injectable()
export class CurrencyPairService {
  constructor(private forexApi: ForexApiService){}

  async findCurrencyPair(props: CurrencyPairFetchParams) {
    const { fromCurrency, toCurrency, startDate, endDate, interval } = props
    return await this.forexApi.get('time_series', {
      symbol: `${fromCurrency}/${toCurrency}`,
      start_date: startDate,
      end_date: endDate,
      interval
    })
  }
}
