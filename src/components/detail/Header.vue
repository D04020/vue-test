<template>
	<header>
		<div class="header-left"  @click="toHome">
			<img src="img/return.png" />
		</div>
		<div class="header-title">活动详情</div>
		<div class="header-right">
			<i class="iconfont">&#xe608;</i>
		</div>
	</header>
</template>

<script>
	export default{
		methods:{
			toHome(){
				this.$router.push({
					path:'/'
				})
			}
		}
	}
</script>

<style scoped>
	header{
		height: 1.2rem;
		background: #f7f7f7;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: .42666666rem;
	}
	.header-left{
		padding-left: .5rem;
	}
	.header-left img{
		width: .426666rem;
		height: .426666rem;
	}
	.header-right{
		padding-right: .5rem;
	}
</style>
