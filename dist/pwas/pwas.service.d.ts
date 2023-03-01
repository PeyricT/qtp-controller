import { HttpService } from '@nestjs/common';
import { InputPwasOraDto } from './dto/input-pwas-ora.dto';
export declare class PwasService {
    private httpService;
    constructor(httpService: HttpService);
    getHello(): string;
    computeORA(inputPwasORA: InputPwasOraDto): Promise<any>;
}
