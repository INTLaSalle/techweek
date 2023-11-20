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
      	  		<span>09:30 - 10:00 </span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">{{ $t('opening_ceremony') }}<br/></span>
      			<span class="description">Abdelhak Fennouh, Mohamed Zeroug , Andrew Golden ({{$t('IT_teachers')}})<br/></span>
      			<span class="description">{{ $t('room') }}: Jean Paul Morin<br/></span>  		
      		</div>
      	</div>

		
		<div class="timePresentation">
    		<div class="time">
      	  		<span>10:00 - 11:00 </span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">{{ $t('cyber_security') }}<br/></span>
      			<span class="description">{{ $t('guest_speaker') }}: Dr. Jaafar Fehmi (UQAC)<br/></span>
      			<span class="description">{{ $t('room') }}: Jean Paul Morin<br/></span>  		
      		</div>
      	</div>

		

      	<div class="timePresentation">
      		<div class="time">
      	  		<span>12:00 - 13:30</span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">{{ $t('panel_cyber_guardians') }}</span>
				<span class="description">{{$t('panelistes')}}: Dr. Jaafar Fehmi (UQAC), Bertrand Milot (Bradley & Rollins), Eric Briand ou Marc Bourget (LCI 
                 Education)<br/></span>
				<span class="description">{{$t('panel_facilitator')}}: Patrick Carbonneau (LCI LX studio)<br/></span>
      			<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  
      		</div>
      	</div>

		<div class="timePresentation">
      		<div class="time">
      	  		<span>14:00 - 15:00</span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">{{$t('title_cybercrime')}} </span>
				<span class="description">{{$t('guest_speaker')}}: Bertrand Milot (Bradley & Rollins) <br/></span>
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
      	 		<span class="title">{{$t('title_artificial')}}<br/></span>
      			<span class="description">{{$t('guest_speaker')}}: Alexandre Gervais (vooban)<br/></span>
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
      	 		<span class="title"> {{$t('ali_ai_application')}}<br/></span>
      			<span class="description">{{$t('guest_speaker')}}: Etienne Bolduc et Charles Cousyn (OPTANIA)<br/></span>
      			<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  		
      		</div>
      	</div>

		  <div class="timePresentation">
    		<div class="time">
      	  		<span>11:00 - 12:00</span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">{{ $t('generative_ai') }}<br/></span>
      			<span class="description">{{$t('guest_speaker')}}: Guillaume Bolduc (MOOV AI)<br/></span>
      			<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  		
      		</div>
      	</div>

      	<div class="timePresentation">
      		<div class="time">
      	  		<span>12:00 - 13:30</span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">{{ $t('panel_artificial_intelligence') }}</span>
				<span class="description">{{$t('panelistes')}}: Etienne Bolduc {{$t('and')}} Charles Cousyn (OPTANIA), Guillaume Petitclerc (MOOV AI), Sebastien Bernard (GOLOGIC)<br/></span>
				<span class="description">{{$t('panel_facilitator')}}: Patrick Carbonneau (LCI LX studio)<br/></span>
      			<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  
      		</div>
      	</div>

		  <div class="timePresentation">
      		<div class="time">
      	  		<span>14:00 - 16:30</span>
      		</div>
      		<div class="presentation">
      	 		<span class="title">{{$t('career_day')}}</span>
				<span class="description">{{$t('plaza')}}<br/></span>
      			<!-- <span class="description">{{$t('room')}}: <br/></span>   -->
      		</div>
      	</div>
    </div>

    <div id="Thursday" class="tabcontent">
		
			<div class="timePresentation">
      			<div class="time">
      	  			<span>09:00 - 10:00</span>
      			</div>
      			<div class="presentation">
      	 			<span class="title">{{$t('microsoft_cybersecurity')}}</span>
					<span class="description">{{$t('guest_speaker')}}: Joël Quimper (Microsoft)<br/></span>
      				<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  
      			</div>
      		</div>

			  <div class="timePresentation">
      			<div class="time">
      	  			<span>10:00 - 11:00</span>
      			</div>
      			<div class="presentation">
      	 			<span class="title">{{ $t('new_lci') }}</span>
					<span class="description">{{$t('guest_speaker')}}: Eric Briand (LCI Education)<br/></span>
      				<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  
      			</div>
      		</div>

			<div class="timePresentation">
      			<div class="time">
      	  			<span>11:00 - 12:00</span>
      			</div>
      			<div class="presentation">
      	 			<span class="title">{{ $t('chatbot_conversation') }}</span>
					<span class="description">{{$t('guest_speaker')}}: Steve Desjarlais (Heyday AI)<br/></span>
      				<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  
      			</div>
      		</div>

		  	<div class="timePresentation">
      			<div class="time">
      	  			<span>12:00 - 13:30</span>
      			</div>
      			<div class="presentation">
      	 			<span class="title">{{$t('panel_technological')}}</span>
					<span class="description">{{$t('panelistes')}}: Steve Desjarlais (Heyday AI), Jon Yu (Mythologi.es), Eric Briand (LCI Education)<br/></span>
					<span class="description">{{$t('panel_facilitator')}}: JF Ouellette ({{ $t('teacher_lasalle') }})<br/></span>
      				<span class="description">{{$t('room')}}: Jean Paul Morin<br/></span>  
      			</div>
      		</div>

			
		  	<div class="timePresentation">
      			<div class="time">
      	  			<span>13:30 - 14:30</span>
      			</div>
      			<div class="presentation">
      	 			<span class="title">{{$t('leadership')}}</span>
					<span class="description">{{$t('guest_speaker')}}: Jean-Luc SansCartier (Google Executive)<br/></span>
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
      	 		<span class="title">{{$t('augmented_reality')}}<br/></span>
      			<span class="description">{{$t('guest_speaker')}}: Jon Yu (Mythologi.es)<br/></span>
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