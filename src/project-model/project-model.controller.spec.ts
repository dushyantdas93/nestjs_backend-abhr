import { Test, TestingModule } from '@nestjs/testing';
import { ProjectModelController } from './project-model.controller';
import { ProjectModelService } from './project-model.service';

describe('ProjectModelController', () => {
  let controller: ProjectModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectModelController],
      providers: [ProjectModelService],
    }).compile();

    controller = module.get<ProjectModelController>(ProjectModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
