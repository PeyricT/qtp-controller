import { HttpService } from '@nestjs/common';
export declare class UniprotService {
    private httpService;
    constructor(httpService: HttpService);
    length(): Promise<import("axios").AxiosResponse<any>>;
    getUniprot(uniprotID: string): Promise<import("axios").AxiosResponse<any>>;
    getUniprotMany(uniprotIdList: string[]): Promise<import("axios").AxiosResponse<any>>;
    model(): Promise<import("axios").AxiosResponse<any>>;
    version(): Promise<import("axios").AxiosResponse<any>>;
    proteomeScan(uniprotIdList: string[]): Promise<import("axios").AxiosResponse<any>>;
}
