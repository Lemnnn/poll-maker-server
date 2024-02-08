import { Module } from '@nestjs/common';
import { PollsController } from './polls.controller';
import { PollsService } from './polls.service';

@Module({
  providers: [PollsService],
  controllers: [PollsController],
})
export class PollsModule {}
