import { Module, HttpModule } from '@nestjs/common';
import { EnsemblController } from './ensembl.controller';
import { EnsemblService } from './ensembl.service';

@Module({
    imports: [HttpModule],
    controllers: [EnsemblController],
    providers: [EnsemblService],
})
export class EnsemblModule {}
