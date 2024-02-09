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
  getAllPolls() {
    return this.pollsService.getAllPolls();
  }

  @Get(':id')
  getOnePoll(@Param('id') id: string) {
    return this.pollsService.getOnePoll(id);
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
