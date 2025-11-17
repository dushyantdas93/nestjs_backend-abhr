import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/regiserUser.dto';
import { AuthGuard } from './auth.gaurd';
import { User } from 'src/user/schemas/user.schema';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {


    // authService:AuthService

    // constructor(authService:AuthService){
    //     this.authService = authService
    // }

    constructor(private readonly authService:AuthService,private readonly userService:UserService){}


    @Post("register")
   async register(@Body() registerUserDto : RegisterDto){


       const result = await this.authService.registerUser(registerUserDto)
        return result
    }

     @Post("login")
   async login(@Body() loginUserDto : LoginDto){


       const result = await this.authService.loginUser(loginUserDto)
        return result
    }

    @UseGuards(AuthGuard)
    @Get("profile")
   async profile(@Request() req){


const userId = req.user.sub

const result = await this.userService.findById(userId)


        return result


    //    const result = await this.authService.profileUser(loginUserDto)
        return 'profiel'
    }

}
