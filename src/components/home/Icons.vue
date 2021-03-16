<template>
	<div class="icons">
		<ul>
			<li v-for="item in iconsList" :key="item.id">
				<img :src="item.imgurl" />
				<p>{{item.title}}</p>
			</li>
		</ul>
		 
	</div>
</template>

<script>
	export default {
		data(){
			return{
				iconsList:[
					{
						id:0,
						imgurl:'img/icon1.png',
						title:'国内游'
					},
					{
						id:2,
						imgurl:'img/icon2.png',
						title:'国内游'
					},
					{
						id:3,
						imgurl:'img/icon3.png',
						title:'国内游'
					},{
						id:4,
						imgurl:'img/icon4.png',
						title:'国内游'
					},{
						id:5,
						imgurl:'img/icon5.png',
						title:'国内游'
					},{
						id:6,
						imgurl:'img/icon2.png',
						title:'国内游'
					},{
						id:7,
						imgurl:'img/icon3.png',
						title:'国内游'
					},{
						id:8,
						imgurl:'img/icon4.png',
						title:'国内游'
					},{
						id:9,
						imgurl:'img/icon2.png',
						title:'国内游'
					},{
						id:10,
						imgurl:'img/icon1.png',
						title:'国内游'
					},
				]
			}
		}
	}
</script>

<style scoped>
	.icons{
		padding-top: .4rem ;
		padding-bottom: .1rem;
		border-bottom: 1px solid #eee;
	}
	ul{
		overflow: hidden;
	}
	ul li{
		width: 20%;
		float: left;
		margin-bottom: .4rem;
	}
	ul li img{
		width: 1.06666666667rem;
		height:1.06666666667rem ;
		margin-left: auto;
		margin-right: auto;
		display: block;
	}
	ul li p{
		font-size: .373333333rem;
		text-align: center;
		margin-top: .1rem;
		color: #333;
	}
</style>
