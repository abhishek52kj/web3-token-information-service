import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string } = null;

  constructor() {
    this.envConfig = {
      REDIS_HOST: process.env.REDIS_HOST || 'localhost',
      REDIS_PORT: process.env.REDIS_PORT || '6379',
    };
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
