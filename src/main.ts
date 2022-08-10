import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json } from 'express';
import helmet from 'helmet';
import { AppModule } from './app.module';

const API_DEFAULT_PORT = 3000;
const API_DEFAULT_PREFIX = '/api/digitacion/v1/';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix(process.env.API_PREFIX || API_DEFAULT_PREFIX);

  //Middlewares
  app.use(json());
  app.use(helmet());

  await app.listen(process.env.API_PORT || API_DEFAULT_PORT);
}

bootstrap();
