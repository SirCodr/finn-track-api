import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ForexApiService, StockApiService } from './api.service';

@Module({
  imports: [ConfigModule],
  providers: [StockApiService, ForexApiService],
  exports: [StockApiService, ForexApiService]
})
export class ApiModule {}
