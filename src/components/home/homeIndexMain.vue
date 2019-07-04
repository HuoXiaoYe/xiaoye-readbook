<template>
  <div class="home-main-comtaine">
      <ul>
          <li v-for="item of bookList" :key="item._id">{{item.author}}------{{item.title}}</li>
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
            // console.log(rep.data.ranking)
            this.bookList = rep.data.ranking.books
        })
    }
  },
  created(){
      this.initBookList()
  }
};
</script>

<style>
</style>