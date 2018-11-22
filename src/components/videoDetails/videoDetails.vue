<template>
  <el-container>
    <transition name="list" appear>
    <div class="video-player-container">
      <video-player  class="vjs-custom-skin"
                     ref="videoPlayer"
                     :options="playerOptions"
                     :playsinline="true"
                     @play="onPlayerPlay($event)"
                     @pause="onPlayerPause($event)"
                     @ended="onPlayerEnded($event)"
                     @loadeddata="onPlayerLoadeddata($event)"
                     @waiting="onPlayerWaiting($event)"
                     @playing="onPlayerPlaying($event)"
                     @timeupdate="onPlayerTimeupdate($event)"
                     @canplay="onPlayerCanplay($event)"
                     @canplaythrough="onPlayerCanplaythrough($event)"
                     @ready="playerReadied"
                     @statechanged="playerStateChanged($event)">
      </video-player>
    </div>
    </transition>
    <transition name="list" appear>
    <div class="video-info-container">
      <div class="intro-info">
        <p class="video-title">{{videoInfo.videoName}}</p>
        <h3 class="intro-title-text">关于作品</h3>
        <p class="editor-intro-text" style="-webkit-box-orient:vertical;
">{{videoInfo.editorIntroText}}</p>
        <h3 class="intro-title-text">创作人说</h3>
        <p class="director-intro-text" style="-webkit-box-orient:vertical;
">{{videoInfo.directorIntroText || 'Ops! 创作人什么也没有说'}}</p>
        <h3 class="intro-title-text">使用设备</h3>
        <p class="device-intro-text">{{formatDevices(videoInfo.devices)}}</p>
      </div>

      <div class="base-info">
        <div class="director-box">
          <span class="box-title">导演</span>
          <br>
          <span class="box-text">{{videoInfo.dirctorName || '暂无信息'}}</span>
        </div>
        <div class="author-box">
          <span class="box-title">主创团队</span>
          <br>
          <div v-if="videoInfo.creativeTeam">
          <span  v-for="item in videoInfo.creativeTeam" :key='item' class="box-text author-name-text">{{item}}</span>
          </div>
          <div v-else>
          <span class="box-text author-name-text">暂无信息</span>
          </div>
        </div>
        <div class="times-box">
          <div class="times-box-inner">
          <span class="box-title">时长</span>
          <br>
          <span class="box-text">{{formatDuration(videoInfo.videoDuration)}}</span>
          </div>
          <div class="times-box-inner">
          <span class="box-title">播放次数</span>
          <br>
          <span class="box-text">{{videoInfo.playTimes}}次</span>
          </div>
        </div>
        <div class="date-box">
          <span class="box-title">上传日期</span>
          <br>
          <span class="box-text">{{videoInfo.updateTime}}</span>
        </div>
        <div class="share-box">
          <span class="box-title">分享</span>
          <br>
          <span class="box-text">Cinext</span>
        </div>
      </div>
    </div>
    </transition>
    <transition name="list" appear>
    <div class="score-info-container">
      <p class="comments-title-text">评分</p>
      <div class="progress-box">
        <div class="progress-item">
          <el-progress type="circle" :percentage="80" :show-text=false  :width="80"  color="#48de72c4">7.5</el-progress>
          <span class="progress-score-text">7.5</span>
          <br>
          <span class="progress-item-text">综合</span>
        </div>
        <div class="progress-item">
          <el-progress type="circle" :percentage="80" :show-text=false  :width="80"  color="#81a588c4">7.5</el-progress>
          <br>
          <span class="progress-score-text">7.5</span>
          <span class="progress-item-text">剧本</span>
        </div>
        <div class="progress-item">
          <el-progress type="circle" :percentage="80" :show-text=false  :width="80"  color="#81a588c4">7.5</el-progress>
          <br>
          <span class="progress-score-text">7.5</span>
          <span class="progress-item-text">摄影</span>
        </div>
        <div class="progress-item">
          <el-progress type="circle" :percentage="80" :show-text=false  :width="80"  color="#81a588c4">7.5</el-progress>
          <br>
          <span class="progress-score-text">7.5</span>
          <span class="progress-item-text">演员</span>
        </div>
        <div class="progress-item">
          <el-progress type="circle" :percentage="80" :show-text=false  :width="80"  color="#81a588c4">7.5</el-progress>
          <br>
          <span class="progress-score-text">7.5</span>
          <span class="progress-item-text">灯光</span>
        </div>
      </div>
    </div>
    </transition>
    <transition name="list" appear>
      <comment
        :userId= 'userInfo.userId'
        :type= 'userInfo.type'
        :id='currentVid'></comment>
    </transition>
  </el-container>
</template>

<script>
  import 'video.js/dist/video-js.css'
  import './custom-theme.css'
  import { videoPlayer } from 'vue-video-player'
  import comment from '../comment/comment'

  export default {
    components: {
      videoPlayer,
      comment
    },
    data() {
      return {
        currentVid: '',
        videoInfo: {
          videoId: 'V001',
          videoCoverImg: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg',
          videoName: '这是一个标题，主标题',
          editorIntroText: '这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。',
          directorIntroText: '这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。',
          devices: ['SONY ILCE-7R','Canon EOS-1D Mark III','Canon EOS-1D Mark III'],
          dirctorName: 'Cinext',
          creativeTeam: ['Endy','Clay','Ovenzeze','装深沉','张镇','沈庄城'],
          videoDuration: 1234,
          playTimes: 533,
          updateTime: '2018-6-20',
          scores: {
            whole: 7.5,
            script: 7.5,
            photograph: 7.5,
            actor: 7.5,
            light: 7.5,
          },
        },
        playerOptions: {
          autoplay: false,
          muted: false,
          // height: 500,
          language: 'en',
          // fluid: true,
          aspectRatio: '16:7',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [],
          poster: '',
        },
        userInfo: {
          userId: 'local',
          type: 1,
        },
        comments: [],
        userLiked: ['C001', 'C002'],
      }
    },
    methods: {
      formatDevices(arr) {
        let devicesStr = ''
        if(arr && arr.length !== 0) {
          arr.forEach((item) => {
            devicesStr += `${item}; `
          })
        }
        else{
          devicesStr = '暂无设备信息'
        }
        return devicesStr
      },
      formatDuration(seconds) {
        let sed = seconds % 60;
        let minutes = ( seconds - sed ) / 60;
        return `${minutes}分${sed}秒`
      },
      cancelLike(id) {
        let index = this.userLiked.indexOf(id)
        this.userLiked.splice(index, 1)
      },
      confirmLike(id) {
        this.userLiked.push(id)
      },
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // seek to 10s
        this.playerOptions.poster = this.videoInfo.videoCoverImg
        this.playerOptions.sources[0] = {
          type: "video/mp4",
          src: `http://v.icinext.com/${this.videoInfo.vid_sd}`
        }
        player.currentTime(10)
      }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    mounted() {
    },
    async created() {
      this.currentVid = this.$route.params.vid
      const res = await this.axios.get(`//www.icinext.com:9099/api/get/videoInfo/${this.currentVid}`)
      const userInfo = JSON.parse(this.utils.getCookie('userInfo'))
      if(userInfo) {
        this.userInfo.userId = userInfo.userId
      }
      if(res.data.code === 0) {
        console.log(res.data)
        this.videoInfo = res.data.data
      }
      else{
        alert("视频加载失败,请重试")
      }
      const resComments = await this.axios.get(`//www.icinext.com:9099/api/get/comments/${this.currentVid}`)
      if(resComments.data.code === 0) {
        console.log(resComments.data)
        this.comments = resComments.data.data
      }
    },
  }
</script>

<style scoped>
  .el-container{
    flex-direction: column;
  }
  .video-player-container{
    width: 100%;
    margin: 60px auto 0;
  }
  .video-title{
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .editor-intro-text{
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 27px;
    color: #5e6b6bc4;
    max-width: 90%;
  }
  .director-intro-text{
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 27px;
    color: #5e6b6bc4;
    max-width: 90%;
  }
  .intro-title-text{
    color: #d7d9dc;
    font-size: 18px;
    margin-top: 20px;
  }
  .device-intro-text{
    color: #5e6b6bc4;
    font-size: 16px;
    font-weight: bold;
  }
  .video-info-container{
    height: 500px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    /*background-color: #f1edf359;*/
  }
  .intro-info{
    flex: 5;
    /*border-right: 1px solid #ccc;*/
    padding: 20px;
  }
  .progress-box {
    display: flex;
    flex-direction: row;
  }
  .progress-item{
    flex: 1;
    text-align: center;
    position: relative;
  }
  .progress-score-text{
    position: absolute;
    top:30px;
    left: 41%;
    font-size: 17px;
    font-weight: bold;
  }
  .progress-item-text{
    display: inline-block;
    color: #8c939d;
    text-align: center;
    margin-top: 10px;
    font-size: 15px;
  }
  /*base-info styles */
  .base-info{
    flex: 2;
    flex-direction: column;
    padding: 10px 30px;
  }
  .box-title{
    color: #d7d9dc;
    display: inline-block;
    margin-bottom: 10px;
    margin-top: 25px;
  }
  .box-text{
    color: #5e6b6bc4;
    font-weight: bold;
  }
  .director-box{
    flex: 2;
  }
  .author-box{
    flex: 4;
  }
  .author-name-text{
    display: inline-block;
    width: 49%;
    margin-bottom: 8px;
  }
  .author-box:last-child{
    margin-bottom: 0px;
  }
  .times-box{
    display: flex;
    flex: 2;
    flex-direction: row;
  }
  .times-box-inner{
    flex: 1;
  }
  .date-box{
    flex: 2;
  }
  .share-box{
    flex: 1;
  }

  /*base-info styles */
  .score-info-container{
    width: 80%;
    margin: 10px auto;
    padding: 20px;
    box-sizing: border-box;
  }
  /*comments-container styles*/
  .comments-container{
    width: 80%;
    margin: 10px auto;
    margin-bottom: 30px;
    /*background-color: #f1edf359;*/
    min-height: 100px;
    padding: 20px;
    box-sizing: border-box;
  }
  .comments-title-text{
    font-size: 20px;
    padding-left: 20px;
    /*color: #d7d9dc;*/
  }
  .comments-box{
    border-top: 1px solid #ccc;
    /*max-height: 500px;*/
    /*overflow: scroll;*/
  }
  .comment-item{
    max-height: 100px;
    display: flex;
    flex-direction: row;
    margin-top: 40px;
  }
  .no-comment-text{
    padding: 20px;
    font-size: 18px;
    color: #bcc3b4;
  }
  .author-avator{
    flex: 1;
    text-align: center;
    padding-top: 10px;
  }
  .author-avator img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .comment-info{
    flex: 9;
  }
  .user-info{
    margin-bottom: 10px;
    color: #51bb65;
    font-size: 15px;
    /*width: 80%;*/
  }
  .comment-text{
    font-size: 15px;
    color: #8c8585d9;
    /*width: 80%;*/
    display: -webkit-box;
    line-height: 28px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .like-num-text{
    float: right;
  }
  .like-icon{
    margin-left: 18px;
    font-size: 18px;
    cursor: pointer;
    color: #ccc;
  }
  .liked-icon{
    margin-left: 18px;
    font-size: 17px;
    cursor: pointer;
  }
  /*comments-container styles end*/
  .fade-enter-active, .fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
    /*transform: translateY(30px);*/
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 1s;
  }
  .slide-enter, .slide-leave-to {
    opacity: 0;
    transform: translateX(5px);
  }
</style>
