import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto, RegisterDto } from './dto/regiserUser.dto';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(registerUserDto: RegisterDto) {
    const saltRounds = 10;
    const hash = await bcrypt.hash(registerUserDto.password, saltRounds);

    const user = await this.userService.createUser({
      ...registerUserDto,
      password: hash,
    });

    const payload = { sub: user?._id, username: user?.fname };

    const token = await this.jwtService.signAsync(payload);

    console.log(token);
    return { message: 'register user successfully', token };
  }

  async loginUser(loginUserDto: LoginDto) {
    const saltRounds = 10;

    const user = await this.userService.findUser({ ...loginUserDto });

    if (!user) {
      return '';
    }

    const hash = await bcrypt.hash(loginUserDto?.password, saltRounds);

    const userDeta = await bcrypt.hash(hash, user?.password);

    if (!userDeta) {
      return 'creadential false';
    }
    const payload = { sub: user?._id, username: user?.fname };

    const token = await this.jwtService.signAsync(payload);

    return { message: 'login user successfully', token };
  }

    async profileUser(loginUserDto: LoginDto) {
    const saltRounds = 10;

    const user = await this.userService.findUser({ ...loginUserDto });

    if (!user) {
      return '';
    }

  

    return user;
  }


}
