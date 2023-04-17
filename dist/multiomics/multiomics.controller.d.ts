import { MultiomicsService } from './multiomics.service';
import { CoverRequest } from './dto/multiomics.dto';
export declare class MultiomicsController {
    private readonly multiomics;
    constructor(multiomics: MultiomicsService);
    getEnsemblMany(coverRequest: CoverRequest): Promise<any>;
}
