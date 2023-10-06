<template>
    <thankyou/>

  </template>
  
   
  
  <script>
  import thankyou from '../components/thankyou.vue';
  
  export default {
    components: {
      thankyou
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