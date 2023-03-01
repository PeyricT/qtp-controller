import { Controller, Get, Post, Body } from '@nestjs/common';
import { PwasService } from './pwas.service';
import { InputPwasOraDto } from './dto/input-pwas-ora.dto';
@Controller()
export class PwasController {
  constructor(private readonly pwasService: PwasService) {}

  @Get('/api/pwas')
  getHello(): string {   
    return this.pwasService.getHello();
  }
  @Post('/api/pwas/ora')
  async postORA(@Body() inputPwasORA: InputPwasOraDto): Promise<any> {
    try {
      const resp = await this.pwasService.computeORA(inputPwasORA);
      console.dir(resp?.data);
      return resp.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}