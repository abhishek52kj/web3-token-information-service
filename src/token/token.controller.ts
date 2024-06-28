import {
  Controller,
  Get,
  Query,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { TokenService } from './token.service';
import { RateLimitService } from '../rate-limit/rate-limit.service';
import { KeyValidationService } from '../validation/key-validation.service';
import { LoggingService } from '../validation/logging/logging.service';

@Controller('token-info')
export class TokenController {
  constructor(
    private readonly tokenService: TokenService,
    private readonly rateLimitService: RateLimitService,
    private readonly keyValidationService: KeyValidationService,
    private readonly loggingService: LoggingService,
  ) {}

  @Get()
  async getTokenInfo(@Query('key') key: string) {
    const valid = await this.keyValidationService.validateKey(key);
    if (!valid) {
      throw new UnauthorizedException('Invalid or expired key');
    }

    const allowed = await this.rateLimitService.checkRateLimit(key);
    if (!allowed) {
      throw new BadRequestException('Rate limit exceeded');
    }

    const tokenInfo = await this.tokenService.getTokenInfo(key);
    await this.loggingService.logRequest(key, true);
    return tokenInfo;
  }
}
