import { Module } from '@nestjs/common';
import { ProjectModelService } from './project-model.service';
import { ProjectModelController } from './project-model.controller';

@Module({
  controllers: [ProjectModelController],
  providers: [ProjectModelService],
})
export class ProjectModelModule {}
