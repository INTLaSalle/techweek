<template>
  <about/>

</template>

 

<script>
import about from '../components/about.vue';

export default {
  components: {
    about
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