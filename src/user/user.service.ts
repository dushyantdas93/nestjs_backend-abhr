import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDto, RegisterDto } from 'src/auth/dto/regiserUser.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(RegisterUserDto: RegisterDto) {
    try {
      return await this.userModel.create({
        ...RegisterUserDto,
      });
    } catch (error) {
      console.log(error);
      const Duplicate_key = 11000;

      const err = error as { code?: number };

      if (err.code === Duplicate_key) {
        throw new ConflictException('Email is already taken');
      }
    }
  }

  
  async findUser(loginUserDto: LoginDto) {
    try {
      return await this.userModel.findOne({email:loginUserDto?.email});
    } catch (error) {
      console.log(error);
      const Duplicate_key = 11000;

      const err = error as { code?: number };

      if (err.code === Duplicate_key) {
        throw new ConflictException('Email is already taken');
      }
    }
  }

  async findById(id:string) {
    try {
      return await this.userModel.findById(id);
    } catch (error) {
      console.log(error);
      const Duplicate_key = 11000;

      const err = error as { code?: number };

      if (err.code === Duplicate_key) {
        throw new ConflictException('Email is already taken');
      }
    }
  }

}
