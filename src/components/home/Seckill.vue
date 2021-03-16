<template>
	<div class="seckill">
		<swiper ref="mySwiper" :options="swiperOptions">
		    <swiper-slide v-for="item in spikeList" :key="item.id">
				
				<div class="seckill-content" @click="toDetail(item)">
					<div class="seckill-top">
						<img src="../../assets/img/spike1.png" />
						<span>距离结束</span>
						<CountDown
						:currentTime="item.startTime"
						:startTime="item.startTime"
						:endTime="item.endTime"
						:dayTxt="'天'"
						:hourTxt="':'"
						:minutesTxt="':'"
						:secondsTxt="''"
						></CountDown>
					</div>
					<div class="seckill-bottom">
						<img :src="item.imgUrl"/>
						<div class="bottom-title">
							<p>
							  {{item.title}}
							</p>
							<div class="bottom-price">
								<span>￥{{item.price}}</span>
								<p>剩下{{item.num}}个</p>
							</div>
						</div>
						
					</div>
				</div>
				
			</swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
		  </swiper>
	</div>
</template>

<script>
	import CountDown from 'vue2-countdown'
	export default{
		components:{
			CountDown
		},
		props:[
			'spikeList'
		],
		data(){
			return{
				swiperOptions:{
					loop:true,
					pagination:{
						 el: '.swiper-pagination',
					}
				} 
			}
		},
		mounted() {
			// console.log(new Date().getTime())
		},
		methods:{
			toDetail(item){
				console.log(item)
				this.$router.push({
					// name:'detail',
					name:'detail',
					query:{
						item
					}
				})
			}
		}
	}
</script>

<style scoped>
	.seckill{
		width: 100%;
		height: 4.37777rem;
	}
	.seckill-content{
		padding: .3rem;
	}
	.seckill-top{
		width: 100%;
		height: 1.2933333rem;
		display: flex;
		align-items: center; 
		font-size: .35rem;
	}
	.seckill-top img{
		height: .41333333rem;
		width: 1.89333333rem;
	}
	.seckill-top span{
		padding: .15rem;
	}
	.seckill-bottom {
		display: flex;
		justify-content: space-between;
	}
	.seckill-bottom img{
		width: 3.0933333rem;
		height: 2.12rem;
	}
	.seckill-bottom .bottom-title{
		width: 5.86rem;
		color: #333;
	}
	.seckill-bottom .bottom-title p{
		line-height: .38rem;
		font-size: .35rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-align: center;
	}
	.bottom-price{
		margin-top: .5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: .35rem;
	}
	.bottom-price>span{
		display: block;
		font-size: .45rem;
	}
	.bottom-price p{
		padding: .1rem;
		border: 1px solid #444;
		border-radius: .1rem;
		background: #fed101;
	}
	.swiper-container{
		/* overflow: visible; */
	}
	.seckill-top>div{
		margin-left:.15rem ;
	}
	.seckill-top >>> div span{
		margin: .15rem;
		color: #fff;
		border-radius: .1rem;
		background: #8b8b8b;
		padding: 0 .1rem;
	}
	.swiper-pagination >>> .swiper-pagination-bullet-active{
		background: orange;
	}
	.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
		position: static;
		bottom: -0.2rem;
	}
</style>
