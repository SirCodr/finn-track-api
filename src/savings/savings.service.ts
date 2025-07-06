import { Injectable } from '@nestjs/common';
import { GetSavingsDto } from './dto/get-savings.dto';

@Injectable()
export class SavingsService {
  async calculateSavingsCompundInterest(props: GetSavingsDto) {
    const decimalInterestPercentage = ((Number(props.annualInterestPercentage) / 100) / 12)

    let totalAccAmount = Number(props.initialAmount)
    let totalProfitAmount = 0
    let totalAccNonProfitAmount = Number(props.initialAmount)

    const res = {}
    for (let currentMonth = 1; currentMonth <= props.months; currentMonth++) {
      let profitAmount = 0

      if (currentMonth === 1) {
        profitAmount = (totalAccAmount * decimalInterestPercentage)
        totalAccAmount = (totalAccAmount + profitAmount)
      } else {
        profitAmount = ((totalAccAmount + Number(props.monthlyAmount)) * decimalInterestPercentage)
        totalAccAmount = (totalAccAmount + profitAmount + Number(props.monthlyAmount))
        totalAccNonProfitAmount += Number(props.monthlyAmount)
      }

      totalProfitAmount += profitAmount

      res[`month-${currentMonth}`] = {
        accNonProfitAmount: totalAccNonProfitAmount,
        accumulatedAmount: totalAccAmount,
        profitAmount,
        accProfitAmount: totalProfitAmount
      }
    }

    return res
  }
}
