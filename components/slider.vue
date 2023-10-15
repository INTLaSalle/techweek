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
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
    export default {
        name: "Slider",
        data() {
            return {
                images: [
                    "../images/image1.png",
                    "../images/image2.png",
                    "../images/image3.png",
                ],
            };
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
