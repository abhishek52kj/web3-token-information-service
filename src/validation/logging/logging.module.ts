import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggingService } from './logging.service';
import { LogSchema } from './schemas/log.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Log', schema: LogSchema }])],
  providers: [LoggingService],
  exports: [LoggingService],
})
export class LoggingModule {}
