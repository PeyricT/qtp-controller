import { Module, HttpModule } from '@nestjs/common';
import { UniprotController } from './uniprot.controller';
import { UniprotService } from './uniprot.service';

@Module({
    imports: [HttpModule],
    controllers: [UniprotController],
    providers: [UniprotService],
})
export class UniprotModule {}
