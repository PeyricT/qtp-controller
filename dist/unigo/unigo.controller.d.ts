import { UnigoService } from './unigo.service';
import { InputTrimmedVectorDto } from './dto/unigo.dto';
export declare class UnigoController {
    private readonly unigoService;
    constructor(unigoService: UnigoService);
    getHello(): string;
    getVector(params: any): Promise<any>;
    getTrimmedVectorByProt(inputTrimmedVector: InputTrimmedVectorDto): Promise<{
        [prot: string]: import("./unigo.types").GOTermInterface[];
    }>;
    getTrimmedVector(inputTrimmedVector: InputTrimmedVectorDto): Promise<import("./unigo.types").TrimmedVectorResult[]>;
}
