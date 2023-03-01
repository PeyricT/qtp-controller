import { UniprotService } from './uniprot.service';
import { UniprotBatchRequest } from './dto/uniprot.dto';
export declare class UniprotController {
    private readonly uniprotService;
    constructor(uniprotService: UniprotService);
    getUniprot(params: any): Promise<any>;
    getLength(): Promise<any>;
    getVersion(): Promise<any>;
    getUniprotMany(uniprotBatchRequest: UniprotBatchRequest): Promise<any>;
    proteomeScan(proteomeScanRequest: UniprotBatchRequest): Promise<any>;
}
