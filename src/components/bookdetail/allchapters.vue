<template>
<div class="chapter-container">
   <router-link tag="div" :to="'/chaptercontent/'+index" class="item" v-for="(item, index) of chaptersArr" :key="index">{{item.title}}</router-link>
</div>
</template>

<script>
export default {
    data(){
        return {
            bookID : this.$route.params.id,
            newBookID : '',
            chaptersArr : []
        }
    },
    methods : {
        // 得到所有章节的函数
        getAllChapters(){
            // 使用此函数转化book的id,api做了一层保护方式
            // https://api.langpz.com/source/?id=592fe687c60e3c4926b040ca
            // this.$axios.get('/source?id='+this.bookID).then((rep)=>{
            this.$axios.get('/source/?id=592fe687c60e3c4926b040ca').then((rep)=>{
                console.log(rep.data)
                this.newBookID = rep.data.books._id
                this.$axios.get('/chapter?id='+rep.data.books._id).then((rep)=>{
                    console.log(rep.data.chapters)
                    this.chaptersArr = rep.data.chapters;
                    let linkArr = []
                    this.chaptersArr.forEach((item)=>{
                      linkArr.push(item.link)
                    })
                    // console.log(linkArr)
                    this.$store.commit('getAllChapterLink',linkArr);

                })
            })

        }
    },
    created(){
        this.getAllChapters()
    }
}
</script>

<style>
</style>
