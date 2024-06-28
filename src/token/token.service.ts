import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getTokenInfo(key: string) {
    // Mock token information
    return {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '50000',
    };
  }
}
