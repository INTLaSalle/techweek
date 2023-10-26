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
            <span class="visually-hidden">{{$t('previous')}}</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" ariahidden="true"></span>
            <span class="visually-hidden">{{$t('next')}}</span>
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

            // Set the margin-top value for the target div (the carousel)
            const targetDiv = document.getElementById('carouselExample');
            
            if (viewportWidth>=1200){
                targetDiv.style.marginTop = `8%`;
            }else if(viewportWidth<1200 && viewportWidth>=800){
                targetDiv.style.marginTop = `15%`;
            }else if(viewportWidth<800 && viewportWidth>=650){
                targetDiv.style.marginTop = `25%`;
            }else if(viewportWidth<650 && viewportWidth>=450){
                targetDiv.style.marginTop = `40%`;
            }else if(viewportWidth<450 && viewportWidth>=300){
                targetDiv.style.marginTop = `50%`;
            }else if(viewportWidth<300){
                targetDiv.style.marginTop = `60%`;
            }


        },
    },
};
</script>
  
<style scoped>
#carouselExample {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    overflow: hidden;
}

.carousel-inner {
    justify-content: space-around;
    width: 60%;
    height: auto;
}
</style>
  