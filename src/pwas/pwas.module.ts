import { Module, HttpModule } from '@nestjs/common';
import { PwasController } from './pwas.controller';
import { PwasService } from './pwas.service';

@Module({
    imports: [HttpModule],
    controllers: [PwasController],
    providers: [PwasService],
})
export class PwasModule {}
