<script>
import langSwitcher from './LangSwitcher.vue';

// const {localPath} = useLocalePath();

export default{
	components: {
		langSwitcher,
	},
}
</script>
<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
	  <div class="container-fluid">
	    
		<a class="navbar-brand" href="#">
      		
			<img :src="`../images/INTLogo.png`" class="img-fluid IntLogo" alt="INT LOGO">
    	</a>
	    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	      <span class="navbar-toggler-icon"></span>
	    </button>
	    <div class="collapse navbar-collapse" id="navbarSupportedContent">
	      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

					<li class="nav-item">
						<NuxtLink to="/" class="nav-link active" aria-current="page">{{$t('home')}}</NuxtLink>
						
					</li>

					<li class="nav-item">
						<NuxtLink to="/#carouselExample" class="nav-link">{{$t('about')}}</NuxtLink>
						
					</li>

					<!-- <li class="nav-item">
						<NuxtLink to="/#speakers" class="nav-link">{{$t('speakers')}}</NuxtLink>
						
					</li> -->

					<li class="nav-item">
						<NuxtLink to="/#Schedule" class="nav-link">{{$t('schedule')}}</NuxtLink>
						
					</li>

					<!-- <li class="nav-item">
	          <a class="nav-link" href="#">VENUE</a>
	        </li> -->

					<li class="nav-item">
						<NuxtLink to="/contact" class="nav-link">{{$t('join_contact_int')}}</NuxtLink>
					
					</li>

					<li class="nav-item">
						<NuxtLink to="https://bit.ly/techweek_2023" class="nav-link">{{$t('download_app')}}</NuxtLink>
					
					</li>
					

					<langSwitcher  />
					
				</ul>

			</div>
		</div>
	</nav>
</template>


<style scoped></style>