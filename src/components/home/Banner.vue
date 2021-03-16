<template>
	<div>
		<div class="banner">
			<transition enter-active-class="bounceInLeft" leave-active-class="bounceOutLeft">
				<div class="banner-left animated" v-show="toshow"></div>
			</transition>
			<div class="banner-header">
				<div class="banner-top">
					<div class="top-left" @click="toCity">
						{{cityName}}
						<i class="iconfont">&#xe64a;</i>
					</div>
					<div class="top-search">
						<i class="iconfont">&#xe612;</i>
						泰国
					</div>
					<div class="top-right" @click="toShow">
						<img src="../../assets/img/other.png" />
					</div>
				</div>
				
				<div class="banner-swiper">
					<swiper ref="mySwiper" :options="swiperOptions">
					    <swiper-slide>
							<img src="../../assets/img/banner1.png" />
						</swiper-slide>
					    <swiper-slide>
							<img src="../../assets/img/banner2.png" />
						</swiper-slide>
					    <swiper-slide>
							<img src="../../assets/img/banner3.png" />
						</swiper-slide>
					    <div class="swiper-pagination" slot="pagination"></div>
					  </swiper>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		computed:{
			...mapState(['cityName'])
		},
		data(){
			return{
				toshow:false,
				swiperOptions:{
					loop:true,
					autoplay:true,
					pagination:{
						 el: '.swiper-pagination',
					}
				}
			}
		},
		methods:{
			toShow(){
				this.toshow=!this.toshow
			},
			toCity(){
				this.$router.push({
					path:'/city'
				})
			}
		}
	}
</script>

<style>
	.banner-header{
		background: rgb(255, 221, 64);
		width: 100%;
		height: 5.6rem;
		position: relative;
	}
	.banner-top{
		z-index: 2;
		position: absolute;
		left: 0;
		top: .2rem;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.top-left{
		padding: 0 .4rem;
		color: #fff;
		font-size: .42666666rem;
	}
	
	.top-search{
		flex: 1;
		color: #333;
		background:#fff;
		padding:.2rem;
		border-radius: .1rem;
		font-size: .37333333rem;
	}
	.top-right{
		padding: 0 .4rem;
	}
	.top-right img{
		height: .78125rem;
		width: .78125rem;
	}
	.banner-swiper{
		width: 100%;
		height: 100%;
	}
	.banner-swiper img{
		width: 100%;
		height: 100%;
	}
	.swiper-pagination  .swiper-pagination-bullet-active{
		background: orange!important;
	}
	.banner-left{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		z-index: 999;
		background: #000;
		height: 100%;
		width: 6.6666666rem;
	}
</style>
