import { Controller, Get, Post, Body, Param } from '@nestjs/common';
//import { AxiosResponse } from '@nestjs/common/http/interfaces/axios.interfaces';
import { Observable } from 'rxjs/internal/Observable';
import { EnsemblService } from './ensembl.service';
import { EnsemblBatchRequest } from './dto/ensembl.dto';

@Controller('api/ensembl')
export class EnsemblController {
  constructor(private readonly ensemblService: EnsemblService) {}
  // Guard This TO DO

  @Get('get/:id')
  async getEnsembl(@Param() params): Promise<any> {
    //Observable<AxiosResponse<any>>{
    const resp = await this.ensemblService.getEnsembl(params.id);
    console.dir(resp);
    return resp.data;
  }
  @Get('dimension')
  async getLength(): Promise<any> {
    //Observable<AxiosResponse<any>>{
    const resp = await this.ensemblService.length();
    console.dir(resp?.data);
    return resp.data;
  }

  @Get('version')
  async getVersion(): Promise<any> {
    const resp = await this.ensemblService.version();
    return resp.data;
  }

  @Post('genes')
  async getEnsemblGenes(
    @Body() ensemblBatchRequest: EnsemblBatchRequest,
  ): Promise<any> {
    //Observable<AxiosResponse<any>>{
    const resp = await this.ensemblService.getEnsemblGenes(
      ensemblBatchRequest.ensemblIDs,
    );
    console.log(
      `Returning ${Object.keys(resp.data).reduce(
        (acc, val) => (resp.data[val] != null ? acc + 1 : acc),
        0,
      )} valid elements`,
    );
    return resp.data;
  }

  @Post('listids')
  async getListIds(
    @Body() ensemblBatchRequest: EnsemblBatchRequest,
  ): Promise<any> {
    const resp = await this.ensemblService.getListIds(
      ensemblBatchRequest.ensemblIDs,
    );
    return resp.data;
  }

  @Post('proteome_scan')
  async proteomeScan(
    @Body() proteomeScanRequest: EnsemblBatchRequest,
  ): Promise<any> {
    //Observable<AxiosResponse<any>>{
    console.log(
      `/api/ensembl/proteome_scan with ${proteomeScanRequest.ensemblIDs.length} genes`,
    );
    const resp = await this.ensemblService.proteomeScan(
      proteomeScanRequest.ensemblIDs,
    );

    return resp.data;
  }
}
