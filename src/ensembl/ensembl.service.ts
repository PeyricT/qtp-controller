import { Injectable, HttpService } from '@nestjs/common';
import { ENSEMBL_ENDPOINT as ensemblRes } from '../constant';

@Injectable()
export class EnsemblService {
  constructor(private httpService: HttpService) {}
  length() {
    return this.httpService.get(`${ensemblRes}/length`).toPromise();
  }
  getEnsembl(ensemblID: string) {
    return this.httpService
      .get(`${ensemblRes}/ensembl/${ensemblID}`)
      .toPromise();
  }
  getEnsemblGenes(ensemblIdList: string[]) {
    console.log('-->', ensemblIdList);
    return this.httpService
      .post(`${ensemblRes}/ensembls`, { ensemblIDs: ensemblIdList })
      .toPromise();
  }
  getListIds(ensemblListName: string[]) {
    console.log('-->', ensemblListName);
    return this.httpService
      .post(`${ensemblRes}/ensembls/listids`, { params: ensemblListName })
      .toPromise();
  }
  model() /*: Observable<AxiosResponse<any>>*/ {
    return this.httpService.get(`${ensemblRes}/model`).toPromise();
  }
  version() {
    return this.httpService.get(`${ensemblRes}/version`).toPromise();
  }
  proteomeScan(ensemblIdList: string[]) {
    return this.httpService
      .post(`${ensemblRes}/collection_scan`, { params: ensemblIdList })
      .toPromise();
  }
}
