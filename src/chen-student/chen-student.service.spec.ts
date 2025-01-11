import { Test, TestingModule } from '@nestjs/testing';
import { ChenStudentService } from './chen-student.service';

describe('ChenStudentService', () => {
  let service: ChenStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChenStudentService],
    }).compile();

    service = module.get<ChenStudentService>(ChenStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
