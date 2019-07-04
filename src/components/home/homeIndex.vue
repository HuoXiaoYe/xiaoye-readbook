<template>
  <div class="index-container">
    <!-- 各种排行榜单 -->
    <van-tabs @click="handleRank" swipeable animated>
      <van-tab v-for="item of rankList" :key="item._id" :title="item.title">
       <!-- {{item.title}} -->
	   <home-index-main :data="item"></home-index-main>
      </van-tab>
    </van-tabs>
    <!-- 主体内容区域 -->
    <!-- <van-loading type="spinner" color="rgb(255,68,68)" v-show="false" /> -->
	
  </div>
</template>

<script>
import homeIndexMain from "./homeIndexMain.vue"
export default {
  data() {
    return {
      rankList: [],
      isLoading: false
    };
  },
  methods: {
    // 切换排行榜触发该事件
    handleRank(index, title) {
    //   console.log(index, title);
    },
    // 初始化榜单列表的函数
    initRankTitle() {
      this.$axios.get("/ranking").then(rep => {
        this.rankList = rep.data.ranking.epub;
        rep.data.ranking.female.forEach(item => {
          if (item.title.length == 3) {
            this.rankList.push(item);
          }
        });
        rep.data.ranking.male.forEach(item => {
          if (item.title.length == 5) {
            this.rankList.push(item);
          }
        });
      });
    },
    onRefresh() {
      setTimeout(() => {
        // this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  },
  created() {
    this.initRankTitle();
  },
  components : {
	  homeIndexMain
  }
};
</script>

<style lang="stylus">
.van-tab--active {
  color: rgb(255, 68, 68);
  font-weight: 500;
}
</style>
