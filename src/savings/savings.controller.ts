import { Controller, Get, Query } from '@nestjs/common';
import { SavingsService } from './savings.service';
import { GetSavingsDto } from './dto/get-savings.dto';

@Controller('savings')
export class SavingsController {
  constructor(private savingsService: SavingsService){}

  @Get('compund-interest')
  async calculateSavingsCompundInterest(@Query() params: GetSavingsDto) {
    return this.savingsService.calculateSavingsCompundInterest(params)
  }
}
