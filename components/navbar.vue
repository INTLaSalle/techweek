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
						<NuxtLink to="/" class="nav-link active" aria-current="page">HOME</NuxtLink>
						<!-- <a class="nav-link active" aria-current="page" href="/">HOME</a> -->
					</li>

					<li class="nav-item">
						<NuxtLink to="/#carouselExample" class="nav-link">ABOUT</NuxtLink>
						<!-- <a class="nav-link" :href="localePath('/#carouselExample')">ABOUT</a> -->
					</li>

					<li class="nav-item">
						<NuxtLink to="/#speakers" class="nav-link">SPEAKERS</NuxtLink>
						<!-- <a class="nav-link" href="/#speakers">SPEAKERS</a> -->
					</li>

					<li class="nav-item">
						<NuxtLink to="/#schedule" class="nav-link">SCHEDULE</NuxtLink>
						<!-- <a class="nav-link" href="/#Schedule">SCHEDULE</a> -->
					</li>

					<!-- <li class="nav-item">
	          <a class="nav-link" href="#">VENUE</a>
	        </li> -->

					<li class="nav-item">
						<NuxtLink to="/contact" class="nav-link">JOIN / CONTACT INT</NuxtLink>
						<!-- <a class="nav-link" href="/contact">JOIN / CONTACT INT</a> -->
					</li>

					<li class="nav-item">
						<NuxtLink to="#" class="nav-link">DOWNLOAD APP</NuxtLink>
						<!-- <a class="nav-link" href="#">DOWNLOAD APP</a> -->
					</li>
					<langSwitcher />

				</ul>

			</div>
		</div>
	</nav>
</template>


<style scoped></style>