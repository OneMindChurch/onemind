import { Module } from '@nestjs/common';
import { HisfileService } from './service/hisfile.service';
import { HisfileController } from './controller/hisfile.controller';
import { authModule } from 'src/auth/module/module.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    authModule,
    MulterModule.register({
      dest: './upload',
    }),
  ],
  providers: [HisfileService],
  controllers: [HisfileController],
})
export class HisfileModule {}
