const runtimeConfig = {
  public: {
    // 客戶端可存取的變數
    isProduction: import.meta.env['NODE_ENV'] === 'production',
    baseUrl: import.meta.env['BASE_URL'] || '/',
    version: import.meta.env['VERSION'],
    versionDate: import.meta.env['VERSION_DATE'],
  },
};

export default runtimeConfig;
