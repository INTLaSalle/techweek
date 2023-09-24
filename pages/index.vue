<template>

<div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
      <h1>Hello 1, {{ message }}</h1>
    </div>
    <div class="col">
      <h1>trying boostrap</h1>
    </div>
    <div class="col">
      working?
    </div>
  </div>
</div>

</template>

 

<script>
export default {
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