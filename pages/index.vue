<template>
  <about/>
  <schedule/>
  <sponsors/>
</template>

 

<script>
import about from '../components/about.vue';
import schedule from '../components/schedule.vue';
import sponsors from '../components/sponsors.vue';

export default {
  components: {
    about,
    schedule,
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