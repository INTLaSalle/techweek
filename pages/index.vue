<template>
  <about/>
  <speakers/>
  <schedule/>
  <sponsors/>
</template>

 

<script>
import about from '../components/about.vue';
import schedule from '../components/schedule.vue';
import sponsors from '../components/sponsors.vue';
import speakers from '../components/speakers.vue';
import footer from '../components/footer.vue';

export default {
  components: {
    about,
    schedule,
    sponsors,
    speakers,
    footer
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