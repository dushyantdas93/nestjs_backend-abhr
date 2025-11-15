import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/regiserUser.dto';
import bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
constructor(private readonly userService:UserService,private readonly jwtService:JwtService) {}

  async  registerUser(registerUserDto:RegisterDto){

    const saltRounds = 10 
       const hash = await bcrypt.hash(registerUserDto.password,saltRounds)

      const user = await  this.userService.createUser({...registerUserDto,password:hash})

      const  payload = {sub:user?._id,username:user?.fname}

      const token = await this.jwtService.signAsync(payload)

      console.log(token)
        return {message:'register user successfully'}
    }
}
