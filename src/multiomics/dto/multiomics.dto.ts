import { IsDefined,  IsArray } from 'class-validator';

export class CoverRequest {
    @IsArray()
    prot_ids: string[];
    @IsArray()
    gene_ids: string[];
    @IsDefined()
    return_pct:  boolean;
}