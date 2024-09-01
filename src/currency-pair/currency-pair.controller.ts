import { Controller, Get, Param, Query } from '@nestjs/common';
import { CurrencyPairService } from './currency-pair.service';
import { CurrencyPairFetchParams } from 'src/symbols/types';

@Controller('currency-pair')
export class CurrencyPairController {
  constructor(private currencyPairService: CurrencyPairService){}

  @Get()
  async findCurrencyPair(@Param('symbol') symbol: string, @Query() queryParams: CurrencyPairFetchParams) {
    const response = await this.currencyPairService.findCurrencyPair(symbol, queryParams)

    return response.data
  }
}
