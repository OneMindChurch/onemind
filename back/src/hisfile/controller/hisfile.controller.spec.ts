import { Test, TestingModule } from '@nestjs/testing';
import { HisfileController } from './hisfile.controller';

describe('HisfileController', () => {
  let controller: HisfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HisfileController],
    }).compile();

    controller = module.get<HisfileController>(HisfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
