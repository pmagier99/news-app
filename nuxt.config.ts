// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      meta: [
        {
          name: "viewport", content: "width=device-width, initial-scale=1"
        }
      ]
    }
  },
  image: {
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
    unsplash: {
      baseURL: "https://source.unsplash.com",
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@storyblok/nuxt", "@nuxt/image"],
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