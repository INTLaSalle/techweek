<template>
    
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="@/images/imagetechweek.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="@/images/image2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="@/images/image3.jpg" class="d-block w-100" alt="...">
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
        <h2>About Us</h2>
        <p>
            TechWeek is an institutional event of LaSalle College, promoted by the Computer Science programs 
            which aim to bring together students, teachers, industry professionals, collaborators and the community 
            in general around conferences, activities, workshops and mini-courses on topics from the IT world. 
            The past five editions have been so successful that TechWeek has become an awaited yearly event that 
            our college community looks forward to organizing and promoting as part of its official educational 
            projects.
        </p>
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
        text-align: center;
        margin: 20px;
    }
    

</style>