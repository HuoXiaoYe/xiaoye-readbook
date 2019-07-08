<template>
	<div class="home-cointainer">
		<!-- 搜索框 -->
		<div class="search-container">
			<van-search v-model="searchKey" placeholder="请输入搜索您喜欢的图书" show-action @search="onSearch">
				<div slot="action" @click="onSearch">搜索</div>
			</van-search>
		</div>
		<!-- 主体区域 -->
		<home-index></home-index>
		<!-- 底部导航区域 -->
	</div>
</template>

<script>
	import homeIndex from "../components/home/homeIndex.vue"
	export default {
		data() {
			return {
				searchKey: ""
			}
		},
		methods: {
			onSearch() {
				console.log("onSearch")
			},
			// 切换排行榜触发该事件
			handleRank(index, title){
				console.log(index,title)
			},
		},
		components : {
			homeIndex
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	.home-cointainer 
		.search-container 
			height 1.08rem
			position fixed
			top 0
			left 0
			right 0
			z-index 99
</style>
