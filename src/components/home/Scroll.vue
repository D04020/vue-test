<template>
	<div class="srcoll">
		<div class="srcoll-content">
			<div class="scroll-right">
				<ul :class="{animatedTop}">
					<li  v-for=" item in scrollList" :key="item.id">
						<img src="@/assets/img/scroll.png" />
						{{item.title}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				animatedTop:true,
				scrollList:[
					{
						id:0,
						title:'1清迈旅游落地签如何搞定？360°带你了解泰北小城清迈'
					},
					{
						id:1,
						title:'2清迈旅游落地签如何搞定？360°带你了解泰北小城清迈'
					},
					{
						id:2,
						title:'3清迈旅游落地签如何搞定？360°带你了解泰北小城清迈'
					},
					{
						id:3,
						title:'4清迈旅游落地签如何搞定？360°带你了解泰北小城清迈'
					},
					{
						id:4,
						title:'5清迈旅游落地签如何搞定？360°带你了解泰北小城清迈'
					}
				]
			}
		},
		mounted() {
			setInterval(this.showScroll,2000)
		},
		methods:{
			showScroll(){
				this.animatedTop=true
				setTimeout(()=>{
					this.scrollList.push(this.scrollList[0])
					this.scrollList.shift()
					this.animatedTop=false
				},500)
			}
		}
	}
</script>

<style>
	.animatedTop{
		transition: all .5s;
		margin-top: -.6666666666rem;
	}
	.scroll{
		padding: .3rem 0;
	}
	.srcoll-content{
		background: url(/img/scroll.png)no-repeat;
		background-size: 100%;
		width: 100%;
		height: 1.3333333rem;
		position: relative;
	}
	.scroll-right{
		position: absolute;
		right: 0;
		width:8.13333333rem ;
		height:1.3333333rem ;
		overflow: hidden;
	}
	.scroll-right li{
		font-size:.35rem;
		color: #333333;
		line-height: .66666666666rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.scroll-right li img{
		width: .16rem;
		height: .16rem;
	}
</style>
