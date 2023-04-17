import { Controller, Get, Post, Body, Param } from '@nestjs/common';
//import { AxiosResponse } from '@nestjs/common/http/interfaces/axios.interfaces';
import { Observable } from 'rxjs/internal/Observable';
import { MultiomicsService } from './multiomics.service';
import { CoverRequest } from './dto/multiomics.dto';

@Controller('api/multiomics')
export class MultiomicsController {
  constructor(private readonly multiomics: MultiomicsService) {}
  // Guard This TO DO

  @Post('cover')
  async getEnsemblMany(
    @Body() coverRequest : CoverRequest
    ): Promise<any> {
    const resp = await this.multiomics.getCoverage(coverRequest.prot_ids, coverRequest.gene_ids, coverRequest.return_pct);
    console.log(
      resp.data
    );
    return resp.data;
  }
}
