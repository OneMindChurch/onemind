import { Test, TestingModule } from '@nestjs/testing';
import { HisfileService } from './hisfile.service';

describe('HisfileService', () => {
  let service: HisfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HisfileService],
    }).compile();

    service = module.get<HisfileService>(HisfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
