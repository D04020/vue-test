import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/home/Home.vue'
const routes = [
	{
		path:'/',
		name:'home',
		component:Home
	},
	{
		path:'/city',
		name:'city',
		component:()=>import('../components/city/City.vue')
	},
	{
		path:'/detail',
		name:'detail',
		component:()=>import('../components/detail/Detail.vue')
	},
	{
		path:'/banner',
		name:'banner',
		component:()=>import('../components/detail/Banner.vue')
	}
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
