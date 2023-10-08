

<template>
  
  <navbar/>
   <!-- This is a comment -->
    <div class="container">
      <div class="row">
      <NuxtPage/>
       </div>
    </div>
  
  <footer/>
    <div class="footer">
      <div class="footerText">
        <p>© INT Members. All rights reserved</p>
      </div>
      <div class="footerImgs">
        <a href="https://www.facebook.com/profile.php?id=100087291936912" target="_blank">
          <img id="face" alt="Facebook"  src="" style="width: 25px; height: 25px; object-fit: cover;">
        </a>
        <a href="https://www.instagram.com/int.lasalle/" target="_blank">
          <img id="inst" alt="Instagram"  src="" style="width: 25px; height: 25px; object-fit: cover;">
        </a>
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

  .footer{
    display:flex;
    justify-content:space-evenly;
    background-color: #2d5b94;
    color: white;
    text-align: center;
    padding: 10px;
    margin-top: 3%;

  }
  
</style>