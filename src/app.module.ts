import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';
import { environments } from './environments';
import { LoggerModule } from './infra/utils/logger/logger.module';
import LoggerMiddleware from './api/middlewares/logger.middleware';
@Module({
  imports: [
    ApiModule,
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
    }),
    LoggerModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
