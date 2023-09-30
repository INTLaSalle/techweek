<template>
  <about/>
  <sponsors/>

</template>

 

<script>
import about from '../components/about.vue';
import sponsors from '../components/sponsors.vue';

export default {
  components: {
    about,
    sponsors
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