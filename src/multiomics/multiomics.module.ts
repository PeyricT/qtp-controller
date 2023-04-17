import { Module, HttpModule } from '@nestjs/common';
import { MultiomicsController } from './multiomics.controller';
import { MultiomicsService } from './multiomics.service';

@Module({
    imports: [HttpModule],
    controllers: [MultiomicsController],
    providers: [MultiomicsService],
})
export class MultiomicsModule {}
