import { Controller, Get, Param, Query } from '@nestjs/common';
import { StockApiService } from 'src/api/api.service';
import { SymbolHistoryFetchOptionsDto } from './dto/symbol.dto';
import { SymbolsService } from './symbols.service';

@Controller('symbols')
export class SymbolsController {
  constructor(private symbolsService: SymbolsService){}

  @Get(':symbol')
  async findSymbolHistory(@Param('symbol') symbol: string, @Query() options: SymbolHistoryFetchOptionsDto) {
  const response = await this.symbolsService.findSymbolHistory(symbol, options)

  return response.data
  }
}
