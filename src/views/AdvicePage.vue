<template>
    <div>
        <button @click="sendHome">Back to Home</button>
        <h1>Your Advice:</h1>
        <h2>{{advice}}</h2>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
import router from '@/router';

    export default {
        name: "AdvicePage",
        data() {
            return {
                advice: ""
            }
        },
        methods: {
            sendHome(){
                router.push("/");
            },
            displayAdvice(){
                let advice = cookies.get(`advice`);
                if (advice == undefined){
                    this.advice = "Error: no advice found"
                } else{
                    this.advice = advice;
                }
            }
        },
        mounted () {
            this.displayAdvice();
        },
    }
</script>

<style scoped>

</style>