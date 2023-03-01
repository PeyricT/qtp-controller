import { ArrayNotEmpty, IsInt } from "class-validator";

export class InputTrimmedVectorDto {
    @ArrayNotEmpty()
    uniprotIds: string[]; 

    @IsInt()
    taxid:number; 
}