import { Schema } from 'mongoose';

export const KeySchema = new Schema({
  keyId: { type: String, required: true },
  rateLimit: { type: Number, required: true },
  expiration: { type: Date, required: true },
  isActive: { type: Boolean, required: true },
});
