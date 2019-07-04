<template>
  <!--  -->
  <div class="container">
    <router-view></router-view>
    <ul class="tabbar-list">
      <router-link class="item" tag="li" to="/container/bookmall"><i class="iconfont">&#xe61f;</i><span>书架</span></router-link>
      <router-link class="item" tag="li" to="/container/home"><i class="iconfont">&#xe664;</i><span>书城</span></router-link>
      <router-link class="item" tag="li" to="/container/cartoon"><i class="iconfont">&#xe723;</i><span>动漫</span></router-link>
      <router-link class="item" tag="li" to="/container/search"><i class="iconfont">&#xe70a;</i><span>搜索</span></router-link>
      <router-link class="item" tag="li" to="/container/mine"><i class="iconfont">&#xe607;</i><span>我的</span></router-link>
    </ul>
  </div>
</template>

<script>
</script>

<style scoped="scoped" lang="stylus">
    .container
        .tabbar-list
            position: fixed;
            bottom:0;
            left:0;
            right:0;
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
            .item
                flex: 1;
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: .1rem .2rem .1rem .2rem;
                border-top: 1px solid #ccc;
                background-color #f3f5f7
                cursor pointer
                color #999
                i
                    margin-bottom .1rem
</style>
