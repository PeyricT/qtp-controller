import { Controller, Get, Post, Body, Param } from '@nestjs/common';
//import { AxiosResponse } from '@nestjs/common/http/interfaces/axios.interfaces';
import { Observable } from 'rxjs/internal/Observable';
import { UniprotService } from './uniprot.service';
import { UniprotBatchRequest } from './dto/uniprot.dto';

@Controller('api/uniprot')
export class UniprotController {
  constructor(private readonly uniprotService: UniprotService) {}
  // Guard This TO DO
  @Get('get/:id')
  async getUniprot(@Param() params): Promise<any> {
    //Observable<AxiosResponse<any>>{
    const resp = await this.uniprotService.getUniprot(params.id);
    console.dir(resp);
    return resp.data;
  }
  @Get('dimension')
  async getLength(): Promise<any> {
    //Observable<AxiosResponse<any>>{
    const resp = await this.uniprotService.length();
    console.dir(resp?.data);
    return resp.data;
  }

  @Get('version')
  async getVersion(): Promise<any> {
    const resp = await this.uniprotService.version();
    return resp.data;
  }

  @Post('many')
  async getUniprotMany(
    @Body() uniprotBatchRequest: UniprotBatchRequest,
  ): Promise<any> {
    //Observable<AxiosResponse<any>>{
    const resp = await this.uniprotService.getUniprotMany(
      uniprotBatchRequest.uniprotIDs,
    );
    console.log(
      `Returning ${Object.keys(resp.data).reduce(
        (acc, val) => (resp.data[val] != null ? acc + 1 : acc),
        0,
      )} valid elements`,
    );
    return resp.data;
  }

  @Post('proteome_scan')
  async proteomeScan(
    @Body() proteomeScanRequest: UniprotBatchRequest,
  ): Promise<any> {
    console.log(
      `/api/uniprot/proteome_scan with ${proteomeScanRequest.uniprotIDs.length} proteins`,
    );
    const resp = await this.uniprotService.proteomeScan(
      proteomeScanRequest.uniprotIDs,
    );

    return resp.data;
  }
}
