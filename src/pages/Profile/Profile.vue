<template>
    <div class="wrap">
      <div class="header">
        <img src="../../../public/static/c.jpg" alt=""/>
        <span></span>
      </div>
      <transition name="fade">
        <div class="headerP" >
          <img src="../../../public/static/c.jpg" alt=""/>
        </div>
      </transition>

      <ul class="list" data-reactid=".0.3.0.0">
        <li class="item" data-reactid=".0.3.0.0.$0">
          <a class="m-uMenuItem" href="/order/myList" title="我的订单" data-reactid=".0.3.0.0.$0.0">
            <img src="../../../public/static/timg.jpg" alt=""/>
            <span class="txt" data-reactid=".0.3.0.0.$0.0.1">我的订单</span>
          </a>
        </li>
        <li class="item" data-reactid=".0.3.0.0.$1"><a class="m-uMenuItem" href="/pin/item/list" title="周六一起拼" data-reactid=".0.3.0.0.$1.0"> <img src="../../../public/static/timg.jpg" alt=""/><span class="txt" data-reactid=".0.3.0.0.$1.0.1">周六一起拼</span></a>
      </li>
        <li class="item" data-reactid=".0.3.0.0.$2"><a class="m-uMenuItem" href="/aftersale/service" title="售后服务" data-reactid=".0.3.0.0.$2.0"> <img src="../../../public/static/timg.jpg" alt=""/><span class="txt" data-reactid=".0.3.0.0.$2.0.1">售后服务</span></a>
        </li>
        <li class="item" data-reactid=".0.3.0.0.$3"><a class="m-uMenuItem" href="/lead/newIndex?qrType=1" title="邀请返利" data-reactid=".0.3.0.0.$3.0"> <img src="../../../public/static/timg.jpg" alt=""/><span class="txt" data-reactid=".0.3.0.0.$3.0.1">邀请返利</span></a>
        </li>
        <li class="item" data-reactid=".0.3.0.0.$4"><a class="m-uMenuItem" href="/coupon" title="优惠券" data-reactid=".0.3.0.0.$4.0"> <img src="../../../public/static/timg.jpg" alt=""/><span class="txt" data-reactid=".0.3.0.0.$4.0.1">优惠券</span></a>
        </li>
        <li class="item" data-reactid=".0.3.0.0.$5"><a class="m-uMenuItem" href="/redpacket" title="我的红包" data-reactid=".0.3.0.0.$5.0"> <img src="../../../public/static/timg.jpg" alt=""/><span class="txt" data-reactid=".0.3.0.0.$5.0.1">我的红包</span></a>
        </li>
        <li class="item" data-reactid=".0.3.0.0.$6"><a class="m-uMenuItem" href="/preemption/index" title="优先购" data-reactid=".0.3.0.0.$6.0"> <img src="../../../public/static/timg.jpg" alt=""/><span class="txt" data-reactid=".0.3.0.0.$6.0.1">优先购</span></a>
        </li>
        <li class="item" data-reactid=".0.3.0.0.$7"><a class="m-uMenuItem" href="/giftCard/list" title="礼品卡" data-reactid=".0.3.0.0.$7.0"> <img src="../../../public/static/timg.jpg" alt=""/><span class="txt" data-reactid=".0.3.0.0.$7.0.1">礼品卡</span></a>
        </li>
        <li class="item" data-reactid=".0.3.0.0.$8"><a class="m-uMenuItem" href="/points/index" title="积分中心" data-reactid=".0.3.0.0.$8.0"> <img src="../../../public/static/timg.jpg" alt=""/><span class="txt" data-reactid=".0.3.0.0.$8.0.1">积分中心</span></a>
        </li>
        <li class="item" data-reactid=".0.3.0.0.$9"><a class="m-uMenuItem" href="/membership/index" title="会员俱乐部" data-reactid=".0.3.0.0.$9.0"> <img src="../../../public/static/timg.jpg" alt=""/><span class="txt" data-reactid=".0.3.0.0.$9.0.1">会员俱乐部</span></a>
        </li>
        <li class="item" data-reactid=".0.3.0.0.$10"><a class="m-uMenuItem" href="/address/list" title="地址管理" data-reactid=".0.3.0.0.$10.0"> <img src="../../../public/static/timg.jpg" alt=""/><span class="txt" data-reactid=".0.3.0.0.$10.0.1">地址管理</span></a>
        </li>
        <li class="item" data-reactid=".0.3.0.0.$11"><a class="m-uMenuItem" href="/user/securityCenter" title="帐号安全" data-reactid=".0.3.0.0.$11.0"> <img src="../../../public/static/timg.jpg" alt=""/><span class="txt" data-reactid=".0.3.0.0.$11.0.1">帐号安全</span></a>
        </li>
      </ul>
      <div class="loginout">退出登录</div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    import {MessageBox} from "mint-ui"
    export default {
        name: "Profile",
        data(){
          return{
            isMask:false
          }
        },
        computed:{
          ...mapState(["user"])
        },
        methods:{
          loginOut(){
            MessageBox.confirm("你确定退出吗").then(()=>{
              this.$store.dispatch("reqLO");
              this.$router.push("/login")
            })
          }
        }
    }
</script>

<style scoped lang="stylus">
  .wrap
    position relative
    width: 100%
    font-size .24rem
    .header
      width: 100%
      height: 2.7rem
      font-size .42rem
      background-color: #C1A56B
      display flex
      flex-direction column
      align-items center
      justify-content space-evenly
      color white
      img
        width: 1.4rem
        height: 1.4rem
        border-radius 50%



    .headerP
      position: absolute
      width: 100%
      height: 13.34rem
      top: 0
      right: 0
      background-color: rgba(0,0,0,.8)
      z-index 999999
      img
        position: absolute
        width: 80%
        top: 3.8rem
        left: 0.75rem

      &.fade-enter-active, &.fade-leave-active
        transition: all 0.5s
      &.fade-enter, &.fade-leave-to
        opacity: 0



    ul
      li
        float: left;
        width: 33.33333%;
        height: 1.8rem
        border-right: 1px solid rgba(0,0,0,.15);
        border-bottom: 1px solid rgba(0,0,0,.15);
        a
          width: 100%
          height: 100%
          display flex
          flex-direction column
          align-items center
          justify-content:space-evenly
          img
            width: .7rem
            height: .6rem




    .loginout
      position: absolute
      width: 96%
      height: 1rem
      background-color: #b4282d
      top: 10rem
      left: 2%
      text-align: center
      line-height 1rem
      font-size .35rem
      color white



</style>
