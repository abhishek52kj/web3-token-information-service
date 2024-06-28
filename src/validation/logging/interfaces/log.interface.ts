import { Document } from 'mongoose';

export interface Log extends Document {
  readonly keyId: string;
  readonly timestamp: Date;
  readonly success: boolean;
}
