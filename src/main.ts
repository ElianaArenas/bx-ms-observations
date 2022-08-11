import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';
import helmet from 'helmet';
import * as YAML from 'yaml';
import * as fs from 'fs';
import { AppModule } from './app.module';

const API_DEFAULT_PORT = 3001;
const API_DEFAULT_PREFIX = '/api/digitacion/v1/observations';

/**
 * The defaults below are dedicated to Swagger configuration
 */
const SWAGGER_TITLE = 'Digitación Hub Mobile';
const SWAGGER_DESCRIPTION =
  'Backend microservice to get predefined observations';
const SWAGGER_PREFIX = `${API_DEFAULT_PREFIX}/docs`;

function createSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle(SWAGGER_TITLE)
    .setDescription(SWAGGER_DESCRIPTION)
    .setVersion('1.0')
    .setLicense('Blue Express', 'https://www.blue.cl')
    .addServer(`http://localhost:${API_DEFAULT_PORT}`, 'Local Environment')
    .addServer('https://devapigw.bluex.cl', 'Develop Environment')
    .addServer('https://qaapigw.bluex.cl', 'QA - Environment')
    .addServer('https://apigw.bluex.cl', 'Production Environment')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  const YAMLfile = YAML.stringify(document);
  fs.writeFileSync('./oas/oas.yaml', YAMLfile);
  SwaggerModule.setup(SWAGGER_PREFIX, app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //To validate input data with DTOs
  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix(process.env.API_PREFIX || API_DEFAULT_PREFIX);

  if (!process.env.SWAGGER_ENABLE || process.env.SWAGGER_ENABLE === '1') {
    createSwagger(app);
  }
  //Middlewares
  app.use(json());
  app.use(helmet());

  app.enableCors({
    allowedHeaders: ['content-type', 'apikey'],
    origin: '*',
    credentials: true,
  });

  await app.listen(process.env.API_PORT || API_DEFAULT_PORT);
}

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
