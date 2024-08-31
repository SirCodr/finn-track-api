import { Controller, Get, Param, Query } from '@nestjs/common';
import { StockApiService } from 'src/api/api.service';
import { SymbolHistoryFetchOptionsDto } from './dto/symbol.dto';

@Controller('symbols')
export class SymbolsController {
  constructor(private stockApi: StockApiService){}

  @Get(':symbol')
  async findSymbolHistory(@Param('symbol') symbol: string, @Query() options: SymbolHistoryFetchOptionsDto) {
  const { interval, startTimestamp, endTimestamp } = options
  const response = await this.stockApi.get(`chart/${symbol}`, {
    interval,
    period1: startTimestamp,
    period2: endTimestamp
  })

  return response.data
  }
}
