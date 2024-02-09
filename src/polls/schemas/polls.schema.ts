import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type PollDocument = HydratedDocument<Poll>;

type pollOption = {
  id: number;
  title: string;
  votes: { type: number; default: 0 };
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
