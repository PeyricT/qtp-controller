import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { CONTROLLER_PORT } from './constant'; 
import { Command } from 'commander';
const program = new Command();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(CONTROLLER_PORT);
}
bootstrap();

// Work on logging
//https://itnext.io/advanced-nestjs-techniques-part-2-logging-outgoing-http-requests-3c75d47c5768
