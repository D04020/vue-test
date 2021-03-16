<template>
	<div class="tabs">
		<swiper ref="mySwiper" :options="swiperOptions">
		    <swiper-slide v-for="item in TabsList" :key="item.id">
				<div class="tabs-content">
					<img :src="item.imgurl" />
					<p>{{item.title}}</p>
				</div>
			</swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
		  </swiper>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				TabsList:[
					{
						id:0,
						imgurl:'img/tabs1.gif',
						title:'签证'
					},
					{
						id:2,
						imgurl:'img/tabs2.png',
						title:'签证'
					},
					{
						id:3,
						imgurl:'img/tabs3.png',
						title:'签证'
					},
					{
						id:4,
						imgurl:'img/tabs4.gif',
						title:'签证'
					},
					{
						id:5,
						imgurl:'img/tabs5.gif',
						title:'签证'
					},
					{
						id:6,
						imgurl:'img/tabs6.png',
						title:'签证'
					},
					{
						id:7,
						imgurl:'img/tabs7.png',
						title:'签证'
					},
					{
						id:8,
						imgurl:'img/tabs8.png',
						title:'签证'
					},
					{
						id:9,
						imgurl:'img/tabs9.png',
						title:'签证'
					},
					{
						id:10,
						imgurl:'img/tabs10.png',
						title:'签证'
					},
				],
				swiperOptions:{
					slidesPerView:4.5
				}
			}
		}
	}
</script>

<style scoped>
	.tabs{
		padding: .3rem 0;
	}
	.tabs-content{
		
	}
	.tabs-content img{ 
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: .7733333rem;
		height: .773333rem;
	}
	.tabs-content p{
		margin-top: .1rem;
		text-align: center;
		font-size: .37333333rem;
	}
</style>
