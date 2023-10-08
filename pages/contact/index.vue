<template>
    <join/>
    <contact/>
  
  </template>
  
   
  
  <script>
  import join from '../components/join.vue';
  import contact from '../components/contact.vue';
  
  export default {
    components: {
      join,
      contact
    },
    data() {
      return {
        message: 'Vue.js'
      };
    }
  }
  </script>
  
   
  
  <style scoped>
  h1 {
    color: blue;
  }
  </style>