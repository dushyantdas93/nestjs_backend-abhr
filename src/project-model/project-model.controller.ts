import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectModelService } from './project-model.service';
import { CreateProjectModelDto } from './dto/create-project-model.dto';
import { UpdateProjectModelDto } from './dto/update-project-model.dto';

@Controller('project-model')
export class ProjectModelController {
  constructor(private readonly projectModelService: ProjectModelService) {}

  @Post()
  create(@Body() createProjectModelDto: CreateProjectModelDto) {
    return this.projectModelService.create(createProjectModelDto);
  }

  @Get()
  findAll() {
    return this.projectModelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectModelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectModelDto: UpdateProjectModelDto) {
    return this.projectModelService.update(+id, updateProjectModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectModelService.remove(+id);
  }
}
