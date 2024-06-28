import { Schema } from 'mongoose';

export const LogSchema = new Schema({
  keyId: { type: String, required: true },
  timestamp: { type: Date, required: true },
  success: { type: Boolean, required: true },
});
