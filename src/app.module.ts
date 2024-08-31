import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SymbolsModule } from './symbols/symbols.module'
import { ApiModule } from './api/api.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    SymbolsModule,
    ApiModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
