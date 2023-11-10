<template>

<!-- 
<link rel="stylesheet" href="test.css">
<link href="https://fonts.cdnfonts.com/css/now" rel="test.css">

-->
<h2 class="scheduleTitle">{{$t('the_schedule')}}</h2>
  <section id="Schedule">
    <!-- Tab links -->
    <div class="tab">
      <button class="tablinks" @click="openWeekday($event, 'Monday')">{{$t('monday')}}</button>
      <button class="tablinks" @click="openWeekday($event, 'Tuesday')">{{$t('tuesday')}}</button>
      <button class="tablinks" @click="openWeekday($event, 'Wednesday')">{{$t('wednesday')}}</button>
      <button class="tablinks" @click="openWeekday($event, 'Thursday')">{{$t('thursday')}}</button>
      <button class="tablinks" @click="openWeekday($event, 'Friday')">{{$t('friday')}}</button>
    </div>

    <!-- Tab content -->
    <div id="Monday" class="tabcontent">
      	<div class="timePresentation">
    		<div class="time">
      	  		<span>10:00 - 11:00 </span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">Protection des renseignements personnels<br/></span>
      			<span class="description">Conférencier: Dr. Jaafar Fehmi (UQAR)<br/></span>
      			<span class="description">{{ $t('room') }}: Jean Paul Morin<br/></span>  		
      		</div>
      	</div>

		<div class="timePresentation">
      		<div class="time">
      	  		<span>11:00 - 12:00</span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">Microsoft et son centre de cyberdéfense - Comment débuter son SOC</span>
				<span class="description">Conférencier: Joël Qumper (Microsoft) <br/></span>
      			<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  
      		</div>
      	</div>

      	<div class="timePresentation">
      		<div class="time">
      	  		<span>12:00 - 13:30</span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">Panel -Cyber guardiens : Explorez la Superpuissance de la Cybersécurité et des Données</span>
				<span class="description">Panelistes: Joël Qumper (Microsoft), Dr. Jaafar Fehmi (UQAR), Bertrand Milot (Bradley & Rollins)<br/></span>
				<span class="description">Animateur du panel: Patrick Carbonneau <br/></span>
      			<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  
      		</div>
      	</div>

		<div class="timePresentation">
      		<div class="time">
      	  		<span>14:00 - 15:00</span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">Sous le capot de la cybercriminalité. Le sujet traitera des différentes étapes de monétisation des organisations par les cybercriminels </span>
				<span class="description">Conférencier: Bertrand Milot (Bradley & Rollins) <br/></span>
      			<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  
      		</div>
      	</div>


    </div>

    <div id="Tuesday" class="tabcontent">
		<div class="timePresentation">
    		<div class="time">
      	  		<span>14:00 - 15:00 </span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">Intelligence artificielle : faites partie des innovateurs, pas des récalcitrants!<br/></span>
      			<span class="description">Conférencier: pascale.berube (vooban)<br/></span>
      			<span class="description">{{ $t('room') }}: Jean Paul Morin<br/></span>  		
      		</div>
      	</div>
    </div>

    <div id="Wednesday" class="tabcontent">
		<div class="timePresentation">
    		<div class="time">
      	  		<span>10:00 - 11:00</span>
      		</div>
      		<div class="presentation">
      	 		<span class="title"> Ali, une application concrète de l’IA moderne<br/></span>
      			<span class="description">Conférencier: Etienne Bolduc et Charles Cousyn (OPTANIA)<br/></span>
      			<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  		
      		</div>
      	</div>

		  <div class="timePresentation">
    		<div class="time">
      	  		<span>11:00 - 12:00</span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">L'IA générative, ami ou ennemi?<br/></span>
      			<span class="description">Conférencier: Guillaume Bolduc (MOOV AI)<br/></span>
      			<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  		
      		</div>
      	</div>

      	<div class="timePresentation">
      		<div class="time">
      	  		<span>12:00 - 13:30</span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">Panel - L'Intelligence Artificielle : Possibilités et Défis</span>
				<span class="description">Panelistes: Etienne Bolduc et Charles Cousyn (OPTANIA), Guillaume Petitclerc (MOOV AI), Sebastien Bernard (GOLOGIC)<br/></span>
				<span class="description">Animateur du panel: Patrick Carbonneau<br/></span>
      			<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  
      		</div>
      	</div>

		  <div class="timePresentation">
      		<div class="time">
      	  		<span>14:00 - 15:00</span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">Journée carrière</span>
				<!-- <span class="description"><br/></span> -->
      			<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  
      		</div>
      	</div>
    </div>

    <div id="Thursday" class="tabcontent">
		
			<div class="timePresentation">
      			<div class="time">
      	  			<span>11:00 - 12:00</span>
      			</div>
      			<div class="presentation">
      	 			<span class="title">Chatbot conversationnel pour le retail - Retail chatbot the story </span>
					<span class="description">Conférencier: Steve Desjarlais (Heyday AI)<br/></span>
      				<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  
      			</div>
      		</div>

		  	<div class="timePresentation">
      			<div class="time">
      	  			<span>12:00 - 13:30</span>
      			</div>
      			<div class="presentation">
      	 			<span class="title">Panel - L'Entrepreneuriat Technologique et l'Innovation </span>
					<span class="description">Panelistes: Steve Desjarlais (Heyday AI), Jon Yu (Mythologi.es)<br/></span>
					<span class="description">Animateur du panel: JF Ouellette<br/></span>
      				<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  
      			</div>
      		</div>
    </div>

    <div id="Friday" class="tabcontent">
		<div class="timePresentation">
    		<div class="time">
      	  		<span>10:00 - 12:30</span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">Atelier "Réalité augmentée (10h à 12h30) <br/></span>
      			<span class="description">Conférencier: Jon Yu (Mythologi.es)<br/></span>
      			<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  		
      		</div>
      	</div>

		  <div class="timePresentation">
    		<div class="time">
      	  		<span>??:?? - ??:??</span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">LAN PARTY<br/></span>
      			<!-- <span class="description">Conférencier: Jon Yu (Mythologi.es)<br/></span> -->
      			<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  		
      		</div>
      	</div>
    
    </div>

  </section>

</template>



<script>

    export default {
        methods: {
            openWeekday: function(evt,weekDay){
                        // Declared variables
                        var i, tabcontent, tablinks;

                        // Get all elements with class="tabcontent" and hide them
                        tabcontent = document.getElementsByClassName("tabcontent");
                            for (i = 0; i < tabcontent.length; i++) {
                                tabcontent[i].style.display = "none";
                            }

                        // Get all elements with class="tablinks" and remove the class "active"
                        tablinks = document.getElementsByClassName("tablinks");
                            for (i = 0; i < tablinks.length; i++) {
                                tablinks[i].className = tablinks[i].className.replace(" active", "");
                            }

                        // Show the current tab, and add an "active" class to the button that opened the tab
                        document.getElementById(weekDay).style.display = "block";
                        evt.currentTarget.className += " active";
            }
        }
    }
</script>

<style scoped>

/* Style the tab */

@import url('https://fonts.cdnfonts.com/css/now');

body{
  font-family: 'Now';
}
.scheduleTitle{
	--bs-text-opacity: 1;
	color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
	text-transform: uppercase !important;
	text-align: center;
	margin-bottom: 20px;
}

#Schedule {
	margin: 10px;
	padding: 0px;
	box-shadow: 10px 10px 10px rgb(45, 91, 148,0.8);
}

.tab {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  overflow: hidden;
  border: 2px solid #2d5b94;;
  background-color: #f1f1f1;
  font-family: 'Now';
  padding: 0;
  margin: 0;
  font-size: 2vw;
}

.dateDivider{
  margin:0;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: #2d5b94;
  color: #FFFFFF;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-weight: bold;
  width:100%;
  font-family: 'Now', sans-serif;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #2d5b94c9;
}

/* Create an active/current tablink class */
.tab button:active {
  background-color: #2d5b94c9;
}

.active{
  background-color: rgb(45, 91, 148,0.8)!important;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 0;
  border: 2px solid #2d5b94;;
  border-top: none;
}

#Monday{
  display:block;
}

/* Styling internally */
.timePresentation {
  display: flex;
  padding: 0;
}

.timePresentation:hover{
	background-color: rgb(90,143,177,0.3);
	transition: 0.3s;
}

.time{
  padding: 10px 52px;
  font-size: 20px;
  color: #2d5b94;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #2d5b94;
}

.presentation{
  display: flex;
  flex-direction: column;
  align-items:middle;
  justify-content: center;
  padding: 20px 10px;
  width: 100%;
  text-align: center;
  color: #2d5b94;
  border: 1px solid #2d5b94;
  margin: 0;
  position: relative;
}

.title{
  font-size: 20px;
  font-weight: bold;
}

.description{
  font-style: italic;
}

@media (max-width: 600px) {
	
	.tab {
		display: grid;
		grid-template-columns: 20% 20% 20% 20% 20%;
	}

	.tab button {
		width: 100%;
		padding: 7px;
	}

	.time {
		writing-mode: vertical-rl;
		transform: rotateZ(180deg);
	}


	
}

</style>