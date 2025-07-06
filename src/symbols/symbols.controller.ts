import { Controller, Get, Param, Query } from '@nestjs/common';
import { SymbolHistoryFetchOptionsDto, TrackedSymbolProfitFetchDto } from './dto/symbol.dto';
import { SymbolsService } from './symbols.service';

@Controller('symbols')
export class SymbolsController {
  constructor(private symbolsService: SymbolsService){}

  @Get('search')
  async searchSymbols(@Query('query') query: string) {
    const response = await this.symbolsService.searchSymbols(query)

    return response.data
  }

  @Get(':symbol')
  async findSymbol(@Param('symbol') symbol: string) {
    const response = await this.symbolsService.findSymbol(symbol)

    return response.data
  }

  @Get(':symbol/history')
  async findSymbolHistory(@Param('symbol') symbol: string, @Query() options: SymbolHistoryFetchOptionsDto) {
    const response = await this.symbolsService.findSymbolHistory(symbol, options)

    return response.data
  }

  @Get(':symbol/track-profit')
  async findTrackedSymbolProfitPerMonth(@Param('symbol') symbol: string, @Query() params: TrackedSymbolProfitFetchDto) {
    const res =  await this.symbolsService.findTrackedSymbolProfit(symbol, params)
    
    return res
  }
}
