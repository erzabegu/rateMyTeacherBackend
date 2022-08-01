import { Test, TestingModule } from '@nestjs/testing';
import { ProfessorsController } from './professors.controller';
import { ProfessorsService } from './professors.service';

describe('ProfessorsController', () => {
  let controller: ProfessorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfessorsController],
      providers: [ProfessorsService],
    }).compile();

    controller = module.get<ProfessorsController>(ProfessorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
