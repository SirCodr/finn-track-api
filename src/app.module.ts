import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SymbolsModule } from './symbols/symbols.module'
import { ApiModule } from './api/api.module'
import { ConfigModule } from '@nestjs/config'
import { CurrencyPairModule } from './currency-pair/currency-pair.module';
import { SavingsModule } from './savings/savings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SymbolsModule,
    ApiModule,
    CurrencyPairModule,
    SavingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
