import { HttpService } from '@nestjs/common';
export declare class EnsemblService {
    private httpService;
    constructor(httpService: HttpService);
    length(): Promise<import("axios").AxiosResponse<any>>;
    getEnsembl(ensemblID: string): Promise<import("axios").AxiosResponse<any>>;
    getEnsemblGenes(ensemblIdList: string[]): Promise<import("axios").AxiosResponse<any>>;
    getListIds(ensemblListName: string[]): Promise<import("axios").AxiosResponse<any>>;
    model(): Promise<import("axios").AxiosResponse<any>>;
    version(): Promise<import("axios").AxiosResponse<any>>;
    proteomeScan(ensemblIdList: string[]): Promise<import("axios").AxiosResponse<any>>;
}
