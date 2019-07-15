<template>
  <div class="content-container">
  </div>
</template>

<script>
  export default {
    name : 'chapterContent',
    data(){
      return {
        link: this.$route.params.linkindex
      }
    },
    methods:{
      // 获取当前章节的内容
      getChapterContent(){
        let link = this.$store.getters.getLinkByIndex(this.link)
        console.log(link)
        let encodeLink = escape(link)
        this.$axios.get('/article?link='+encodeLink).then(rep=>{
          console.log(rep)
        })
      }
    },
    created() {
      console.log(this.link),
      this.getChapterContent()
    }
  }
</script>

<style>
</style>
