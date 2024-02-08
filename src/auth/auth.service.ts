import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async validateUser(loginDto: LoginDto): Promise<User | null> {
    const { email, password } = loginDto;
    const user = await this.userModel.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      return {
        username: user.username,
        email: user.email,
        password: undefined,
      };
    }

    throw new NotFoundException('User not found.');
  }
  async registerUser(registerDto: RegisterDto): Promise<User> {
    const { email } = registerDto;

    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) throw new ConflictException('Email already exists.');

    const newUser = new this.userModel(registerDto);
    return newUser.save();
  }
}
