<template>

    <section id="contact">
        <div class="row gy-4 justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <h2 class=" text-secondary text-dark text-uppercase bold mb-2 text-center">Contact Us</h2>
            </div>
        </div>

        <div class="row gy-4 justify-content-md-center justify-content-center">
            <div :class="contactClass">
                <div>
                    <h3 class="text-secondary text-dark bold mb-2 ">Get in Touch</h3>
                </div>
                <div class="margin-bottom-20">
                    <p class="text-secondary bold mb-2 font-size-15">Send us a message & we'll get back to you shortly.</p>
                </div>
                <div class="margin-bottom-20">
                    <p class="text-secondary bold mb-2 font-size-15">Collège LaSalle</p>
                    <p class="text-secondary bold mb-2 font-size-15">2000 Rue Sainte-Catherine Ouest</p>
                    <p class="text-secondary bold mb-2 font-size-15">Montréal QC H3H 2T2</p>
                </div>
                <div class="margin-bottom-20">
                    <p class="text-secondary bold mb-2 font-size-15">
                        <a class="text-secondary bold mb-2 font-size-15" href="mailto:intlasalle2022@gmail.com">intlasalle2022@gmail.com</a>
                    </p>
                </div> 
                <div class="row">
                    <p class="text-secondary bold mb-2 font-size-15">
                        <!-- <a class="text-secondary bold mb-2 font-size-15" href="mailto:intlasalle2022@gmail.com">intlasalle2022@gmail.com</a> -->
                        <a href="https://www.facebook.com/profile.php?id=100087291936912" target="_blank">
                            <img alt="Facebook" :src="`../images/contact/icon-facebook.svg`" style="width: 25px; height: 25px; object-fit: cover;">
                        </a>
                        <a href="https://www.instagram.com/int.lasalle/" target="_blank">
                            <img alt="Instagram" :src="`../images/contact/icon-instagram.svg`" style="width: 25px; height: 25px; object-fit: cover;">
                        </a>
                        
                    </p>
                </div>
            </div>
            <div :class="contactClass">
                
                <form class="row g-3 needs-validation" novalidate action="https://formsubmit.co/7b3e4e07fd433e8ae806c5313ae90b8f" method="post">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" id="thankYouPage" name="_next" value="http://localhost:3000/thankyou">
                    <input type="hidden" name="_subject" value="An user have sent a message from TechWeek 2023 WebSite!">
                    <input type="hidden" name="_template" value="table">
                    <div class="col-md-6">
                        <label for="validationCustom01" class="form-label">First name</label>
                        <input type="text" class="form-control" id="validationCustom01" placeholder="First Name" name="firstName" required>
                        <div class="valid-feedback feedback-pos">
                        Looks good!
                        </div>
                        <div class="invalid-feedback feedback-pos">
                        Please provide your First Name.
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom02" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="validationCustom02" placeholder="Last Name" name="lastName" required>
                        <div class="valid-feedback feedback-pos">
                        Looks good!
                        </div>
                        <div class="invalid-feedback feedback-pos">
                        Please provide your Last Name.
                        </div>
                    </div>
                    <div class="col-md-12">
                        <label for="validationCustom03" class="form-label">Email</label>
                        <input type="email" name="email" class="form-control" id="validationEmail" placeholder="example@email.com" required>
                        <div class="invalid-feedback feedback-pos">
                        Please provide your email.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="validationTextarea" class="form-label">Message</label>
                        <textarea name="message" class="form-control" id="validationTextarea" placeholder="Enter a message" required></textarea>
                        <div class="valid-feedback feedback-pos">
                        Looks good!
                        </div>
                        <div class="invalid-feedback feedback-pos">
                            Please enter a message.
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </section>

</template>

<script type="text/javascript">
	
    export default defineComponent({
        data() {
            return {
                contactClass : "col-6 col-md-5 col-xl-5",
            };
        },
        
        mounted() {
            (() => {
                'use strict';

                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                const forms = document.querySelectorAll('.needs-validation');

                // Loop over them and prevent submission
                Array.from(forms).forEach(form => {
                    form.addEventListener('submit', event => {
                        if (!form.checkValidity()) {
                            event.preventDefault();
                            event.stopPropagation();
                        }

                        form.classList.add('was-validated');

                    }, false);
                });
            })();

            document.getElementById("thankYouPage").value = window.location.origin + "/thankyou";

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
                    this.contactClass = "col-12 col-md-4 col-xl-5";
                }
                else if(windowWidth >= 445 && windowWidth < 768){
                    this.contactClass = "col-6 col-md-6 col-xl-6";
                }else if(windowWidth >= 768 && windowWidth < 991){
                    this.contactClass = "col-6 col-md-6 col-xl-6";
                } 
                else if(windowWidth >= 992 && windowWidth < 1200){
                    this.contactClass = "col-6 col-md-5 col-xl-5";
                } 
                else{
                    this.contactClass = "col-6 col-md-4 col-xl-5";
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
        padding-bottom: 35px;
        padding-top: 50px;
        color: #000000;
        font-weight: bold;
    }

    h3 {
        font-size:21px;
        line-height:normal;
        font-weight: bold;
    }

    .margin-bottom-20 {
        margin-bottom: 20px; 
    }

    .font-size-15 {
        font-size:15px;
        line-height:normal;
    }

    div .margin-bottom-20 p a {
        text-decoration: none;
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

    #contact{
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