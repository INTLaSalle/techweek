<template>
  <slider />
  <about/>
  <speakers/>
  <schedule/>
  <sponsors/>
</template>

 

<script>
import slider from '../components/slider.vue';
import about from '../components/about.vue';
import schedule from '../components/schedule.vue';
import sponsors from '../components/sponsors.vue';
import speakers from '../components/speakers.vue';

export default {
  components: {
    slider,
    about,
    schedule,
    sponsors,
    speakers,
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