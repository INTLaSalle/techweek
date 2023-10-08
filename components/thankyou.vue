<template>

    <section id="thankyou">
        <div class="col">
            <div class="col-md-8 offset-md-2">
                <h1>Thanks!</h1>
                <p>The form was submitted successfully. We will return to you by email as soon as possible. 
                    <p>Return to original site: 
                        <a id="originHomePage" class="links" href="https://localhost:3000">https://localhost:3000</a>
                    </p>
                </p>
            </div>
        </div>
    </section>

</template>

<script>
	
    export default defineComponent({
        mounted() {
            document.getElementById("originHomePage").href = window.location.origin;
            document.getElementById("originHomePage").innerHTML = window.location.origin;
        },
    });
</script>

<style scoped>
    html, body {
            color: #636b6f;
            font-family: 'Work Sans', sans-serif;
        }

        .links > a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        .col {
            margin-top: 80px;
        }

        .col p {
            font-size: 17px;
            color: black;
        }

        .col .col-md-8 {
            /* background-color: #c4e3e4; */
            background-color: #add8eb;
            /* background-color: #eff9fd; */
            padding: 40px;
        }
</style>