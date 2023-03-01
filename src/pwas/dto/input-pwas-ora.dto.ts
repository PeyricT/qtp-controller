/*
export class InputPwasOraDto {
    proteinsDelta: string[];
    proteinsExp: string[];
    taxid: number;
}*/
import { ArrayNotEmpty, IsNumber, IsString } from 'class-validator';
export class InputPwasOraDto {
  @ArrayNotEmpty()
  proteinsDelta: string[];

  @ArrayNotEmpty()
  proteinsExp: string[];
  
  @IsString()
  taxid: string;

  @IsNumber()
  pvalue: number; 

}
