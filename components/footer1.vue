
<template>
    <footer class="footerWeb">

        <!-- Copyright -->
        <div class="footerText">
        <p>© INT Members. All rights reserved</p>
      </div>
        <!-- Copyright -->
        <!-- :src="`../images/speakers/speakers-1.jpg`" -->
        <div class="footerImgs">
            <a href="https://www.facebook.com/profile.php?id=100087291936912" target="_blank">
                <img id="face" alt="Facebook" :src="`../images/icons8-facebook-white.svg`"
                    style="width: 25px; height: 25px; object-fit: cover;">
            </a>
            <a href="https://www.instagram.com/int.lasalle/" target="_blank">
                <img id="inst" alt="Instagram" :src="`../images/icons8-instagram-white.svg`"
                    style="width: 25px; height: 25px; object-fit: cover;">
            </a>
        </div>

    </footer>
</template>

<script>
export default {
  name: 'footer1',
}
</script>

<style scoped>
    .footerWeb{
        display:block;
        justify-content:space-evenly;
        background-color: #2d5b94;
        color: white;
        text-align: center;
        padding: 10px;
        margin-top: 3%;

    }
    
</style>
    