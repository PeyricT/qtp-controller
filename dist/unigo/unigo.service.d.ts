import { HttpService } from '@nestjs/common';
import { InputTrimmedVectorDto } from './dto/unigo.dto';
import * as t from './unigo.types';
export declare class UnigoService {
    private httpService;
    constructor(httpService: HttpService);
    getHello(): string;
    getRawVector(taxid: number): Promise<import("axios").AxiosResponse<any>>;
    getTrimmedVectorByProt(inputTrimmedVector: InputTrimmedVectorDto): Promise<{
        [prot: string]: t.GOTermInterface[];
    }>;
    getTrimmedVector(inputTrimmedVector: InputTrimmedVectorDto): Promise<t.TrimmedVectorResult[]>;
}
