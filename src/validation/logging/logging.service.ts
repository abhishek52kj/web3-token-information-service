import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from './interfaces/log.interface';

@Injectable()
export class LoggingService {
  constructor(@InjectModel('Log') private readonly logModel: Model<Log>) {}

  async logRequest(keyId: string, success: boolean) {
    const log = new this.logModel({ keyId, timestamp: new Date(), success });
    return log.save();
  }
}
