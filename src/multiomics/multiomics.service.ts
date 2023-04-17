import { Injectable, HttpService } from '@nestjs/common';
import { MULTIOMICS_ENDPOINT as multiomicsRes } from '../constant';

@Injectable()
export class MultiomicsService {
  constructor(private httpService: HttpService) {}

  getCoverage(prot_ids_: string[], gene_ids_: string[], return_pct_ : boolean) {
    return this.httpService
      .post(`${multiomicsRes}/cover`, {prot_ids: prot_ids_, gene_ids: gene_ids_, return_pct : return_pct_})
      .toPromise();
  }

}
