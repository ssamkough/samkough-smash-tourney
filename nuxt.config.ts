// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  runtimeConfig: {
    // The private keys which are only available within server-side
    netlifyFormId: process.env.NETLIFY_FORM_ID,
    netlifyPersonalAccessToken: process.env.NETLIFY_PERSONAL_ACCESS_TOKEN,
  },
});
