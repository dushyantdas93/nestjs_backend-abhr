import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectModelDto } from './create-project-model.dto';

export class UpdateProjectModelDto extends PartialType(CreateProjectModelDto) {}
