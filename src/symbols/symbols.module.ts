import { Module } from '@nestjs/common';
import { SymbolsController } from './symbols.controller';
import { SymbolsService } from './symbols.service';
import { CurrencyPairModule } from 'src/currency-pair/currency-pair.module';
import { ApiModule } from 'src/api/api.module';

@Module({
  imports: [CurrencyPairModule, ApiModule],
  controllers: [SymbolsController],
  providers: [SymbolsService]
})
export class SymbolsModule {}
