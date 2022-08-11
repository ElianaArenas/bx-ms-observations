import { Injectable, Logger, Scope } from '@nestjs/common';
import { ILogger } from '../../../domain/utils/logger/logger.service';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService implements ILogger {
  _logger = new Logger();

  setContext(context: string): void {
    this._logger = new Logger(context);
  }

  error(message: string | Error): void {
    this._logger.error(message);
  }

  log(message: string | Error): void {
    this._logger.log(message);
  }

  warn(message: string | Error): void {
    this._logger.warn(message);
  }

  debug(message: string | Error): void {
    this._logger.debug(message);
  }

  verbose(message: string | Error): void {
    this._logger.verbose(message);
  }
}
