import { Module } from '@nestjs/common';
import { PollsController } from './polls.controller';
import { PollsService } from './polls.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Poll, PollSchema } from './schemas/polls.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Poll.name, schema: PollSchema }]),
  ],
  providers: [PollsService],
  controllers: [PollsController],
})
export class PollsModule {}
