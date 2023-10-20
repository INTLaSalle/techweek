<template>

    <section id="join" >
        <div class="row gy-4 justify-content-md-center" :style="joinTitle">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6" :style="customClass">
                <h2 class=" text-secondary text-dark text-uppercase bold mb-2 text-center" >Join Us</h2>
            </div>
        </div>

        <div class="row gy-4 justify-content-md-center">
            <div :class="joinClass">
                <div>
                    <h3 class="text-secondary text-dark bold mb-2 ">Join INT Club</h3>
                </div>
                <div>
                    <p class="text-secondary bold mb-2 font-size-15">To learn more, don't hesitate to get in touch</p>
                </div>    
                
                <div>
                    <a  href="https://formfacade.com/public/104724340641572825850/all/form/1FAIpQLScSQN8ER2v2RdXc2ovVVUocA4yuALUyWZJG1cvO44YECKd4-w" target="_blank" >
                        <button type="button" class="btn btn-primary btn-lg">Join the Club</button>
                    </a>
                </div>
            </div>
            <div :class="joinClass">
                <div>
                    <h3 class="text-secondary text-dark bold mb-2 ">Join Teams</h3>
                </div>
                <div>
                    <p class="text-secondary bold mb-2 font-size-15">Join online the TechWeek 2023 by MS Teams</p>
                </div>    
                
                <div>
                    <a  href="https://teams.microsoft.com/l/team/19%3a5435a5537501462d97c30c9ae8c1b752%40thread.tacv2/conversations?groupId=0a1e85e4-32ef-47d0-815f-8824df174731&tenantId=7015a19d-0dbb-4c31-8709-253cf07f631f://formfacade.com/public/104724340641572825850/all/form/1FAIpQLScSQN8ER2v2RdXc2ovVVUocA4yuALUyWZJG1cvO44YECKd4-w" target="_blank" >
                        <button type="button" class="btn btn-primary btn-lg">Join Teams</button>
                    </a>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
	export default {
        data() {
            return {
                customClass: "margin-top: 0%;",
                joinClass : "col-6 col-md-4 col-xl-5",
                joinTitle : "margin-top: 8.5%;"
            };
        },
        mounted() {

            //this.loadExternalScripts();
            window.addEventListener("resize", this.handleResize);
            this.handleResize();
            
        },
        methods: {
            
            handleResize() {
                // Get the window width
                const windowWidth = window.innerWidth;
                //console.log(windowWidth);
                // Change the class according the windows size

                if(windowWidth < 445){
                    this.joinClass = "col-12 col-md-4 col-xl-5";
                }
                else if(windowWidth >= 445 && windowWidth < 768){
                    this.joinClass = "col-6 col-md-6 col-xl-6";
                }else if(windowWidth >= 768 && windowWidth < 991){
                    this.joinClass = "col-6 col-md-6 col-xl-6";
                } 
                else if(windowWidth >= 992 && windowWidth < 1200){
                    this.joinClass = "col-6 col-md-5 col-xl-5";
                } 
                else{
                    this.joinClass = "col-6 col-md-4 col-xl-5";
                }

                if(windowWidth < 194){
                    this.joinTitle = "margin-top: 100%;";
                }
                else if(windowWidth >= 194 && windowWidth < 511){
                    this.joinTitle = "margin-top: 15%;";
                }
                
                else if(windowWidth >= 511 && windowWidth < 992){
                    this.joinTitle = "margin-top: 12%;";
                }
                else{

                    this.joinTitle = "margin-top: 8.5%;";

                }

                if (windowWidth < 186) {
                    this.customClass = "margin-top: 40%;";
                }
                if (windowWidth >= 186 && windowWidth < 270) {
                    this.customClass = "margin-top: 30%;";
                } else if (windowWidth >= 270 && windowWidth < 348) {
                    this.customClass = "margin-top: 20%;";
                } else if (windowWidth >= 348 && windowWidth < 432) {
                    this.customClass = "margin-top: 12%;";
                } else if (windowWidth >= 432 && windowWidth < 511) {
                    this.customClass = "margin-top: 8%;";
                } else if (windowWidth >= 511 && windowWidth < 768) {
                    this.customClass = "margin-top: 5%;";
                } else if (windowWidth >= 768 && windowWidth < 1200) {
                    this.customClass = "margin-top: 2%;";
                } else {
                    this.customClass = "margin-top: 0%;";
                }
            },
            beforeDestroy() {
                // Clean the listener of resize when the component is destroyed
                window.removeEventListener("resize", this.handleResize);
            },
        },
    }
</script>

<style scoped>
    h2 {
        padding-bottom: 25px;
        padding-top: 25px;
        color: #000000;
        font-weight: bold;
    }

    h3 {
        font-size:21px;
        line-height:normal;
        font-weight: bold;
    }

    .font-size-15 {
        font-size:15px;
        line-height:normal;
        font-weight: bold;
    }

    button {
        background-color: #135e94;
        font-size:16px;
        font-weight: bold;
        width: 134px;
        margin-top: 5px;
        margin-bottom: 15px;
    }
    button:hover {
        background-color: #155573;
    }
    img {
        padding: 15px;
    }

    #join{
        /* margin-top: 8.5%; */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: all ease-in-out 0.3s;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>