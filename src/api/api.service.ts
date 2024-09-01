import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';

class ApiService {
  private http: AxiosInstance;

  constructor(
    baseURL: string,
    apiKey?: string
  ) {
    this.http = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      params: {
        apikey: apiKey,
      },
    });
  }

  async get<T>(url: string, params: Record<string, string | number>) {
    return await this.http.get<T>(url, { params });
  }

  async post(url: string, data?: any) {
    return await this.http.post(url, data);
  }
}

@Injectable()
export class StockApiService extends ApiService {
  constructor(configService: ConfigService) {
    super(
      configService.get<string>('YAHOO_FINANCE_API_URL')
    );
  }
}

@Injectable()
export class ForexApiService extends ApiService {
  constructor(configService: ConfigService) {
    super(
      configService.get<string>('TWELVEDATA_FOREX_API_URL'),
      configService.get<string>('TWELVEDATA_FOREX_API_KEY')
    );
  }
}
