import { Test, TestingModule } from '@nestjs/testing';
import { ProjectModelService } from './project-model.service';

describe('ProjectModelService', () => {
  let service: ProjectModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectModelService],
    }).compile();

    service = module.get<ProjectModelService>(ProjectModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
