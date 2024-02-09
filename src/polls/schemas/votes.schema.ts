import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type VotesDocument = HydratedDocument<Vote>;

@Schema()
export class Vote {
  @Prop()
  pollId: { type: mongoose.Schema.Types.ObjectId; ref: 'Poll' };

  @Prop()
  optionId: string;

  @Prop()
  userId: { type: mongoose.Schema.Types.ObjectId; ref: 'User' };
}

export const VoteSchema = SchemaFactory.createForClass(Vote);
