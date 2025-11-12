// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./assets/css/main.css"],
  modules: ["nuxt-aos", "@nuxtjs/i18n"],

  aos: {
    once: true,
    disable: "phone",
    duration: 800,
    easing: "ease-out-cubic",
  },

  i18n: {
    defaultLocale: "ru",
    locales: [
      { code: "tj", name: "Тоҷики", file: "tj.json" },
      { code: "ru", name: "Русский", file: "ru.json" },
    ],
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
      urlBase: process.env.URL_BASE,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
