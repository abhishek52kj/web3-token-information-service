import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
import { Redis } from 'ioredis';

@Injectable()
export class RateLimitService {
  private readonly redisClient: Redis;

  constructor(private readonly redisService: RedisService) {
    this.redisClient = this.redisService.getClient();
  }

  async checkRateLimit(key: string): Promise<boolean> {
    const requests = await this.redisClient.incr(key);
    if (requests === 1) {
      await this.redisClient.expire(key, 60);
    }
    const rateLimit = 10; // This should be fetched from the key details in a real implementation
    return requests <= rateLimit;
  }
}
