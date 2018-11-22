<template>
  <el-container class="newslist">
    <el-header class="focus-container" height="400px">
      <transition name="list" appear>
        <router-link class="main-post" tag="div" :to='/article/+newsListBannerMain[0].articleId'>
          <img class="post-image" :src='newsListBannerMain[0].coverUrl'/>
          <div class="post-intro">
            <p class="post-intro-text">{{newsListBannerMain[0].title}}</p>
          </div>
        </router-link>
      </transition>
      <transition  name="list" appear>
      <div class="minor-post">
        <router-link class="minor-post-item post-item-1" tag="div" :to='/article/+newsListBannerSecondary[0].articleId'>
          <img class="post-image" :src='newsListBannerSecondary[0].coverUrl'/>
          <div class="post-intro">
            <p class="post-intro-text">{{newsListBannerSecondary[0].title}}</p>
          </div>
        </router-link>
        <router-link class="minor-post-item" tag="div" :to='/article/+newsListBannerSecondary[1].articleId'>
          <img class="post-image" :src='newsListBannerSecondary[1].coverUrl'/>
          <div class="post-intro">
            <p class="post-intro-text">{{newsListBannerSecondary[1].title}}</p>
          </div>
        </router-link>
      </div>
      </transition>
    </el-header>
    <el-container class="list-container">
    <el-main>
      <transition-group name="list">
      <el-card class="box-card clear-fix" v-for="item in newsList" :key="item.articleId" bodyStyle="padding: 0;" shadow="hover">
        <div class="img-container">
          <!--<a :href='/article/+item.articleId' class="url">-->
            <!---->
          <!--</a>-->
          <router-link :to='/article/+item.articleId' class="url">
            <img :src='item.coverUrl' alt="">
          </router-link>
        </div>
        <div class="info-container">
          <router-link :to='/article/+item.articleId' class="url">
            <p class="title">{{item.title}}</p>
          </router-link>
          <div class="article-info-container">
          <span class="icon-author">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-author"></use>
            </svg>
            </span>
            <span>{{item.author}}</span>
            <span class="icon-riqi">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-riqi"></use>
            </svg>
            </span>
            <span>{{item.createTime}}</span>
            <span class="icon-pinglun">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pinglun"></use>
            </svg>
            </span>
            <span>{{item.commentNum}}</span>
            <span class="icon-biaoqian">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-biaoqian"></use>
            </svg>
            </span>
            <span>{{formatTags(item.tags)}}</span>
          </div>
          <p class="intro" style="-webkit-box-orient: vertical;
">{{item.intro}}</p>
          <div class="hot-comment-container" v-if="item.hasHotComment">
          <span class="icon-reping">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-reping"></use>
            </svg>
          </span>
            <span class="user-name">{{item.hotComment.userName}}:</span>
            <span class="comment">{{item.hotComment.comment}}</span>
          </div>
        </div>
      </el-card>
      </transition-group>
      <p v-if="noMoreData" class="nomore">------- 没有更多内容了 -------</p>
    </el-main>
    <el-aside width="350px">
      <h3 class="hot-article-name">热门推荐</h3>
      <div class="hot-article-container">
        <transition-group name="list">
        <el-card class="box-card clear-fix" v-for="item in newsListRecom" :key="item.articleId" bodyStyle="padding: 0;" shadow="hover">
          <div class="img-container">
            <a :href="/article/+item.articleId" target="_blank" class="url">
              <img :src='item.coverUrl' alt="">
            </a>
          </div>
          <div class="info-container">
            <a :href="/article/+item.articleId" target="_blank" class="url"><p class="title">{{item.title}}</p></a>
            <div class="article-info-container">
          <span class="icon-author">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-author"></use>
            </svg>
            </span>
              <span>{{item.author}}</span>
              <span class="icon-riqi">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-riqi"></use>
            </svg>
            </span>
              <span>{{item.createTime}}</span>
              <span class="icon-pinglun">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pinglun"></use>
            </svg>
            </span>
              <span>{{item.commentNum}}</span>
            </div>
          </div>
        </el-card>
        </transition-group>

      </div>
    </el-aside>
    <span class="scroll-to-top" v-if="currentScroll > 1000" @click="scrollToTop">
                    <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-top"></use>
              </svg>
    </span>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        newsList: [],
        newsListRecom: [],
        newsListBannerMain: [
          {
            coverUrl: "https://cs.vmovier.com/Uploads/Banner/2018/04/09/5acb77528ada5.jpg@1920w",
            articleId: "z001",
            type: 1,
            title: "遇见你的洲际人生",
          }
 ],
        newsListBannerSecondary: [
          {
            coverUrl: "https://cs.vmovier.com/Uploads/Banner/2018/04/09/5acb77528ada5.jpg@1920w",
            articleId: "z002",
            type: 1,
            title: "遇见你的洲际人生",
          },
          {
            coverUrl: "https://cs.vmovier.com/Uploads/Banner/2018/04/09/5acb77528ada5.jpg@1920w",
            articleId: "z003",
            type: 1,
            title: "遇见你的洲际人生",
          }
        ],
        currentScroll: 0,
        sequence: 1,
        noMoreData: false,
        tempCount: 1,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      formatTags: function (arr) {
        let tagStr = ''
        arr.forEach((item) => {
          tagStr += `${item}, `
        })
        return tagStr.replace(/, $/, '')
      },
      handleScroll: async function () {
        if(this.sequence > 5) {
          console.log(this.sequence)
          return
        }
        const cardHeight = 240
        const initHeight = 400
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop > this.currentScroll) {
          if(scrollTop > (initHeight + cardHeight * 8 * this.sequence)) {
            this.sequence++
//            const moreData = await this.axios.get(`//clayz.top:8082/api/get/newsList/${this.sequence}`)
            const moreData = await this.axios.get(`//www.icinext.com:9099/api/get/newsList/${this.sequence}`)
            if(moreData.data.code === 0) {
              moreData.data.data.forEach( (item) => {
                item.articleId = `${item.articleId}${this.tempCount++}`
                this.newsList.push(item)
              })
              if(moreData.data.data.length < 9) {
                this.noMoreData = true
              }
            }
            this.currentScroll = scrollTop
          }
          else{
            this.currentScroll = scrollTop
          }
        }
        else{
          this.currentScroll = scrollTop
          return
        }
      },
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
    },
    async created() {
//      const res = await this.axios.get(`//clayz.top:8082/api/get/newsList/${this.sequence}`)
      try {
        const res = await this.axios.get(`//www.icinext.com:9099/api/get/newsList/${this.sequence}`)
        if (res.data.code === 0) {
          this.newsList = res.data.data
        }
      }
      catch(err) {
        alert("图文列表加载失败！")
      }
      try{
        const recomResult = await this.axios.get(`//www.icinext.com:9099/api/get/newsListRecom`)
        if (recomResult.data.code === 0) {
          this.newsListRecom = recomResult.data.data
        }
      }
      catch(err) {
        alert("推荐列表加载失败！")
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .focus-container{
    /*background-color: #82848a;*/
    display: flex;
    flex-direction: row;
  }
  .post-image{
    width: 100%;
    height: 100%;
    border-radius: 1%;
    position: absolute;
  }
  .post-intro{
    background-color: rgba(144, 138, 138, 0.43);
    height: 50px;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 1001;
  }
  .post-intro-text{
    padding-left: 3%;
    color: rgba(249, 244, 244, 0.74);
    font-size: 17px;
    line-height: 50px;
    margin: 0 auto;
    transition: all 1s;
  }
  .post-intro-text:hover{
    color: rgba(249, 244, 244, 1);
    font-size: 18px;
  }
  .main-post{
    flex: 5;
    border-radius: 1%;
    margin-right: 10px;
    position: relative;
    cursor: pointer;
  }
  .minor-post{
    flex: 2;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 1%;
  }
  .minor-post-item{
    flex: 1;
    position: relative;
    cursor: pointer;
  }
  .post-item-1{
    margin-bottom: 5px;
  }
  .newslist {
    margin-top:70px;
  }
  /*el-main*/
  .el-main {
    background-color: rgb(247, 247, 247);
    padding: 20px 25px;
    padding-top: 5px;

  }

  .el-main .el-card {
    min-height: 210px;
    overflow: visible;
    margin-top: 30px;
  }

  .el-main .img-container {
    width: 40%;
    height: 100%;
    float: left;
  }

  .el-main .img-container img {
    width: 100%;
    height: 210px;
  }

  .el-main .info-container {
    width: 60%;
    height: 100%;
    float: right;
  }

  .el-main .info-container .title {
    font-size: 18px;
    letter-spacing: 2px;
    padding-left: 22px;
    margin: 12px 0;
  }
  .el-main .info-container .url{
    text-decoration: none;
    color: black;
    transition: all 0.5s;
  }
  .el-main .info-container .url:hover{
    color: #45bd82;
    text-decoration: dotted;
  }
  .el-main .info-container .intro {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    padding-left: 23px;
    font-size: 15px;
    letter-spacing: 2px;
    max-width: 90%;
    word-break: break-all;
    line-height: 26px;
    margin-top: 12px;
    margin-bottom: 5px;
    color: #4c5655;
    overflow: hidden;
  }

  .el-main .info-container .article-info-container {
    padding-left: 20px;
    font-size: 14px;
    color: #efa7a7;
  }

  .article-info-container .icon-author {
    font-size: 20px;
  }

  .el-main .article-info-container .icon-riqi {
    font-size: 15px;
    margin-left: 10px;
    margin-right: 5px;
  }

  .el-main .article-info-container .icon-pinglun {
    font-size: 15px;
    margin-left: 10px;
    margin-right: 0px;
  }

  .el-main .article-info-container .icon-biaoqian {
    font-size: 15px;
    margin-left: 10px;
    margin-right: 5px;
  }
  .hot-comment-container{

  }
  .el-main .hot-comment-container .icon-reping{
    font-size: 35px;
    margin-left: 22px;
  }
  .el-main .hot-comment-container .user-name,.comment{
    vertical-align: top;
    line-height: 40px;
  }
  .el-main .hot-comment-container .user-name{
    margin-right: 5px;
    margin-left: 7px;
    font-size: 15px;
    color: #38b7a7;
  }
  .el-main .hot-comment-container .comment{
    overflow: hidden;
    display: inline-block;
    max-width: 340px;
    font-size: 15px;
    color: #b19393;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  /*el-main end*/
  /*el-aside*/
  .el-aside {
    /*background-color: rgb(235, 235, 235);*/
    background-color: rgb(247, 247, 247);
    padding: 20px 25px;

  }
  .el-aside .el-card {
    min-height: 200px;
    width: 260px;
    overflow: visible;
    margin-top: 30px;
    margin: 30px auto;
  }
  .hot-article-name{
    text-align: center;
  }
  .el-aside .img-container {
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .el-aside .img-container img {
    width: 260px;
    height: 140px;
  }
  .el-aside .info-container {
    width: 100%;
  }
  .el-aside .info-container .article-info-container{
    text-align: center;
    padding-left: 0;
  }
  .el-aside .info-container .article-info-container .icon-pinglun{
    margin-right: 3px;
  }
  .el-aside .info-container .title{
    font-size: 15px;
    margin: 4px 0;
    padding-left: 0;
    overflow: hidden;
    letter-spacing: 0;
    text-align: center;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  /*el-aside end*/
  /*list-transition*/
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  /*list-transition end*/
  .nomore{
    text-align: center;
    font-size: 16px;
    color: #a2ccd4;
    margin-top: 30px;
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
</style>
