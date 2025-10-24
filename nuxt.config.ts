
// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import autoprefixer from "autoprefixer";


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/ui'],
  css: ['./app/assets/css/main.css'],

  app: {
    head: {
      title: 'Frontend Mentor',
      // titleTemplate: '%s | Solutions',
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
      htmlAttrs: { lang: 'en' },

      // Links to favicons
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon-32x32.png' },
        // Weather App - DM Sans
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque&display=swap' },
      ],

    },

    pageTransition: { name: 'page', mode: 'out-in' }
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://frontend-mentor-18k6.vercel.app/'
    }
  },  

  ui: {
    colorMode: true
  }, 

  vite: {
    plugins: [
      tailwindcss(),
    ],
  }

})