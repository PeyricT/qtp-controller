import { IsDefined,  IsArray } from 'class-validator';

export class EnsemblBatchRequest {
    @IsArray()
    ensemblIDs: string[]
}

export class ensemblDatum {
  @IsDefined()
  id: string;
/*
  @ArrayNotE()
  proteinsExp: string[];
  
  @IsString()
  fullName: string;
*/
}
