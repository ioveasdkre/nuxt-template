// https://nuxt.com/docs/api/configuration/nuxt-config
import { runtimeConfig, securityConfig, veeValidateConfig, vuetifyConfig } from './app/configs';
import { usePrerenderImageRoutes } from './app/utils/prerenderImg-routes';

const photoImg = usePrerenderImageRoutes('public');

const baseURL = runtimeConfig.public.baseUrl;

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  ssr: false,
  typescript: {
    typeCheck: true,
  },
  vite: {
    esbuild: {
      drop: runtimeConfig.public.isProduction ? ['console', 'debugger'] : [],
    },
  },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vee-validate/nuxt',
    'vuetify-nuxt-module',
    'nuxt-security',
  ],
  runtimeConfig,
  security: securityConfig,
  veeValidate: veeValidateConfig,
  vuetify: vuetifyConfig,
  // GitHub Pages 部署配置
  nitro: {
    prerender: {
      // public/images/photo/me.png
      routes: ['/', ...photoImg],
    },
    publicAssets: [
      {
        baseURL,
        dir: 'public',
        maxAge: 60 * 60 * 24 * 7, // 設定快取時間為 7 天
      },
    ],
  },
});
