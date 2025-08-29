const vuetifyConfig = {
  moduleOptions: {
    // check https://nuxt.vuetifyjs.com/guide/server-side-rendering.html
    ssrClientHints: {
      reloadOnFirstRequest: false,
      viewportSize: false,
      prefersColorScheme: false,

      prefersColorSchemeOptions: {
        useBrowserThemeOnly: false,
      },
    },

    // /* If customizing sass global variables ($utilities, $reset, $color-pack, $body-font-family, etc) */
    // disableVuetifyStyles: true,
    styles: {
      configFile: 'assets/settings.scss',
    },

    vuetifyOptions: '../../vuetify.config.ts', // <== you can omit it
  },
};

export default vuetifyConfig;
