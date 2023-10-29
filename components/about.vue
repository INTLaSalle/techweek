<template>
    <div class="about">
        <div class="textbox">
            <h2>{{ $t('about_the_event')}}</h2><br/><br/>
            <p>
                {{ $t('about_message_1')}}
                
            </p>
            <p> {{ $t('about_message_2') }}
            </p>
            <p> {{ $t('about_message_3') }}
            </p>
        </div>

    </div>

</template>

<script>
    //const localPath= useLocalPath();
</script>

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