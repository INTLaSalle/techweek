

<template>
  
  <example22/>
   <!-- This is a comment -->
  <NuxtPage/>


</template>

<script>
import example22 from './components/example.vue';

export default defineComponent({
  components: {
    example22
  },
})
</script>


<style>

  .container {
    
    height: fit-content;
    min-height: 100vh;
    min-width: 100vw;
    width: 100vw;
    z-index: -1;
  }
 
  .app-container {
    min-height: 100vh;
  }
  .content-container {
    flex-grow: 1;
  }
</style>