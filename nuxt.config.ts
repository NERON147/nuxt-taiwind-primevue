// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue"],
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    options: {
      ripple: true,
      inputStyle: "filled",
    },
  },
  css: ["primevue/resources/themes/aura-light-green/theme.css"]
});