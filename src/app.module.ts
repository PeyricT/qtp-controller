import { Module } from '@nestjs/common';
import { PwasModule } from './pwas/pwas.module';
import { UniprotModule } from './uniprot/uniprot.module';
import { UnigoModule } from './unigo/unigo.module'
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [PwasModule, UniprotModule, UnigoModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'data'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
