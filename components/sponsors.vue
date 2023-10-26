<template>

    <section id="sponsors">
        <div class="row gy-4 justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <h2 class=" text-secondary text-dark text-uppercase bold mb-2 text-center">{{$t('our_sponsors')}}</h2>
            </div>
        </div>

        <div class="row justify-content-md-center justify-content-center">
            <div :class="sponsorsClass">
                <img :src="`../images/sponsors/sponsor-college-lasalle-logo.png`" alt="" width="100%" height="85" fill="currentColor" viewBox="0 0 284 65"/>
            </div>
            <div :class="sponsorsClass">
                <img :src="`../images/sponsors/sponsor-lci-education-network-logo.png`" alt="" width="100%" height="85" fill="currentColor" viewBox="0 0 284 65"/>
            </div>
            <div :class="sponsorsClass">
                <img :src="`../images/sponsors/sponsor-agel-logo.png`" alt="" width="100%" height="85" fill="currentColor" viewBox="0 0 284 65"/>
            </div>
            <div :class="sponsorsClass">
                <img :src="`../images/sponsors/sponsor-int-logo.png`" alt="" width="100%" height="85" fill="currentColor" viewBox="0 0 284 65"/>
            </div>
        </div>
    </section>
</template>

<script>
    export default defineComponent({
        data() {
            return {
                sponsorsClass : "col-6 col-md-3 col-xl-3",
            };
        },
        
        mounted() {

            window.addEventListener("resize", this.handleResize);
            this.handleResize();
        },

        methods: {
            
            handleResize() {
                // Get the window width
                const windowWidth = window.innerWidth;
                //console.log(windowWidth);
                // Change the class according the windows size

                if(windowWidth < 290){
                    this.sponsorsClass = "col-12 col-md-2 col-xl-2";
                } 
                if(windowWidth >= 290 && windowWidth < 445){
                    this.sponsorsClass = "col-8 col-md-3 col-xl-3";
                } else{
                    this.sponsorsClass = "col-6 col-md-3 col-xl-3";
                }
            },
            beforeDestroy() {
                // Clean the listener of resize when the component is destroyed
                window.removeEventListener("resize", this.handleResize);
            },
        },
    });
	
</script>

<style scoped>
    h2 {
        padding-bottom: 5%;
        /* padding-top: 8%; */
        color: #000000;
        font-weight: bold;
    }

    img {
        padding: 5px;
        height: auto;
        
    }

    #sponsors {
        margin-top: 5%;
    }
</style>