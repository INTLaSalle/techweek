

<template>
  
  <navbar/>
   <!-- This is a comment -->
    <div class="container">
      <div class="row">
      <NuxtPage/>
       </div>
    </div>
  
  

  


</template>

<script>
import navbar from './components/navbar.vue';

export default defineComponent({
  components: {
    navbar,
    
  },
})
</script>


<style>

  .IntLogo
  {
    width: 90px;
    height: 90px;
  }

    .navbar 
  {
    text-align: center;
  }


  .navbar-nav
  {
    margin: auto;
  }


  
  body,
  .navbar
  {
    background-color: #C4E3E4!important;
  }
  
  .container {
    
    /*height: fit-content;
    min-height: 100vh;
    min-width: 100vw;
    width: 100vw;
    z-index: -1;*/
  }
 
  .app-container {
    //min-height: 100vh;
  }
  .content-container {
    //flex-grow: 1;
  }
</style>