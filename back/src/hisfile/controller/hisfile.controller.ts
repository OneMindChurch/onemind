import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { HisFile } from '../dto/hisfile.request.dto';
import { HisfileService } from '../service/hisfile.service';

@Controller('hisfile')
export class HisfileController {
  constructor(private readonly service: HisfileService) {}

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  async upload(@Body() content: HisFile) {
    console.log(content);
    return this.service.upload(content);
  }

  @Get('list')
  async takeList() {
    return this.service.takeList();
  }

  @Get('tag')
  async takeTag(@Query('id') num) {
    return this.service.findtag(num);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete')
  async deleteTag(@Query('id') num) {
    return this.service.deleteTag(num);
  }
}
