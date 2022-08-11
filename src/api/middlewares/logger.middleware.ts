import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ILogger } from 'src/domain/utils/logger/logger.service';

@Injectable()
class LoggerMiddleware implements NestMiddleware {
  constructor(@Inject('ILogger') private readonly _logger: ILogger) {
    this._logger.setContext(LoggerMiddleware.name);
  }

  use(request: Request, response: Response, next: NextFunction) {
    response.on('finish', () => {
      const { method, originalUrl, ip } = request;
      const { statusCode, statusMessage } = response;

      const message = `${method} ${originalUrl} ${statusCode} ${statusMessage} ${ip}`;

      if (statusCode >= 500) return this._logger.error(message);

      if (statusCode >= 400) return this._logger.warn(message);

      this._logger.log(message);
    });

    next();
  }
}

export default LoggerMiddleware;
