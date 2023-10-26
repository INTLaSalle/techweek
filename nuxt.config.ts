// https://nuxt.com/docs/api/configuration/nuxt-config
import modules from './modules'


export default defineNuxtConfig ({
  ...modules,
  
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],

  plugins: [
    { src: "~/plugins/bootstrap.js", mode: 'client'}
  ],
  modules:["@nuxtjs/i18n"],
  i18n:{
    defaultLocale:"en-US",
    lazy:true,
    langDir:"locales",
    strategy:"no_prefix",
    detectBrowserLanguage: false,
    locales:[
      {
        code:"en-US",
        iso:"en-US",
        name:"English(US)",
        file:"en-US.json"
      },
      {
        code:"fr-FR",
        iso:"fr-FR",
        name:"French",
        file:"fr-FR.json"
      }
    ],
   
  }
});