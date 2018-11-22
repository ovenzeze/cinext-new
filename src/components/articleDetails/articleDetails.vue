<template>
  <el-container class="inner-box-top">
    <transition name="list" appear>
      <div class="main">
        <div class="article">
          <img class="article-image" :src="articleInfo.articleCoverImg"
               alt="">
          <div class="article-info">
            <h3 class="title">{{articleInfo.articleTitle}}</h3>
            <div class="info-item">
              <span>作者:</span>
              <span>{{articleInfo.authorInfo.authorName}}</span>
            </div>
            <div class="info-item">
              <span>阅读:</span>
              <span>{{articleInfo.readTimes}}次</span>
            </div>
            <div class="info-item">
              <span>评论:</span>
              <span>{{articleInfo.commentNum}}条</span>
            </div>
            <div class="info-item">
              <span>发布日期:</span>
              <span>{{articleInfo.postTime || '未知'}}</span>
            </div>
          </div>
          <div class="article-text" v-html="articleInfo.articleText"></div>
        </div>
        <comment
          :userId= 'userInfo.userId'
          :type= 'userInfo.type'
          :id='articleId'></comment>
      </div>
    </transition>
    <div class="aside">
    <transition name="list" appear>
      <div class="fixed-aside" :style="{top: fixedAsideTop}">
        <div class="info-container">
          <div class="author-info">
            <img class="author-avator"
                 :src="articleInfo.authorInfo.authorAvator"
                 alt="">
            <br>
            <span class="author-name">{{articleInfo.authorInfo.authorName}}</span>
          </div>
          <div class="reading-info">
            <div class="article-num">
              <span class="title">文章总数</span>
              <br>
              <span class="num">{{articleInfo.authorInfo.totalArticleNum}}</span>
            </div>
            <div class="reading-count">
              <span class="title">阅读次数</span>
              <br>
              <span class="num">{{articleInfo.authorInfo.totalReadTimes}}</span>
            </div>
          </div>
        </div>
        <div v-if="newsListRecom.length !== 0" class="recom-container">
          <span class="recom-title">相关推荐</span>
          <div v-for="item in newsListRecom" :key="item.articleId" class="recom-item">
            <a :href='item.articleId' target="_blank" class="url">
              <img class="recom-cover" :src="item.coverUrl"
                   alt="">
            </a>
            <div class="recom-info-container">
              <a :href='item.articleId' target="_blank" class="url"><p class="info-text">{{item.title}}</p></a>
            </div>
          </div>
        </div>
      </div>
    </transition>
    </div>
  </el-container>
</template>

<script>
  import comment from '@/components/comment/comment'

  export default {
    components: {
      comment,
    },
    props: ['articleId'],
    data() {
      return {
        userInfo: {
          userId: 'local',
          type: 2,
        },
        articleText: '',
        articleInfo: {
          authorInfo: {}
        },
        fixedAsideTop: '80px',
        stopScrollTop: 0,
        newsListRecom: [],
      }
    },
    mounted: function () {
      window.addEventListener('scroll', this.handleScroll)
      const userInfo = JSON.parse(this.utils.getCookie('userInfo'))
      if(userInfo) {
        this.userInfo.userId = userInfo.userId
      }
      Promise.all([this.getNewsListRecom()])
    },
    methods: {
      formatDevices: function (arr) {
        let devicesStr = ''
        if (arr && arr.length !== 0) {
          arr.forEach((item) => {
            devicesStr += `${item}; `
          })
        }
        else {
          devicesStr = '暂无设备信息'
        }
        return devicesStr
      },
      formatDuration(seconds) {
        let sed = seconds % 60;
        let minutes = (seconds - sed) / 60;
        return `${minutes}分${sed}秒`
      },
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.stopScrollTop = document.body.clientHeight - 381 - 30 - 80 - 700
        // console.log("scrollTop = ", scrollTop)
        if (scrollTop < this.stopScrollTop) {
          this.fixedAsideTop = `${scrollTop + 80}px`
        }
      },
      async getNewsListRecom() {
        const recomResult = await this.axios.get(`//www.icinext.com:9099/api/get/newsListRecom`)
        if (recomResult.data.code === 0) {
          this.newsListRecom = recomResult.data.data
        }
      }
    },
    async created() {
      const articleInfoRes = await this.axios.get(`//www.icinext.com:9099/api/get/articleInfo/${this.articleId}`)
      if(articleInfoRes.data.code === 0) {
        const articleData = articleInfoRes.data.data
        this.articleInfo = articleInfoRes.data.data
        console.log('articleInfoRes =', articleData)

      }
      else{
        this.$alert('获取文章内容出错。', '提示', {
          confirmButtonText: '确定'
        })
      }
    },
  }
</script>

<style scoped>
  .outer-box {
    flex-direction: column;
    position: relative;
  }

  .inner-box-top {
    flex-direction: row;
    /*height: 1000px;*/
    margin-top: 60px;
    background-color: rgba(23, 247, 226, 0.35);
  }

  .inner-box-bottom {
    background-color: rgba(23, 247, 226, 0.35);
  }

  /*main style*/
  .main {
    flex: 9;
    height: 100%;
    padding: 20px 0 0px 20px;
  }

  .article {
    height: auto;
    background-color: white;
  }

  .article-image {
    width: 100%;
    height: 400px;
  }

  .article-info {
    padding-left: 20px;
  }

  .article-info .title {
    font-size: 22px;
  }

  .info-item {
    display: inline-block;
    margin-right: 35px;
    color: #a7a5a1c9;
  }

  /*main style end*/
  /*fixed aside style*/
  .fixed-aside {
    position: absolute;
    right: 20px;
    width: 17.5%;
    height: 720px;
    overflow: scroll;
  }

  /*fixed aside style end*/
  /*aside style*/
  .aside {
    flex: 2;
    height: 100%;
    padding: 20px;
  }

  .info-container {
    height: auto;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .author-info {
    flex: 1;
    text-align: center;
  }

  .author-info .author-avator {
    border-radius: 50%;
  }

  .author-name {
    display: inline-block;
    margin: 15px;
    font-size: 18px;

  }

  .reading-info {
    flex: 1;
    display: flex;
    flex-direction: row;
    text-align: center;
  }

  .reading-info .title {
    display: inline-block;
    color: #d5d5d8b0;
    font-size: 15px;
    margin-bottom: 10px;
  }

  .reading-info .num {
    font-size: 18px;
    font-weight: bold;
  }

  .article-num {
    flex: 1;
  }

  .reading-count {
    flex: 1;
  }

  .recom-container {
    height: auto;
    padding: 20px 0px;
    margin-top: 10px;
    text-align: center;
  }

  .recom-item {
    margin-bottom: 15px;
    position: relative;
    border-radius: 5%;
    cursor: pointer;
  }

  .recom-title {
    display: inline-block;
    margin-bottom: 20px;
  }

  .recom-cover {
    width: 100%;
    height: 130px;
    opacity: 0.9;
    transition: all 0.5s;
  }

  .recom-cover:hover {
    opacity: 1;
  }

  .recom-info-container {
    position: absolute;
    bottom: 2px;
    height: 28px;
    background-color: rgba(144, 138, 138, 0.43);
    width: 100%;
    text-align: left;
  }

  .recom-info-container .info-text:hover {
    color: rgba(249, 244, 244, 1);
    font-size: 15px;
  }

  .recom-info-container .info-text {
    overflow: hidden;
    color: rgba(249, 244, 244, 0.74);
    font-size: 14px;
    line-height: 28px;
    margin: 0;
    margin-left: 5px;
    transition: all 0.8s;
  }

  /*aside style end*/
  .article-text {
    padding: 30px;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 1s;
  }

  .slide-enter, .slide-leave-to {
    opacity: 0;
    transform: translateX(5px);
  }

  /*comments-container styles*/
  .comments-container {
    margin-top: 20px;
    margin-bottom: 30px;
    background-color: white;
    min-height: 100px;
    padding: 20px;
    box-sizing: border-box;
  }

  .comments-title-text {
    font-size: 20px;
    padding-left: 20px;
    /*color: #d7d9dc;*/
  }

  .comments-box {
    border-top: 1px solid #ccc;
    padding-bottom: 20px;
    /*max-height: 500px;*/
    /*overflow: scroll;*/
  }

  .comment-item {
    max-height: 100px;
    display: flex;
    flex-direction: row;
    margin-top: 40px;
  }

  .no-comment-text {
    padding: 20px;
    font-size: 18px;
    color: #bcc3b4;
  }

  .author-avator {
    flex: 1;
    text-align: center;
    padding-top: 10px;
  }

  .author-avator img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .comment-info {
    flex: 9;
  }

  .user-info {
    margin-bottom: 10px;
    color: #51bb65;
    font-size: 15px;
    /*width: 80%;*/
  }

  .comment-text {
    font-size: 15px;
    color: #8c8585d9;
    /*width: 80%;*/
    display: -webkit-box;
    line-height: 28px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .like-num-text {
    float: right;
  }

  .like-icon {
    margin-left: 18px;
    font-size: 18px;
    cursor: pointer;
    color: #ccc;
  }

  .liked-icon {
    margin-left: 18px;
    font-size: 17px;
    cursor: pointer;
  }

  /*comments-container styles end*/
  /*news recom style*/
  .recom-container .url {
    text-decoration: none;
    color: black;
    transition: all 0.5s;
  }

  .recom-container .url:hover {
    color: #45bd82;
    text-decoration: dotted;
  }

  /*news recom style end*/
  /*list-transition*/
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  /*list-transition end*/
</style>
