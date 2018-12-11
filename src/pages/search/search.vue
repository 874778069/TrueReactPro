<template>
  <div class="wrap">
    <div class="search">
      <span></span>
      <input v-focus v-if="searchInit.defaultKeywords" ref="p" type="text" v-model="searchKey" :placeholder="searchInit.defaultKeywords[parseInt(Math.random() * (searchInit.defaultKeywords.length - 0 + 1) + 0)].keyword" @keydown.13="jumpTo">
      <div @click="back" style="padding-left: 0.15rem">取消</div>
    </div>
    <div class="loading" v-show="searchKey && searchArr.length==0">
      <img src="./012b3c599276cc0000002129ebff53.gif" alt="">
    </div>
    <div class="searchList" v-show="searchArr.length>0">
      <ul>
        <li v-for="item in searchArr" v-if="item">
            <router-link :to="`/keyContent?keyword=${item}`">
              {{item}}
            </router-link>
        </li>
      </ul>
    </div>

    <div class="initList" v-show="searchArr.length==0">
      <span>热门搜索</span>
      <ul>
        <li v-for="item in searchInit.hotKeywordVOList">
          <a :href="item.schemeUrl">
            {{item.keyword}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: 'search',
    data(){
      return{
        searchKey:""
      }
    },
    methods:{
      jumpTo(){
        const pp = this.$refs.p.placeholder;
        const arr = this.searchInit.defaultKeywords.filter(item=>{
          return item.keyword == pp
        })
        if (!this.searchKey){
          window.open(`${arr[0].schemeUrl}`,"_self")
        }else {
          //http://m.you.163.com/search?keyword=12&_stat_search=userhand
          window.open(`http://m.you.163.com/search?keyword=${this.searchKey}&_stat_search=userhand`,"_self")
        }
      },
      back(){
        this.$store.commit("changeKongArr")
        this.$router.back()
      }
    },
    computed:{
      ...mapState(["searchInit","searchArr"])
    },
    mounted(){
      this.$store.dispatch("reqSI");
    },
    watch:{
      searchKey(newV){
        this.$store.dispatch("reqSArr",newV)
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "./../../common/mixins.styl"
  .wrap
    width: 100%
    font-size .32rem
    .search
      width: 100%
      height: .9rem
      padding 0 .3rem
      display flex
      justify-content center
      align-items center
      bottom-border-1px(gray)
      input
        width: 80%
        height: 50%
        outline none
        border-bottom 0.005rem solid gray
      span
        display: inline-block;
        vertical-align: middle;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: .28rem;
        height: .28rem;
        margin-right: .1rem;


    .loading
      width: 100%
      img
        width: 100%
    .searchList
      width: 100%
      position absolute
      top: .9rem
      z-index 9
      padding 0 .3rem
      ul
        width: 100%
        li
          width: 100%
          height: .8rem
          line-height .8rem
          bottom-border-1px(gray)
          background-color: white
          a
            color black
    .initList
      width: 100%
      padding .3rem
      ul
        width: 100%
        li
          padding .2rem .2rem



</style>
