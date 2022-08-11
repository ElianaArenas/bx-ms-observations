export interface ILogger {
  log: (message: string | Error, context?: string) => void;
  error: (message: string | Error, trace?: string, context?: string) => void;
  warn: (message: string | Error, context?: string) => void;
  debug?: (message: string | Error, context?: string) => void;
  verbose?: (message: string | Error, context?: string) => void;
  setContext: (context: string) => void;
}
