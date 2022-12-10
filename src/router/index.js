import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage'
import AdvicePage from '@/views/AdvicePage'


Vue.use(VueRouter)

const routes = [
{
path: "/",
component: HomePage
},
{
  path: "/advice",
  component: AdvicePage
},
]

const router = new VueRouter({
  routes
})

export default router
