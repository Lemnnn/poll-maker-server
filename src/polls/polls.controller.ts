import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PollDto } from './dto/poll.dto';
import { PollsService } from './polls.service';

@Controller('polls')
export class PollsController {
  constructor(private readonly pollsService: PollsService) {}

  @Get()
  readAllPolls() {
    return this.pollsService.readAllPolls();
  }

  @Post()
  createPoll(@Body() pollDto: PollDto) {
    return this.pollsService.createPoll(pollDto);
  }

  @Delete(':id')
  deletePoll(@Param('id') id: string) {
    return this.pollsService.deletePoll(id);
  }

  @Patch(':id')
  updatePoll(@Param('id') id: string, @Body() pollDto: PollDto) {
    return this.pollsService.updatePoll(id, pollDto);
  }
}
