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

@Controller('polls')
export class PollsController {
  @Get()
  readAllPolls() {
    return [];
  }

  @Get(':id')
  findOnePoll(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createPoll(@Body() pollDto: PollDto) {
    return { pollDto };
  }

  @Delete(':id')
  deletePoll(@Param('id') id: string) {
    return { id };
  }

  @Patch(':id')
  updatePoll(@Param('id') id: string, @Body() pollDto: PollDto) {
    return { id, pollDto };
  }
}
