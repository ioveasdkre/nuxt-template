import type { ModuleOptions } from 'nuxt-security';
// import runtimeConfig from './runtime';

// const selfOrLocalhost = runtimeConfig.public.isProduction
//   ? ["'self'", 'data:']
//   : ["'self'", 'http://localhost:4200', 'https://fonts.gstatic.com'];
// const none = ["'none'"];
// const selfOrUnsafeInline = runtimeConfig.public.isProduction
//   ? ["'self'"]
//   : ["'unsafe-inline'", 'http://localhost:4200'];

const securityConfig: Partial<ModuleOptions> = {
  nonce: true,
  enabled: true, // 啟用安全機制
  headers: {
    //
    // 設定 Content Security Policy (CSP)
    // contentSecurityPolicy: {
    //   'base-uri': none,
    //   'child-src': none,
    //   'connect-src': ["'self'", 'https://localhost:44311'],
    //   'default-src': selfOrLocalhost,
    //   'font-src': [...selfOrLocalhost],
    //   'form-action': none,
    //   'frame-ancestors': none,
    //   'frame-src': selfOrLocalhost,
    //   'img-src': ["'self'", 'data:'],
    //   'manifest-src': none,
    //   'media-src': none,
    //   'object-src': none,
    //   sandbox: false,
    //   'script-src': selfOrLocalhost,
    //   'script-src-attr': none,
    //   'script-src-elem': selfOrUnsafeInline,
    //   'style-src': selfOrUnsafeInline,
    //   'style-src-elem': selfOrUnsafeInline,
    //   // 'trusted-types': ['vue', "'allow-duplicates'"], // TODO: 暫時不使用，會發生 Refused to create a TrustedTypePolicy named 'sanitizer' because it violates the following Content Security Policy directive: "trusted-types vue 'allow-duplicates'".
    //   'upgrade-insecure-requests': true,
    //   'worker-src': none,
    // },

    // 限制權限 (Permissions-Policy)
    permissionsPolicy: {
      accelerometer: [],
      autoplay: [],
      camera: [],
      'display-capture': [],
      'encrypted-media': [],
      gyroscope: [],
      magnetometer: [],
      microphone: [],
      midi: [],
      payment: [],
      'picture-in-picture': [],
      'publickey-credentials-get': [],
      'sync-xhr': ['self'],
      usb: [],
      'xr-spatial-tracking': [],
      geolocation: [],
    },

    // 限制 Referrer Policy
    referrerPolicy: 'strict-origin-when-cross-origin',

    // 防止 MIME 類型嗅探
    xContentTypeOptions: 'nosniff',

    // 防止點擊劫持 (與 CSP 的 frame-ancestors 互補)
    xFrameOptions: 'DENY',

    // 禁止 Flash 允許跨域請求
    xPermittedCrossDomainPolicies: 'none',

    // XSS 保護
    xXSSProtection: '1; mode=block',
  },
};

export default securityConfig;
