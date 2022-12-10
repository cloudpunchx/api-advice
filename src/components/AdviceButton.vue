<template>
    <div>
        <button @click="getAdvice">Get Advice!</button>
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
import router from '@/router';

    export default {
        name: "AdviceButton",
        methods: {
            getAdvice() {
                axios.request({
                    url: "https://api.adviceslip.com/advice",
                    method: "GET",
                }).then((response)=>{
                    router.push("/Advice");
                    cookies.set(`advice`, response.data.slip.advice);
                }).catch(()=>{
                    document.querySelector(`div`).insertAdjacentHTML(`beforeend`, 
                                                                    `<p>No advice found, try again.</p>`)
                })
            }
        },
    }
</script>

<style scoped>

</style>