<template>
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
    
   
</style>