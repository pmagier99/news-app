// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@storyblok/nuxt"],
  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "light",
    fallback: "light",
  },
  storyblok: {
    accessToken: 'I6dLUlxXXioyg0KCxAzwOwtt'
  },
  devServer:{
    https: {
      key: './localhost-key.pem',
      cert: './localhost.pem'
    }
  }
});