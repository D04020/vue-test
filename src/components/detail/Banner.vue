<template>
	<div class="banner">
		<img :src="item.imgUrl" />
		<div class="banner-title">
			{{item.title}}
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				item:''
			}
		},
		activated() {
			console.log(this.$route.query.item)
			this.item = this.$route.query.item
		}
	}
</script>

<style scoped>
	.banner{
		height: 5.65rem;
		width: 100%;
	}
	.banner img{
		width: 100%;
		height: 100%;
	}
	.banner-title{
		padding: .3rem;
		font-size: .4rem;
	}
</style>
