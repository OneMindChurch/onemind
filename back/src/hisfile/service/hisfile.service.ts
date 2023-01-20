import { BadGatewayException, Injectable } from '@nestjs/common';
import { SrvRecord } from 'dns';
import { prismaService } from 'src/prisma.service';
import { HisFile } from '../dto/hisfile.request.dto';

@Injectable()
export class HisfileService {
  constructor(private prismaService: prismaService) {}

  async upload(content: HisFile) {
    const sdata = {
      title: content.title,
      tag: content.tag,
    };
    const data = await this.prismaService.hisFile.createMany({
      data: sdata,
    });

    return data;
  }

  async takeList() {
    try {
      const data = await this.prismaService.hisFile.findMany({
        orderBy: { id: 'desc' },
      });
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }
  async findtag(id) {
    try {
      const data = await this.prismaService.hisFile.findUnique({
        where: { id: Number(id) },
      });
      console.log(data);
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  async deleteTag(id) {
    try {
      const data = await this.prismaService.hisFile.delete({
        where: { id: Number(id) },
      });
      console.log(data);
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }
}
