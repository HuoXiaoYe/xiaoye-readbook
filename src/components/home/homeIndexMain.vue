<template>
  <div class="home-main-comtaine">
      <ul class="book-list">
		  <router-link tag="li" :to="'/bookdesc/'+item._id" class="book-item" v-for="item of bookList" :key="item.id">
			  <img :src="item.cover" alt="">
			  <div class="book-info">
				  <p class="title">书名:{{item.title}}</p>
				  <p class="author">作者:{{item.author}}</p>
				  <p class="category">分类:{{item.majorCate}}</p>
				  <p class="desc">描述:{{item.shortIntro}}</p>
			  </div>
		  </router-link>
      </ul>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data(){
      return {
          bookList : []
      }
  },
  methods: {
    // 获取书籍列表
    initBookList() {
        this.$axios("/ranking/"+this.data._id).then((rep)=>{
            console.log(rep.data.ranking.books[0])
            this.bookList = rep.data.ranking.books
        })
    }
  },
  created(){
      this.initBookList()
  }
};
</script>

<style scoped="scoped" lang="stylus">
    .home-main-comtaine
        .book-list
            .book-item
                over-flow hidden
                display flex
                margin .2rem
                padding .1rem
                border 1px solid #ccc
                background-color #f3f5f7
                img
                    width 1.8rem
                    height 2.4rem
                .book-info
                    flex 1
                    padding-left .2rem
                    .desc
                        height 2.18rem
                        overflow hidden
                        text-overflow ellipsis
</style>