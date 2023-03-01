import { Module, HttpModule } from '@nestjs/common';
import { UnigoController } from './unigo.controller';
import { UnigoService } from './unigo.service';

@Module({
    imports: [HttpModule],
    controllers: [UnigoController],
    providers: [UnigoService],
})
export class UnigoModule {}
