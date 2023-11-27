import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'In Principle and Practice',
    },
  },
  build: {
    transpile: ['gsap', '@glidejs/glide']
  },
  vite: {
    optimizeDeps: {
      exclude: [
        'date-fns'
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/styles.scss" as *;'
        }
      }
    },
    plugins: [
      ViteYaml()
    ],
  },
})
