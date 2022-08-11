import { Module, Provider } from '@nestjs/common';
import { LoggerService } from './logger.service';

const providers: Provider[] = [
  {
    provide: 'ILogger',
    useClass: LoggerService,
  },
];

@Module({
  providers,
  exports: providers,
})
export class LoggerModule {}
