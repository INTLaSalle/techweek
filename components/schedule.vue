<template>

<!-- 
<link rel="stylesheet" href="test.css">
<link href="https://fonts.cdnfonts.com/css/now" rel="test.css">

-->

<!-- Tab links -->
<div class="tab">
  <button class="tablinks" @click="openWeekday(event, 'Monday')">Monday</button>
  <button class="tablinks" @click="openWeekday(event, 'Tuesday')">Tuesday</button>
  <button class="tablinks" @click="openWeekday(event, 'Wednesday')">Wednesday</button>
  <button class="tablinks" @click="openWeekday(event, 'Thursday')">Thursday</button>
  <button class="tablinks" @click="openWeekday(event, 'Friday')">Friday</button>
</div>

<!-- Tab content -->
<div id="Monday" class="tabcontent">
  	<div class="timePresentation">
		<div class="time">
  	  		<span>10:00 - 12:00</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Monday Schedule<br/></span>
  			<span class="description">By Anon Anoonimouns<br/></span>
  			<span class="description">Room: That one<br/></span>  		
  		</div>
  	</div>

  	<div class="timePresentation">
  		<div class="time">
  	  		<span>12:00 - 12:30</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Break</span>  		
  		</div>
  	</div>

   	<div class="timePresentation">
	  	<div class="time">
  	  		<span>12:30 - 14:00</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Creating a Discord Bot<br/></span>
  			<span class="description">By Anon Anoonimouns<br/></span>
  			<span class="description">Room: That one<br/></span>  		
  		</div>
  	</div>

  	<div class="timePresentation">
  		<div class="time">
  	  		<span>14:00 - 14:15</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Break</span>  		
  		</div>
  	</div>

  	<div class="timePresentation">
	  	<div class="time">
  	  		<span>14:15 - 15:15</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Language Carbon<br/></span>
  			<span class="description">By Anon Anoonimouns<br/></span>
  			<span class="description">Room: That one<br/></span>  		
  		</div>
  	</div>
</div>

<div id="Tuesday" class="tabcontent">
 <div class="timePresentation">
		<div class="time">
  	  		<span>10:00 - 12:00</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Tuesday Schedule<br/></span>
  			<span class="description">By Anon Anoonimouns<br/></span>
  			<span class="description">Room: That one<br/></span>  		
  		</div>
  	</div>

  	<div class="timePresentation">
  		<div class="time">
  	  		<span>12:00 - 12:30</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Break</span>  		
  		</div>
  	</div>

   	<div class="timePresentation">
	  	<div class="time">
  	  		<span>12:30 - 14:00</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Creating a Discord Bot<br/></span>
  			<span class="description">By Anon Anoonimouns<br/></span>
  			<span class="description">Room: That one<br/></span>  		
  		</div>
  	</div>

  	<div class="timePresentation">
  		<div class="time">
  	  		<span>14:00 - 14:15</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Break</span>  		
  		</div>
  	</div>

  	<div class="timePresentation">
	  	<div class="time">
  	  		<span>14:15 - 15:15</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Language Carbon<br/></span>
  			<span class="description">By Anon Anoonimouns<br/></span>
  			<span class="description">Room: That one<br/></span>  		
  		</div>
  	</div>
</div>

<div id="Wednesday" class="tabcontent">
 <div class="timePresentation">
		<div class="time">
  	  		<span>10:00 - 12:00</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Wednesday Schedule<br/></span>
  			<span class="description">By Anon Anoonimouns<br/></span>
  			<span class="description">Room: That one<br/></span>  		
  		</div>
  	</div>

  	<div class="timePresentation">
  		<div class="time">
  	  		<span>12:00 - 12:30</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Break</span>  		
  		</div>
  	</div>

   	<div class="timePresentation">
	  	<div class="time">
  	  		<span>12:30 - 14:00</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Creating a Discord Bot<br/></span>
  			<span class="description">By Anon Anoonimouns<br/></span>
  			<span class="description">Room: That one<br/></span>  		
  		</div>
  	</div>

  	<div class="timePresentation">
  		<div class="time">
  	  		<span>14:00 - 14:15</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Break</span>  		
  		</div>
  	</div>
 
  	<div class="timePresentation">
	  	<div class="time">
  	  		<span>14:15 - 15:15</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Language Carbon<br/></span>
  			<span class="description">By Anon Anoonimouns<br/></span>
  			<span class="description">Room: That one<br/></span>  		
  		</div>
  	</div>
</div>

<div id="Thursday" class="tabcontent">
 <div class="timePresentation">
		<div class="time">
  	  		<span>10:00 - 12:00</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Thursday Schedule<br/></span>
  			<span class="description">By Anon Anoonimouns<br/></span>
  			<span class="description">Room: That one<br/></span>  		
  		</div>
  	</div>
  
  	<div class="timePresentation">
  		<div class="time">
  	  		<span>12:00 - 12:30</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Break</span>  		
  		</div>
  	</div>
  
   	<div class="timePresentation">
	  	<div class="time">
  	  		<span>12:30 - 14:00</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Creating a Discord Bot<br/></span>
  			<span class="description">By Anon Anoonimouns<br/></span>
  			<span class="description">Room: That one<br/></span>  		
  		</div>
  	</div>
  
  	<div class="timePresentation">
  		<div class="time">
  	  		<span>14:00 - 14:15</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Break</span>  		
  		</div>
  	</div>
  
  	<div class="timePresentation">
	  	<div class="time">
  	  		<span>14:15 - 15:15</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Language Carbon<br/></span>
  			<span class="description">By Anon Anoonimouns<br/></span>
  			<span class="description">Room: That one<br/></span>  		
  		</div>
  	</div>
</div>

<div id="Friday" class="tabcontent">
 <div class="timePresentation">
		<div class="time">
  	  		<span>10:00 - 12:00</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Friday Schedule<br/></span>
  			<span class="description">By Anon Anoonimouns<br/></span>
  			<span class="description">Room: That one<br/></span>  		
  		</div>
  	</div>
  
  	<div class="timePresentation">
  		<div class="time">
  	  		<span>12:00 - 12:30</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Break</span>  		
  		</div>
  	</div>
  
   	<div class="timePresentation">
	  	<div class="time">
  	  		<span>12:30 - 14:00</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Creating a Discord Bot<br/></span>
  			<span class="description">By Anon Anoonimouns<br/></span>
  			<span class="description">Room: That one<br/></span>  		
  		</div>
  	</div>
  
  	<div class="timePresentation">
  		<div class="time">
  	  		<span>14:00 - 14:15</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Break</span>  		
  		</div>
  	</div>
  
  	<div class="timePresentation">
	  	<div class="time">
  	  		<span>14:15 - 15:15</span>
  		</div>
  		<div class="presentation">
  	 		<span class="title">Language Carbon<br/></span>
  			<span class="description">By Anon Anoonimouns<br/></span>
  			<span class="description">Room: That one<br/></span>  		
  		</div>
  	</div>
</div>

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

.tab {
  display: flex;
  justify-content: center;
  overflow: hidden;
  border: 2px solid #2d5b94;;
  background-color: #f1f1f1;
  font-family: 'Now';
  padding: 0;
  margin: 0;
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
  background-color: #ccc;
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
  border-bottom: 1px solid #2d5b94;
}

.presentation{
  padding: 20px 10px;
  width: 100%;
  text-align: center;
  color: #2d5b94;
  border-left: 1px solid #2d5b94;
  border-bottom: 1px solid #2d5b94;
}

.title{
  font-size: 20px;
  font-weight: bold;
}

.description{
  font-style: italic;
}

</style>