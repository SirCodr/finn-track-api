import { Controller, Get, Query } from '@nestjs/common';
import { CurrencyPairService } from './currency-pair.service';
import { CurrencyPairFetchParams } from 'src/symbols/types';

@Controller('currency-pair')
export class CurrencyPairController {
  constructor(private currencyPairService: CurrencyPairService){}

  @Get()
  async findCurrencyPair(@Query() queryParams: CurrencyPairFetchParams) {
    const response = await this.currencyPairService.findCurrencyPair(queryParams)

    return response.data
  }
}
