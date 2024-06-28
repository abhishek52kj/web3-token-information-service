import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RedisModule } from 'nestjs-redis';
import { TokenModule } from './token/token.module';
import { RateLimitModule } from './rate-limit/rate-limit.module';
import { ValidationModule } from './validation/key-validation.module';
import { LoggingModule } from './validation/logging/logging.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRoot('mongodb://localhost/web3-token-info'),
    RedisModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        host: configService.get('REDIS_HOST'),
        port: parseInt(configService.get('REDIS_PORT'), 10),
      }),
      inject: [ConfigService],
    }),
    TokenModule,
    RateLimitModule,
    ValidationModule,
    LoggingModule,
  ],
})
export class AppModule {}
