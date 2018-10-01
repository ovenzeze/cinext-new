<template>
  <div class="hotlist-container">
  <el-row>
    <transition-group name="list">
    <el-col :span="7" v-for="(item,index) in listData" :key="item.videoId" class="card-container">
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <div class="image-container">
          <div class="play">
            <a :href='/video/+item.videoId'>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-play"></use>
              </svg>
            </a>
          </div>
        <img :src='item.coverUrl+"!327_200"' class="image">
        </div>
        <div class="video-intro">
          <router-link :to='/video/+item.videoId'>
            <h4>{{item.title}}</h4>
          </router-link>
          <p class="desc-text" style="-webkit-box-orient: vertical;
">{{item.desc}}</p>
         </div>
          <el-row class="video-play-info">
            <el-col :span="6">{{item.videoDuration}}分钟</el-col>
            <el-col :span="6">{{item.playTimes}}次播放</el-col>
            <el-col :span="12" class="info-tags">{{formatTags(item.tags)}}</el-col>
          </el-row>
      </el-card>
    </el-col>
    </transition-group>
  </el-row>
    <el-row class="loadmore-container">
      <transition name="fade">
      <el-button v-if="!noMoreData" size="small" type="success" v-on:click="loadMore" :loading='isShowLoadIcon'>{{isShowLoadIcon ? '加载中' : '加载更多'}}</el-button>
      </transition>
      <p v-if="noMoreData" class="nomore">------- 没有更多内容了 -------</p>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        listData: [],
        isShowLoadIcon: false,
        sequence: 1,
        noMoreData: false,
        loadMoreText: '加载更多',
      }
    },
    methods: {
      formatTags: function(arr) {
        let tagStr = ''
        if(arr.length != 0) {
          arr.forEach((item) => {
            if(item) {
              tagStr += `#${item} `
            }
          })
        }
        return tagStr
      },
      loadMore: async function() {
        this.isShowLoadIcon = true
        const moreData = await this.axios.get(`//www.icinext.com:9099/api/get/hotList/${this.sequence}`)
        if(this.sequence > 5) {}
        if(moreData.data.code == 0) {
          if(moreData.data.data.length !== 9) {
            this.noMoreData = true
          }
          moreData.data.data.forEach( (item) => {
            this.listData.push(item)
          })
          this.sequence++
        }
        else{
          alert("加载失败")
        }
        this.isShowLoadIcon = false
      }
    },
    computed: {
    },
    async created() {
//      const res = await this.axios.get(`//clayz.top:8082/api/get/hotList/${this.sequence}`)
      const res = await this.axios.get(`//www.icinext.com:9099/api/get/hotList/${this.sequence}`)
      if(res.data.code == 0) {
        this.listData = res.data.data
        this.sequence++
      }
      else{
        alert("加载失败")
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hotlist-container{
    width: 88%;
    margin: 0 auto;
  }
  .card-container{
    margin-left: 3%;
    margin-bottom: 30px;
  }
  .image-container{
    position: relative;
    height: 200px;
    opacity: 0.8;
    transition: all 0.5s;
  }
  .image-container:hover{
    opacity: 1;
  }
  .image-container .play{
    position: absolute;
    font-size: 45px;
    top: 70px;
    left: 44%;
    transition: all 0.5s;
  }
  .image-container .play .icon{
    color: #d0b8b8;
    transition: all 0.7s;
  }
  .image-container .play .icon:hover{
    color: yellow;
    font-size: 48px;
  }
  .fliter{
    position: absolute;
    width: 100%;
    height: 100%;
    color: #8c939d;
    z-index: 1001;
  }
  .el-card .image{
    width: 100%;
    height: 200px;
    cursor: pointer;
    transition: all 0.5s;
  }
  .video-intro{
    height: 110px;
  }
  .video-intro a{
    text-decoration: none;
    color: #5a5f5d;
  }
  .video-intro h4{
    margin: 10px 15px;
    font-size: 17px;
    transition: all .8s;
  }
  .video-intro a :hover{
    margin: 10px 10px;
    font-size: 17px;
    color: yellowgreen;
  }
  .video-intro p{
    margin: 10px 15px;
    line-height: 25px;
    font-size: 15px;
    color: #8c939d;
    letter-spacing: 2px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .video-play-info{
    font-size: 14px;
    margin: 10px 15px 15px 15px;
    color: #8c939d;
  }
  .video-play-info .info-tags{
    text-align: right;
  }
  .loadmore-container{
    text-align: center;
    padding: 10px 0 30px 0;
    font-size: 30px;
    transition: all 0.5s;
  }
  .loadmore-container .el-button{
    font-size: 16px;
  }
  .loadmore-container .show-load-icon{
    display: none;
  }
  .nomore{
    font-size: 16px;
    color: #a2ccd4;
    margin: 0 auto;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to
    /* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .8s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(300px);
  }
</style>
