<template>
	<div class="list">
		<div class="city-item">
			<p>
				定位/附近城市
			</p>
			<div @click="toHome(item.name)" v-for="item in mapCities" :key="item.id">{{item.name}}</div>
		</div>
		<div class="city-item">
			<p>
				已开通周边游站点
			</p>
			<div @click="toHome(item.name)" v-for="item in cities" :key="item.id">{{item.name}}</div>
		</div>
		<div class="city-item">
			<p>
				热门玩乐城市
			</p>
			<div @click="toHome(item.name)" v-for="item in hotCities" :key="item.id">{{item.name}}</div>
		</div>
	</div>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		data (){
			return{
				mapCities:[],
				cities:[],
				hotCities:[]
			}
		},
		mounted() {
			this.axios.get('http://192.168.124.21:8080/api/city.json').then((res)=>{
				console.log(res.data)
				let data = res.data.data
				this.mapCities = data.mapCities
				this.cities = data.cities
				this.hotCities = data.hotCities
			})
		},
		methods:{
			toHome(city){
				console.log(city)
				this.changeCity(city)
				this.$router.push({path:'/'})
			},
			...mapMutations(['changeCity'])
			
		}
	}
</script>

<style scoped>
	.list{
		
	}
	.city-item{
		padding-left: .4rem;
		color: #999;
		font-size: .4rem;
	}
	.city-item p{
		padding: .3rem 0;
	}
	.city-item div{
		display: inline-block;
		width: 2rem;
		height: .82rem;
		line-height: .83rem;
		border:  1px solid #ccc;
		border-radius: .2rem;
		text-align: center;
		margin-right: .4rem;
		margin-bottom: .4rem;
		box-sizing: border-box;
	}
</style>
