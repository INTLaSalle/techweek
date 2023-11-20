<template>
    <!-- ======= speakers Section ======= -->
    <section id="speakers" class="speakers">

        <div class="container">

            <div class="row">

                <div class="col-12 section-title text-center">
                    <h2 class="text-dark text-uppercase bold">{{$t('the_speakers')}}</h2>
                </div>

            </div>

            <div class="row">
                <div class="col-lg-12 d-flex justify-content-center">
                    <ul id="speakers-flters">
                        <li data-filter="*" class="filter-active">{{$t('all')}}</li>
                        <li data-filter=".filter-monday">{{$t('monday')}}</li>
                        <li data-filter=".filter-tuesday">{{$t('tuesday')}}</li>
                        <li data-filter=".filter-wednesday">{{$t('wednesday')}}</li>
                        <li data-filter=".filter-thursday">{{$t('thursday')}}</li>
                        <li data-filter=".filter-friday">{{$t('friday')}}</li>
                    </ul>
                </div>
            </div>

            <div class="row speakers-container">

            <!-- Start profile speakers -->

                <div class="col-lg-12 col-md-12 speakers-item filter-monday">

                    <div class="row">

                        <div :class="SpeakerClass">

                            <div class="col-12 text-center">

                                <img class="img-fluid imgSpeakerSize" :src="`../images/speakers/protectionPersonnel.jpg`" >

                            </div>

                            <!-- <div class="col-12 linkedin_button">

                                <div class="row">

                                    <div class=" mx-auto" :class="customClass">

                                        <div class="card mb-3 card-speaker" style="max-width: 540px;">

                                            <div class="row g-0 mx-auto">

                                                <div class="col-4 d-flex align-items-center">

                                                    <a href="#">
                                                        <img :src="`../images/speakers/linkedin.png`" alt="Logo" class="img-fluid">
                                                    </a>

                                                </div>

                                                 <div class="col-8">

                                                    <div class="card-body">

                                                        <p class="card-text"><small class="text-body-secondary card-speaker-letter">{{$t('follow')}}<br>Paola</small></p>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div> -->

                        </div>
                        <div :class="SpeakerClass">

                           <h1>Dr. Jaafar Fehmi (UQAC)</h1>
                           <p class="language"><strong>{{$t('language')}} :</strong> {{$t('english')}} / {{$t('french')}}</p>
                           <!-- <p>{{$t('paola_details')}}</p> -->

                        </div>

                    </div>

                </div>

            <!-- End profile speakers -->
                        

            <!-- Start profile speakers -->

                <div class="col-lg-12 col-md-12 speakers-item filter-monday">

                    <div class="row">

                        <div :class="SpeakerClass">

                           <h1>Joël Quimper (Microsoft)</h1>
                           <p class="language"><strong>{{$t('language')}}  :</strong> {{$t('english')}} / {{$t('french')}} </p>
                           <!-- <p>{{$t('emiliano_details')}}</p> -->
                           
                        </div>

                        <div :class="SpeakerClass">

                            <div class="col-12 text-center">

                                <img class="img-fluid imgSpeakerSize" :src="`../images/speakers/microsoftCyberdefense.jfif`">

                            </div>

                            <!-- <div class="col-12 linkedin_button">

                                <div class="row">

                                    <div class=" mx-auto" :class="customClass">

                                        <div class="card mb-3 card-speaker" style="max-width: 540px;">

                                            <div class="row g-0 mx-auto">

                                                <div class="col-4 d-flex align-items-center">

                                                    <a href="#">
                                                        <img :src="`../images/speakers/linkedin.png`" alt="Logo" class="img-fluid">
                                                    </a>

                                                </div>

                                                 <div class="col-8">

                                                    <div class="card-body">

                                                        <p class="card-text"><small class="text-body-secondary card-speaker-letter">{{$t('follow')}}<br>Emiliano</small></p>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div> -->

                        </div>

                    </div>

                </div>

            <!-- End profile speakers -->

            <!-- Start profile speakers -->

               <div class="col-lg-12 col-md-12 speakers-item filter-monday">

                    <div class="row">

                        <div :class="SpeakerClass">

                            <div class="col-12 text-center">

                                <img class="img-fluid imgSpeakerSize" :src="`../images/speakers/bradleyandrollins.jfif`">

                            </div>

                            <!-- <div class="col-12 linkedin_button">

                                <div class="row">

                                    <div class=" mx-auto" :class="customClass">

                                        <div class="card mb-3 card-speaker" style="max-width: 540px;">

                                            <div class="row g-0 mx-auto">

                                                <div class="col-4 d-flex align-items-center">

                                                    <a href="#">
                                                        <img :src="`../images/speakers/linkedin.png`" alt="Logo" class="img-fluid">
                                                    </a>

                                                </div>

                                                 <div class="col-8">

                                                    <div class="card-body">

                                                        <p class="card-text"><small class="text-body-secondary card-speaker-letter">{{$t('follow')}}<br>Riya</small></p>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div> -->

                        </div>
                        <div :class="SpeakerClass">

                           <h1>Bertrand Milot (Bradley & Rollins)</h1>
                           <p class="language"><strong>{{$t('language')}}  :</strong> {{$t('english')}} / {{$t('french')}}</p>
                           <!-- <p>{{$t('riya_details')}}</p> -->

                        </div>

                    </div>

                </div> 

            <!-- End profile speakers -->

            </div>

        </div>

    </section>
  <!-- End speakers Section -->
</template>

<script>
//import Isotope from 'isotope-layout';
import Swiper from 'swiper';
import 'swiper/css';

export default {
  data() {
    return {
      customClass: "col-4",
      SpeakerClass : "col-6",
    };
  },
  mounted() {

    this.loadExternalScripts();
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    
  },
  methods: {
    async loadExternalScripts() {

        const { default: Isotope } = await import('isotope-layout');
        if (process.client) {

            if (typeof Isotope === 'function') {

                
              const speakersIsotope = new Isotope('.speakers-container', {
                  itemSelector: '.speakers-item',
                  layoutMode: 'fitRows'
                });

            } else {
              console.error('Isotope no se cargó correctamente.');
            }
        }
    
      
        let speakersContainer = document.querySelector('.speakers-container');
        if (speakersContainer) {
          let speakersIsotope = new Isotope(speakersContainer, {
            itemSelector: '.speakers-item',
            layoutMode: 'fitRows'
          });

          //let speakersFilters = select('#speakers-flters li', true);
          const speakersFilters = document.querySelectorAll('#speakers-flters li');

            speakersFilters.forEach(filter => {
              filter.addEventListener('click', function(e) {
                e.preventDefault();
                speakersFilters.forEach(el => {
                  el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                speakersIsotope.arrange({
                  filter: this.getAttribute('data-filter')
                });
              });
            });
        }

      new Swiper('.speakers-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });
      
    },
    handleResize() {
      // Obtener el ancho de la ventana
      const windowWidth = window.innerWidth;
      //console.log(windowWidth);
      // Cambiar la clase en función del tamaño de la ventana

      if(windowWidth < 445){
        this.SpeakerClass = "col-12";
      }else{

        this.SpeakerClass = "col-6";

      }

      if (windowWidth < 500) {
        this.customClass = "col-10";
      } else if (windowWidth >= 500 && windowWidth < 768) {
        this.customClass = "col-8";
      } else if (windowWidth >= 768 && windowWidth < 991) {
        this.customClass = "col-6";
      } else {
        this.customClass = "col-4";
      }
    },
    beforeDestroy() {
        // Limpiar el oyente de eventos de redimensionamiento cuando el componente se destruye
        window.removeEventListener("resize", this.handleResize);
    },
  },
}
</script>


<style scoped>

/*--------------------------------------------------------------
# speakers
--------------------------------------------------------------*/
.speakers .speakers-item {
  margin-bottom: 30px;
}

.speakers #speakers-flters {
  padding: 0;
  margin: 0 auto 15px auto;
  list-style: none;
  text-align: center;
  border-radius: 50px;
  padding: 2px 15px;
}

.speakers #speakers-flters li {
  cursor: pointer;
  display: inline-block;
  padding: 8px 50px 10px 50px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 3px 10px 3px;
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
}

.speakers #speakers-flters li:hover,
.speakers #speakers-flters li.filter-active {
  background: #2d5b94;
}

.speakers #speakers-flters li:last-child {
  margin-right: 0;
}

.speakers .speakers-wrap {
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
}

.speakers .speakers-wrap::before {
  content: "";
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 30px;
  right: 30px;
  top: 30px;
  bottom: 30px;
  transition: all ease-in-out 0.3s;
  z-index: 2;
  opacity: 0;
}

.speakers .speakers-wrap .speakers-info {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.speakers .speakers-wrap .speakers-info::before {
  display: block;
  content: "";
  width: 48px;
  height: 48px;
  position: absolute;
  top: 35px;
  left: 35px;
  border-top: 3px solid #fff;
  border-left: 3px solid #fff;
  transition: all 0.5s ease 0s;
  z-index: 9994;
}

.speakers .speakers-wrap .speakers-info::after {
  display: block;
  content: "";
  width: 48px;
  height: 48px;
  position: absolute;
  bottom: 35px;
  right: 35px;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #fff;
  transition: all 0.5s ease 0s;
  z-index: 9994;
}

.speakers .speakers-wrap .speakers-info h4 {
  font-size: 20px;
  color: #fff;
  font-weight: 600;
}

.speakers .speakers-wrap .speakers-info p {
  color: #ffffff;
  font-size: 14px;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
}

.speakers .speakers-wrap .speakers-links {
  text-align: center;
  z-index: 4;
}

.speakers .speakers-wrap .speakers-links a {
  color: #fff;
  margin: 0 2px;
  font-size: 28px;
  display: inline-block;
  transition: 0.3s;
}

.speakers .speakers-wrap .speakers-links a:hover {
  color: #63eda3;
}

.speakers .speakers-wrap:hover::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
}

.speakers .speakers-wrap:hover .speakers-info {
  opacity: 1;
}

.speakers .speakers-wrap:hover .speakers-info::before {
  top: 15px;
  left: 15px;
}

.speakers .speakers-wrap:hover .speakers-info::after {
  bottom: 15px;
  right: 15px;
}

/*--------------------------------------------------------------
# speakers Details
--------------------------------------------------------------*/
.speakers-details {
  padding-top: 40px;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
}

.speakers-details .container {
  padding-top: 20px;
  padding-bottom: 40px;
}

.speakers-details .speakers-title {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}

.speakers-details .speakers-info {
  padding-top: 45px;
}

.speakers-details .speakers-info h3 {
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 20px;
}

.speakers-details .speakers-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.speakers-details .speakers-info ul li+li {
  margin-top: 10px;
}

.speakers-details .speakers-info p {
  font-size: 15px;
  padding: 15px 0 0 0;
}

@media (max-width: 992px) {
  .speakers-details .speakers-info {
    padding-top: 20px;
  }
}

.speakers-details .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.speakers-details .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.3);
}

.speakers-details .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #2d5b94;
}

.imgSpeakerSize{

    width: 63%;

}

.linkedin_button{

    margin-top: 3%;

}

.language{

    font-size: 17px;
    color:#73839C;
}

.card-speaker{
    background-color: #255f96;
}

.card-speaker-letter{
    color:white!important;
}
.speakers{
    margin-top: 3%;
    margin-bottom: 3%;
}
.section-title{
    margin-bottom: 3%;
}
</style>