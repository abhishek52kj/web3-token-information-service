import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KeyValidationService } from './key-validation.service';
import { KeySchema } from './schemas/key.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Key', schema: KeySchema }])],
  providers: [KeyValidationService],
  exports: [KeyValidationService],
})
export class ValidationModule {}
