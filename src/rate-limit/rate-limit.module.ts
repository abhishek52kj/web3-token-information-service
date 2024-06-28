import { Module } from '@nestjs/common';
import { RedisModule } from 'nestjs-redis';
import { RateLimitService } from './rate-limit.service';

@Module({
  imports: [RedisModule],
  providers: [RateLimitService],
  exports: [RateLimitService],
})
export class RateLimitModule {}
