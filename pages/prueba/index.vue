<template>
<div>
<h1>{{$t('hello_in')}} prueba, {{ message }}</h1>
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
