import { EnsemblService } from './ensembl.service';
import { EnsemblBatchRequest } from './dto/ensembl.dto';
export declare class EnsemblController {
    private readonly ensemblService;
    constructor(ensemblService: EnsemblService);
    getEnsembl(params: any): Promise<any>;
    getLength(): Promise<any>;
    getVersion(): Promise<any>;
    getEnsemblGenes(ensemblBatchRequest: EnsemblBatchRequest): Promise<any>;
    getListIds(ensemblBatchRequest: EnsemblBatchRequest): Promise<any>;
    proteomeScan(proteomeScanRequest: EnsemblBatchRequest): Promise<any>;
}
