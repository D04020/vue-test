<template>
	<div class="like">
		<div class="like-list" v-for="item in likeList" :key="item.id">
			<div class="like-top">
				<div class="top-left">
					<span>{{item.title}}</span>
				</div>
				<p class="top-right">更多></p>
			</div>
			<div class="like-bottom">
				<div class="bottom-header"
				@click="toDetail(item)"
				:style="{'background':'url('+item.imgUrl+')no-repeat center center'}"
				>
					<div class="header-info">
						<span>
							{{item.Introduction}}
						</span>
						<span>￥{{item.price}}起</span>
					</div>
				</div>
				<ul>
					<li @click="toDetail(list)" v-for="list in item.cityList" :key="list.id">
						<img :src="list.imgUrl" />
						<span class="title">{{list.title}}</span>
						<span class="price">￥{{list.price}}起</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['likeList'],
		methods:{
			toDetail(item){
				this.$router.push({
					path:'/detail',
					query:{
						item
					}
				})
			}
		}
	}
</script>

<style scoped>
	.like{
		font-size: .35rem;
		margin-top: .5rem;
		padding-bottom: 1.5rem;
	}
	.like-list{
		
	}
	.like-top{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.like-top .top-left{
		position: relative;
		color: #000;
	}
	.like-top .top-left:before{
		position: absolute;
		content:'';
		background: #fed101;
		width: .1rem;
		height: .48rem;
	}
	.like-top .top-left span{
		padding-left: .5rem;
		font-size: .5rem;
	}
	.like-top .top-right{
		padding-right: .5rem;
		color: #999;
		font-weight: 500;
		font-size: .4rem;
	}
	.like-bottom{
		padding: .3rem;
	}
	.like-bottom  .bottom-header{
		position: relative;
		height: 4.466666rem;
		/* background:url('../../../public/img/like2.png') no-repeat; */
		width: 100%;
		background-size: 100%;
	}
	.like-bottom  .bottom-header .header-info{
		
		position: absolute;
		bottom: .26rem;
		left: .2rem;
		display: flex;
		justify-content: space-between;
	} 
	.like-bottom  .bottom-header .header-info span:nth-child(1){
		font-size: .5rem;
		color: #fff;
		font-weight: bold;
		width: 5.78rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.like-bottom  .bottom-header .header-info span:nth-child(2){
		font-size: .4rem;
		color: orange;
		font-weight: 500;
		margin-left: 1rem;
	}
	.like-bottom ul{
		display: flex;
		justify-content: space-between;
		margin-top: .3rem;
	}
	.like-bottom ul li{
		width: 2.96rem;
	}
	.like-bottom ul li img{
		width: 100%;
		height: 1.9584rem;
	}
	.like-bottom ul li span.title{
		font-size: .35rem;
		display: block;
		margin-top: .2rem;
		height: .693333rem;
		width: 100%;
		display: block;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.like-bottom ul li span.price{
		display: block;
		font-size: .45rem;
		color: orange;
		font-weight: 500;
		margin-top: .2rem;
		
	}
</style>
