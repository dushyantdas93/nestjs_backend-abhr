import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstatnts } from './constant';



@Module({
  imports:[UserModule,  JwtModule.register({
    global:true,
      secret: jwtConstatnts.secret || 'defaultSecret', // <-- Define secret
      signOptions: { expiresIn: '1h' }, // <-- Optional, set expiry time
    }),],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
