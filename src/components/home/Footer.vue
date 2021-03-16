<template>
	<div>
		<footer>
			<a href="">
				<img src="../../assets/img/footer1.png" />
				<span>首页</span>
			</a>
			<a href="">
				<img src="../../assets/img/footer2.png" />
				<span>订单</span>
			</a>
			<a href="">
				<img src="../../assets/img/footer3.png" />
				<span>个人中心</span>
			</a>
		</footer>
	</div>
</template>

<script>
</script>

<style scoped>
	footer{
		border-top: 1px solid #e7e7e7;
		position: fixed;
		bottom: 0;
		z-index: 9999;
		background: #fff;
		width: 100%;
		height: 1.46666rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	footer a{
		flex: 1;
		flex-direction: column;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	footer a img{
		width: .72rem;
		height: .72rem;
		display: block;
	}
	footer a span{
		display: block;
		font-size: .35rem;
		margin-top: .2rem;
	}
	
</style>
