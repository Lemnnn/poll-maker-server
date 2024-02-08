import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  id: mongoose.Types.ObjectId;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 14);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});
