import { Module } from '@nestjs/common';
import { CurrencyPairController } from './currency-pair.controller';
import { CurrencyPairService } from './currency-pair.service';
import { ForexApiService } from 'src/api/api.service';

@Module({
  controllers: [CurrencyPairController],
  providers: [CurrencyPairService, ForexApiService]
})
export class CurrencyPairModule {}
