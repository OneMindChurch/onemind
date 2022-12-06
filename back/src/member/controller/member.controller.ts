import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UnauthorizedException,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { MemberService } from '../service/member.service';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/utils/multer.options';
import { MemberDto } from '../dto/member.request.dto';
@Controller('member')
export class MemberController {
  constructor(private readonly service: MemberService) {}

  @Get('takemember')
  async takeMember(@Query() qer) {
    try {
      const data = await this.service.takemember(qer);
      return { code: 200, data: data };
    } catch (error) {
      throw new UnauthorizedException('mysql is dead');
    }
  }
  @Post('uploaddata')
  @UseInterceptors(FilesInterceptor('files', 10, multerOptions('history')))
  async uploadImg(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return this.service.uploadImg(files);
  }
}
