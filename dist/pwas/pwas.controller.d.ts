import { PwasService } from './pwas.service';
import { InputPwasOraDto } from './dto/input-pwas-ora.dto';
export declare class PwasController {
    private readonly pwasService;
    constructor(pwasService: PwasService);
    getHello(): string;
    postORA(inputPwasORA: InputPwasOraDto): Promise<any>;
}
