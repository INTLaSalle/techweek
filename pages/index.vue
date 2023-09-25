<template>

<div class="container text-center">
  <div class="row align-items-start">
    <div class="col-3">
      <h1>Hello 1, {{ message }}</h1>
    </div>
    <div class="col-5">
      <h1>trying boostrap</h1>
    </div>
    <div class="col-4">
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