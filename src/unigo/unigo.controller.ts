import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UnigoService } from './unigo.service';
import { InputTrimmedVectorDto } from './dto/unigo.dto';


@Controller()
export class UnigoController {
  constructor(private readonly unigoService: UnigoService) {}

  @Get('/api/unigo')
  getHello(): string {   
    return this.unigoService.getHello();
  }

  @Get('api/unigo/vector/:taxid')
  async getVector(@Param() params) {
    const resp = await this.unigoService.getRawVector(params.taxid)
    return resp.data
  }

  @Post('/api/unigo/trimmedVectorByProt')
  async getTrimmedVectorByProt(@Body() inputTrimmedVector: InputTrimmedVectorDto){
    const resp = await this.unigoService.getTrimmedVectorByProt(inputTrimmedVector); 
    return resp; 
  }

  @Post('api/unigo/trimmedVector')
  async getTrimmedVector(@Body() inputTrimmedVector: InputTrimmedVectorDto){
    const resp = await this.unigoService.getTrimmedVector(inputTrimmedVector); 
    return resp; 
  }

}