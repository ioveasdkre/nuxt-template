// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always', // ✅ 允許 `<br/>` 這種自閉合標籤
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
    },
  },
)
