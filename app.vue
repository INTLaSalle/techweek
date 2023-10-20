

<template>
  <navbar />
  
    
    <div class="container">
      <div class="row">
        <NuxtPage/>
      </div>
    </div>
    
      <!-- add the link for the footer -->
    <footer1 />
</template>



<script>
  import navbar from './components/navbar.vue';
  import footer1 from './components/footer1.vue';

  export default defineComponent({
      components: {
      navbar,
      footer1,  
    },
  })
</script>


<style>
.IntLogo {
  width: 90px;
  height: 90px;
}

.navbar {
  text-align: center;
}


.navbar-nav {
  margin: auto;
}



body,
.navbar {
  background-color: #C4E3E4 !important;
}

/*
    .container {
      
      /*height: fit-content;
      min-height: 100vh;
      min-width: 100vw;
      width: 100vw;
      z-index: -1;
    }
  
    .app-container {
      /*min-height: 100vh;
    }
    .content-container {
      //flex-grow: 1;
    }

  */
</style>