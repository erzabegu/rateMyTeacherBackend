import { Test, TestingModule } from '@nestjs/testing';
import { ProfessorsService } from './professors.service';

describe('ProfessorsService', () => {
  let service: ProfessorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfessorsService],
    }).compile();

    service = module.get<ProfessorsService>(ProfessorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
