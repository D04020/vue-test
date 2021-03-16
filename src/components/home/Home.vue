<template>
	<div>
		<Banner></Banner>
		<Icons></Icons>
		<Tabs></Tabs>
		<Scroll></Scroll>
		<Swiper></Swiper>
		<Seckill :spikeList="spikeList"></Seckill>
		<Like :likeList='likeList'></Like>
		<Footer></Footer>
	</div>
</template>

<script>
	import Banner  from './Banner';
	import Icons  from './Icons';
	import Tabs  from './Tabs';
	import Scroll  from './Scroll';
	import Swiper  from './Swiper';
	import Seckill  from './Seckill';
	import Like  from './Like';
	import Footer  from './Footer';
	import {mapState} from 'vuex'
	export default{
		components:{
			Banner,
			Icons,
			Tabs,
			Scroll,
			Swiper,
			Seckill,
			Like,
			Footer
		},
		computed:{
			...mapState(['cityName'])
		},
		data(){
			return{
				spikeList:[],
				likeList:[],
				changeCity:''
			}
		},
		mounted(){
			console.log(1)
			this.changeCity=this.cityName
			this.http()
		},
		methods:{
			http(){
				this.axios.get("http://192.168.124.21:8080/api/dataHome.json")
				.then((res)=>{
					let data = res.data.data
					console.log(data)
					data.forEach((v)=>{
						if(v.city==this.cityName){
							this.spikeList = v.spikeList
							this.likeList = v.likeList
						}
					})
					
				})
			}
		},
		activated() {
			if(this.changeCity!=this.cityName){
				this.http()
				this.changeCity=this.cityName
			}
		}
	}
</script>

<style>
</style>
