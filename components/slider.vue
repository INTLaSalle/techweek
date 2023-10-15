<template>
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img :src="`../images/image1.png`" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img :src="`../images/image2.png`" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img :src="`../images/image3.png`" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" ariahidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
  
<script>
export default {
    mounted() {
        this.adjustMarginTop(); // Call it when the component is mounted
        window.addEventListener('resize', this.adjustMarginTop); // Add resize event listener
    },
    methods: {
        adjustMarginTop() {
            // Get the viewport width
            const viewportWidth = window.innerWidth;

            // Calculate the margin-top value based on the viewport width and a 10% increment
            //const marginIncrement = viewportWidth * 0.3;

            // Set the initial margin-top value
            //const initialMargin = 0;

            // Calculate the new margin-top value
            //const newMargin = initialMargin + marginIncrement;

            // Set the margin-top value for the target div (the carousel)
            const targetDiv = document.getElementById('carouselExample');
            if (targetDiv>=1054){
                targetDiv.style.marginTop = `8%`;
            }else if(targetDiv<1054){
                targetDiv.style.marginTop = `15%`;
            }else if(targetDiv<700){
                targetDiv.style.marginTop = `25%`;
            }else if(targetDiv<450){
                targetDiv.style.marginTop = `35%`;
            }else if(targetDiv<300){
                targetDiv.style.marginTop = `45%`;
            }else{
                targetDiv.style.marginTop = `55%`;
            }




           /* if (targetDiv) {
                targetDiv.style.marginTop = `${newMargin}px`;
            }*/
        },
    },
};
</script>
  
<style scoped>
#carouselExample {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 8%;
    overflow: hidden;
}

.carousel-inner {
    justify-content: space-around;
    width: 60%;
    height: auto;
}
</style>
  