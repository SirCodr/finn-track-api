import { Injectable } from '@nestjs/common';
import { GetSavingsDto } from './dto/get-savings.dto';

@Injectable()
export class SavingsService {
  async calculateSavingsCompundInterest(props: GetSavingsDto) {
    const decimalInterestPercentage = ((Number(props.annualInterestPercentage) / 100) / Number(props.months))

    let totalAccAmount = Number(props.initialAmount)
    let totalProfitAmount = 0
    let totalAccNonProfitAmount = Number(props.initialAmount)

    const res = {}
    for (let currentMonth = 1; currentMonth <= props.months; currentMonth++) {
      const profitAmountBeforeMonthlyAmount = (totalAccAmount * decimalInterestPercentage)

      if (currentMonth === 1) {
        totalAccAmount = (totalAccAmount + profitAmountBeforeMonthlyAmount)
      } else {
        totalAccAmount = (totalAccAmount + profitAmountBeforeMonthlyAmount + Number(props.monthlyAmount))
        totalAccNonProfitAmount += Number(props.monthlyAmount)
      }

      totalProfitAmount += profitAmountBeforeMonthlyAmount

      res[`month-${currentMonth}`] = {
        accNonProfitAmount: totalAccNonProfitAmount,
        accumulatedAmount: totalAccAmount,
        profitAmount: profitAmountBeforeMonthlyAmount,
        accProfitAmount: totalProfitAmount
      }
    }

    return res
  }
}
