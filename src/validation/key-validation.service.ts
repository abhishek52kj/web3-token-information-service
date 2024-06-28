import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Key } from '../validation/interfaces/key.interface';

@Injectable()
export class KeyValidationService {
  constructor(@InjectModel('Key') private readonly keyModel: Model<Key>) {}

  async validateKey(keyId: string): Promise<boolean> {
    const key = await this.keyModel.findOne({ keyId, isActive: true }).exec();
    if (!key) {
      return false;
    }
    const now = new Date();
    return key.expiration > now;
  }
}
