import { Injectable } from '@nestjs/common';
import { CreateProjectModelDto } from './dto/create-project-model.dto';
import { UpdateProjectModelDto } from './dto/update-project-model.dto';

@Injectable()
export class ProjectModelService {
  create(createProjectModelDto: CreateProjectModelDto) {
    return 'This action adds a new projectModel';
  }

  findAll() {
    return `This action returns all projectModel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectModel`;
  }

  update(id: number, updateProjectModelDto: UpdateProjectModelDto) {
    return `This action updates a #${id} projectModel`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectModel`;
  }
}
