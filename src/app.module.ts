import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CityModule } from './city/city.module';
import { AreaModule } from './area/area.module';
import { DeveloperModule } from './developer/developer.module';
import { ProjectModule } from './project/project.module';
import { ProjectModelModule } from './project-model/project-model.module';


@Module({
  imports: [
    ConfigModule.forRoot(), // <-- FIXED
    MongooseModule.forRoot(process.env.MONGODB_URL as string), // <-- FIXED
    AuthModule,
    UserModule,
    CityModule,
    AreaModule,
    DeveloperModule,
    ProjectModule,
    ProjectModelModule,

    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
   
}
