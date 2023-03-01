import { Injectable, HttpService } from '@nestjs/common';
import { InputPwasOraDto } from './dto/input-pwas-ora.dto';

import { PWAS_ENDPOINT as pwasRes } from '../constant';

@Injectable()
export class PwasService {
  constructor(private httpService: HttpService) {}
  getHello(): string {
    return 'PWAS Serving!';
  }
  async computeORA(inputPwasORA: InputPwasOraDto): Promise<any> {
    /*const f = ():Promise<string> => {
            return new Promise(resolve => setTimeout(()=>resolve('coucou'), 1000) );
        }
        const z = await f();
        return z;*/
    console.log(`Request at ${pwasRes}/compute`);
    //console.dir(inputPwasORA)

    const oraRequest = {
      all_accessions: inputPwasORA.proteinsExp,
      significative_accessions: inputPwasORA.proteinsDelta,
      taxid: `${inputPwasORA.taxid}`,
      method: 'fisher',
      pvalue: inputPwasORA.pvalue,
    };
    console.dir(oraRequest);
    return this.httpService.post(`${pwasRes}/compute`, oraRequest).toPromise();
  }
}
