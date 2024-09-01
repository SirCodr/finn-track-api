import { Injectable } from '@nestjs/common'
import { StockApiService } from 'src/api/api.service'
import { SymbolHistoryFetchParams, SymbolsHistoryResponse, TrackedSymbolProfitFetchParams } from './types'
import { CurrencyPairService } from 'src/currency-pair/currency-pair.service'
import { DateTime } from 'luxon'

@Injectable()
export class SymbolsService {
  constructor(private stockApi: StockApiService, private currencyPairService: CurrencyPairService) {}

  async findSymbolHistory(symbol: string, options: SymbolHistoryFetchParams) {
    const { interval, startDate, endDate } = options
    return await this.stockApi.get<SymbolsHistoryResponse>(`chart/${symbol}`, {
      interval,
      period1: DateTime.fromFormat(startDate, 'yyyy-LL-dd').toSeconds(),
      period2: DateTime.fromFormat(endDate, 'yyyy-LL-dd').toSeconds(),
    })
  }

  async findTrackedSymbolProfit(symbol: string, params: TrackedSymbolProfitFetchParams) {
    const symbolHistory = await this.findSymbolHistory(symbol, {
      startDate: params.startDate,
      endDate: params.endDate,
      interval: params.interval
    }).then(res => res.data.chart.result[0])

    const currencyPairHistory = await this.findSymbolHistory(params.currency, {
      startDate: params.startDate,
      endDate: params.endDate,
      interval: params.interval
    }).then(res => res.data.chart.result[0])


    const history = {}
    let finalQuoteCurrency = 0
    let finalSymbolValuation = 0
    const dates = symbolHistory.timestamp.map(timestamp => DateTime.fromSeconds(timestamp).toFormat('yyyy-LL-dd'))
    const lastDate = dates.at(-1)
    const symbolClosedQuotes = symbolHistory.indicators.quote[0].close
    const currencyClosedQuotes = currencyPairHistory.indicators.quote[0].close

    let sumOfSymbolValuation = 0
    let sumOfQuoteCurrency = 0

    for(const [index, date] of dates.entries()) {
      if (date === lastDate) {
        finalSymbolValuation = symbolClosedQuotes[index]
        finalQuoteCurrency = currencyClosedQuotes[index]
        break
      }

      history[date] = {
        symbolValuation: symbolClosedQuotes[index],
        quoteCurrency: currencyClosedQuotes[index],
        symbolValueInQuoteCurrency: (symbolClosedQuotes[index] * currencyClosedQuotes[index])
      }

      sumOfSymbolValuation += history[date].symbolValuation
      sumOfQuoteCurrency += history[date].symbolValueInQuoteCurrency
    }

    const countOfSymbols = dates.length - 1
    const totalSymbolValuationForSale = (finalSymbolValuation * countOfSymbols)
    const totalQuoteCurrencyForSale = totalSymbolValuationForSale * finalQuoteCurrency
    const symbolValuationProfit = (totalSymbolValuationForSale - sumOfSymbolValuation)
    const quoteCurrencyProfit = (symbolValuationProfit * finalQuoteCurrency)

    return {
      meta: {
        symbol: symbolHistory.meta.symbol,
        basecurrency: symbolHistory.meta.currency,
        quoteCurrency: params.currency
      },
      history,
      finalDateData: {
        symbolValuation: finalSymbolValuation,
        quoteCurrency: finalQuoteCurrency,
        countOfSymbols,
        sumOfSymbolValuation,
        sumOfQuoteCurrency,
        totalSymbolValuationForSale,
        totalQuoteCurrencyForSale,
        symbolValuationProfit,
        quoteCurrencyProfit
      }
    }

  }
}
