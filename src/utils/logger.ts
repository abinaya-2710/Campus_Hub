/**
 * Production-safe logger utility
 * Logs are only shown in development mode
 */

const isDev = import.meta.env.DEV;

export const logger = {
  log: (message: string, data?: any) => {
    if (isDev) {
      if (data) {
        console.log(`ℹ️  ${message}`, data);
      } else {
        console.log(`ℹ️  ${message}`);
      }
    }
  },

  success: (message: string, data?: any) => {
    if (isDev) {
      if (data) {
        console.log(`✅ ${message}`, data);
      } else {
        console.log(`✅ ${message}`);
      }
    }
  },

  warn: (message: string, data?: any) => {
    if (isDev) {
      if (data) {
        console.warn(`⚠️  ${message}`, data);
      } else {
        console.warn(`⚠️  ${message}`);
      }
    }
  },

  error: (message: string, error?: any) => {
    // Always log errors in production for debugging
    if (error) {
      console.error(`❌ ${message}`, error);
    } else {
      console.error(`❌ ${message}`);
    }
  }
};
