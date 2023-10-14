

<template>
  <navbar />
  <footer />
    
      <div class="app-container">
        <div class="content-container">
          <NuxtPage />
        </div>
      </div>
    
      <!-- add the link for the footer -->
  
</template>



<script>
  import navbar from './components/navbar.vue';
  import footer from './components/footer.vue';
  import { Footer } from '#build/components';

  export default defineComponent({
    components: {
    navbar,
    footer,
    Footer
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