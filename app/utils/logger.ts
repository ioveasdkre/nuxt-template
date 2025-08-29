import { createConsola } from 'consola';
import { runtimeConfig } from '@/configs';

const useAppLogger = () => {
  const logger = createConsola({
    level: runtimeConfig.public.isProduction ? -999 : 3, // -999: 禁用日誌, 3: 顯示所有日誌
  });

  return {
    info: (message: unknown, ...args: unknown[]) => logger.info(message, ...args),
    warn: (message: unknown, ...args: unknown[]) => logger.warn(message, ...args),
    error: (message: unknown, ...args: unknown[]) => logger.error(message, ...args),
    debug: (message: unknown, ...args: unknown[]) => logger.debug(message, ...args),
  };
};

export const appLogger = useAppLogger();
