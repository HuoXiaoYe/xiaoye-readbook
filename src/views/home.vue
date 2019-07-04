<template>
	<div class="home-cointainer">
		<!-- 搜索框 -->
		<div class="search-container">
			<van-search v-model="searchKey" placeholder="请输入搜索您喜欢的图书" show-action @search="onSearch">
				<div slot="action" @click="onSearch">搜索</div>
			</van-search>
		</div>
		<!-- 主题区域 -->
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
			background-color:red !important;
	// height:200px;
</style>
