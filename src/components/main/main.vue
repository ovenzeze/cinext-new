<template>
  <div>
    <transition name="fade" appear>
    <el-carousel height="500px">
      <el-carousel-item v-for="item in slideArr" :key="item.title">
        <img :src='item.url' :alt="item.title">
        <!--暂时屏蔽文字运营-->
        <!--<div class="intro" v-if="!item.noTextIntro">-->
        <!--<h3 class="post-title">不二</h3>-->
          <!--<p class="post-desc">-->
            <!--以平行蒙太奇和交叉蒙太奇的双重表现手法来展现三个少女之间的故事。要离开上海的少女a与赴朋友之约的少女b。</p>-->
          <!--<a href="//www.baidu.com">-->
            <!--<el-button plain>立刻观看</el-button>-->
          <!--</a>-->
        <!--</div>-->
        <div class="play">
          <a href="//www.baidu.com">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-play"></use>
          </svg>
          </a>
        </div>
      </el-carousel-item>
    </el-carousel>
    </transition>
    <h3 class="recom-title">每日推荐</h3>
    <transition name="fade" appear>
    <cinextRecom></cinextRecom>
    </transition>
    <h3 class="recom-title">热门精选</h3>
    <hotList></hotList>
    <span class="scroll-to-top" v-if="currentScroll > 1000" @click="scrollToTop">
                    <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-top"></use>
              </svg>
    </span>
  </div>
</template>

<script>
  import cinextRecom from '@/components/cinextRecom/cinextRecom'
  import hotList from '@/components/hotList/hotList'
  export default {
    components: {
      cinextRecom,
      hotList,
    },
    data() {
      return {
        slideArr: [],
        currentScroll: 0,
      }
    },
    methods: {
      scrollToTop: function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let scrollInterval = setInterval( function () {
          if(scrollTop > 0) {
            scrollTop = scrollTop - 100
            scrollTo(0, scrollTop)
            this.currentScroll = scrollTop
          }
          else{
            clearInterval(scrollInterval)
          }
        },10)
      },
      handleScroll: function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.currentScroll = scrollTop
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    async created() {
      const res = await this.axios.get('//www.icinext.com:9099/api/get/carousel')
      console.log(res.data)
      if(res.data.code === 0) {
        this.slideArr = res.data.data
      }
      else{
        alert("加载失败")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel .intro{
    width: 350px;
    height: 150px;
    background-color: transparent;
    position: absolute;
    top: 150px;
    left: 150px;
  }
  .el-carousel__item h3 {
    color: white;
    font-size: 27px;
    font-weight: 1000;
    margin: 0;
  }
  .el-carousel .post-desc {
    color: white;
    font-size: 20px;
    /*font-weight: 330;*/
    line-height: 35px;
  }
  .el-carousel img{
    width: 100%;
    height: 100%;
  }
  .el-carousel .intro .el-button {
    background-color: transparent;
    color: white;
    border: 2px white;
    font-size: 14px;
    border-radius: 0;
    transition: all 0.5s;
  }
  .el-carousel .intro .el-button:hover{
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 1);
    color: #ffd04b;
    font-size: 15px;
    border-color:#ffd04b;
  }
  .el-carousel .play{
    width: 100px;
    height: 70px;
    text-align: center;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .el-carousel .play .icon{
    font-size: 70px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.5s;
    color: #d0b8b8;
  }
  .el-carousel .play .icon:hover{
    font-size: 75px;
    color: #ffd04b;
    box-shadow: 2px 2px 3px solid #333;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .recom-title{
    text-align: center;
    font-size: 23px;
    text-shadow: 1px 1px 1px white;
  }
  .scroll-to-top{
    cursor: pointer;
    z-index: 1001;
    transition: all 0.6s;
    position: fixed;
    text-align: center;
    bottom: 30px;
    right: 20px;
    width: 35px;
    font-size: 32px;
    background-color: #efdbdb;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .8s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
