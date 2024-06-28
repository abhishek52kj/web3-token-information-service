import { Document } from 'mongoose';

export interface Key extends Document {
  readonly keyId: string;
  readonly rateLimit: number;
  readonly expiration: Date;
  readonly isActive: boolean;
}
