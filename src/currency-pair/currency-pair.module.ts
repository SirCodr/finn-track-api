import { Module } from '@nestjs/common';
import { CurrencyPairController } from './currency-pair.controller';
import { CurrencyPairService } from './currency-pair.service';
import { ApiModule } from 'src/api/api.module';

@Module({
  imports: [ApiModule],
  controllers: [CurrencyPairController],
  providers: [CurrencyPairService],
  exports: [CurrencyPairService]
})
export class CurrencyPairModule {}
