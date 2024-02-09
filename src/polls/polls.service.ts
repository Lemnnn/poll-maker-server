import { Injectable, NotFoundException } from '@nestjs/common';
import { PollDto } from './dto/poll.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Poll } from './schemas/polls.schema';

@Injectable()
export class PollsService {
  constructor(@InjectModel(Poll.name) private pollModel: Model<Poll>) {}

  async getAllPolls() {
    return await this.pollModel.find();
  }

  async getOnePoll(id: string) {
    const poll = await this.pollModel.findById(id);
    return poll;
  }

  async createPoll(pollDto: PollDto) {
    const options = pollDto.options.map((option, index) => ({
      id: (index + 1).toString(),
      title: option.title,
      votes: 0,
    }));

    const poll = {
      ...pollDto,
      options: options,
    };

    const newPoll = new this.pollModel(poll);
    const createdPoll = await newPoll.save();
    return createdPoll;
  }

  async deletePoll(id: string) {
    const deletedPoll = await this.pollModel.findByIdAndDelete(id);
    if (!deletedPoll) {
      throw new NotFoundException('Poll not found');
    }
  }

  updatePoll(id: string, pollDto: PollDto) {
    return { id, pollDto };
  }
}
