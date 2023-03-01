import { Injectable, HttpService } from '@nestjs/common';
//import { Observable } from 'rxjs';
//import {Module} from
//import { InputPwasOraDto } from './dto/uniprot-entity.dto';
import { UNIPROT_ENDPOINT as uniprotRes } from '../constant';
@Injectable()
export class UniprotService {
  constructor(private httpService: HttpService) {}
  length() {
    return this.httpService.get(`${uniprotRes}/length`).toPromise();
  }
  getUniprot(uniprotID: string) {
    return this.httpService
      .get(`${uniprotRes}/uniprot/${uniprotID}`)
      .toPromise();
  }
  getUniprotMany(uniprotIdList: string[]) {
    console.log('-->', uniprotIdList);
    return this.httpService
      .post(`${uniprotRes}/uniprots`, { uniprotIDs: uniprotIdList })
      .toPromise();
  }
  model() /*: Observable<AxiosResponse<any>>*/ {
    return this.httpService.get(`${uniprotRes}/model`).toPromise();
  }
  version() {
    return this.httpService.get(`${uniprotRes}/version`).toPromise();
  }
  proteomeScan(uniprotIdList: string[]) {
    return this.httpService
      .post(`${uniprotRes}/collection_scan`, { uniprotIDs: uniprotIdList })
      .toPromise();
  }
}
