import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type PollDocument = HydratedDocument<Poll>;

type pollOption = {
  title: string;
  votes: number;
};

@Schema()
export class Poll {
  @Prop()
  id: mongoose.Types.ObjectId;

  @Prop()
  title: string;

  @Prop()
  options: pollOption[];
}

export const PollSchema = SchemaFactory.createForClass(Poll);
