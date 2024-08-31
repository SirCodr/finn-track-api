import { Module } from '@nestjs/common';
import { SymbolsController } from './symbols.controller';
import { SymbolsService } from './symbols.service';
import { StockApiService } from 'src/api/api.service';

@Module({
  controllers: [SymbolsController],
  providers: [SymbolsService, StockApiService]
})
export class SymbolsModule {}
