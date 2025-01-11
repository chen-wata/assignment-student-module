import { Test, TestingModule } from '@nestjs/testing';
import { ChenStudentController } from './chen-student.controller';

describe('ChenStudentController', () => {
  let controller: ChenStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChenStudentController],
    }).compile();

    controller = module.get<ChenStudentController>(ChenStudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
