import { HttpService } from '@nestjs/common';
export declare class MultiomicsService {
    private httpService;
    constructor(httpService: HttpService);
    getCoverage(prot_ids_: string[], gene_ids_: string[], return_pct_: boolean): Promise<import("axios").AxiosResponse<any>>;
}
