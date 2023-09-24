// https://nuxt.com/docs/api/configuration/nuxt-config
import modules from './modules'

export default ({
  ...modules,
  
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],

  plugins: [
    { src: "~/plugins/bootstrap.js", mode: 'client'}
  ]
})