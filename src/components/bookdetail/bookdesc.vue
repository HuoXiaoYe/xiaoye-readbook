<template>
  <div class="bookdesc-container">
    <div class="title">{{bookInfo.title}}</div>
    <img :src="bookInfo.cover" />
    <p class="author">{{bookInfo.author}}</p>

    <van-button type="primary" size="large">快速阅读</van-button>
    <van-button type="info" size="large" @click="goAllChapters">所有章节</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookId: this.$route.params.id,
      bookInfo: {}
    };
  },
  methods: {
    // 获取该本书籍详情的函数
    getBookInfo() {
      this.$axios
        .get("/book/" + this.bookId)
        .then(rep => {
          console.log(rep.data.book);
          this.bookInfo = rep.data.book;
        })
        .catch(e => {
          console.log(e);
        });
    },
    // 编程式路由跳转
    goAllChapters(){
        this.$router.push('/allchapters/'+this.bookId)
    }
  },
  created() {
    this.getBookInfo();
  }
};
</script>

<style lang="stylus" scoped="scoped">
img {
  width: 4rem;
}

.van-button--large {
  width: 90%;
  height: 50px;
  line-height: 48px;
  margin-left: 5%;
  margin-bottom: 0.2rem;
}
</style>
