import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StockApiService } from './api.service';

@Module({
  imports: [ConfigModule],
  providers: [StockApiService],
  exports: [StockApiService]
})
export class ApiModule {}
