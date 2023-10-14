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

    <div class="about">
        <div class="textbox">
            <h2>ABOUT THE EVENT</h2><br/><br/>
            <p>
                TechWeek is an institutional event of LaSalle College, promoted by the Computer Science programs 
                which aim to bring together students, teachers, industry professionals, collaborators and the community 
                in general around conferences, activities, workshops and mini-courses on topics from the IT world. 
                
            </p>
            <p> Five remarkable editions have passed by, each more extraordinary than the last. And we're just 
                getting started! TechWeek is not just an event—it's a tradition, a celebration, 
                and an unforgettable experience that our college community eagerly awaits.
            </p>
            <p> Join us as we push the boundaries of what's possible in the world of IT. Mark your calendars, spread 
                the word, and get ready for an electrifying week of tech wonders at LaSalle College's TechWeek!
            </p>
        </div>

    </div>

</template>

<style scoped>
    #carouselExample {
        display: flex;  
        justify-content: center;
        width: 100%;
        margin-top:20px;
        overflow: hidden;
           
    }
    .carousel-inner {
           
        justify-content: space-around;
        width: 60%;
        height: auto;
           
    }
    .about {  
        display: flex;
        justify-content: center;
        width: 100%; 
        text-align: center;
        margin: 20px;
    }
    .textbox {
        
        width: 80%;
        margin: auto;
        text-align: justify;
        border: 1px solid #2d5b94;
        background-color: #2d5b94;
        padding:20px;
        margin: 20px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.7);
        
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.1); /* Increase the size by 10% at the peak of the pulse */
        }
    }   

    .textbox:hover {
       /* create an animation when hovering over the box */
        animation: pulse 1s;
    }
    
    .textbox H2{
        color: white;
        text-align: center;
    }
    .textbox p{
        color: white;
        text-align: justify;
    }
    
    #carouselExample{
        margin-top: 8%;
    }
</style>