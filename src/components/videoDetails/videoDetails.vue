<template>
  <el-container>
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
    <div class="video-info-container">
      <div class="intro-info">
        <p class="video-title">这是一个标题，主标题</p>
        <h3 class="intro-title-text">小编说</h3>
        <p class="editor-intro-text">这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。这是编辑写的导语，最多显示三行。</p>
        <h3 class="intro-title-text">创作人说</h3>
        <p class="director-intro-text">这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。这是导演写的介绍，最多显示五行。</p>
        <h3 class="intro-title-text">使用设备</h3>
        <p class="device-intro-text">SONY ILCE-7R ; Canon EOS-1D Mark III ;</p>
      </div>


      <div class="base-info"></div>
    </div>
  </el-container>
</template>

<script>
  import 'video.js/dist/video-js.css'
  import './custom-theme.css'
  import { videoPlayer } from 'vue-video-player'

  export default {
    components: {
      videoPlayer,
    },
    data() {
      return {
        playerOptions: {
          height: '560',
          autoplay: true,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            // mp4
            src: "http://vjs.zencdn.net/v/oceans.mp4",
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
        }
      }
    },
    methods: {
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
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
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
        console.log('example player 1 readied', player)
        player.currentTime(10)
        // console.log('example 01: the player is readied', player)
      }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    mounted() {
    },
  }
</script>

<style scoped>
  .el-container{
    flex-direction: column;
  }
  .video-player-container{
    margin: 60px auto;
    width: 100%;
    margin-bottom: 0;
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
    color: #a5a9a9e6;
    max-width: 90%;
  }
  .director-intro-text{
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 27px;
    color: #a5a9a9e6;
    max-width: 90%;
  }
  .intro-title-text{
    color: #8c939d;
    font-size: 20px;
    margin-top: 40px;
  }
  .device-intro-text{
    color: #a5a9a9e6;
    font-size: 16px;
    font-weight: bold;
  }
  .video-info-container{
    height: 600px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    background-color: #f1edf359;
  }
  .intro-info{
    flex: 5;
    border-right: 1px solid #ccc;
    padding: 20px;
  }
  .base-info{
    flex: 2;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .8s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
    transform: translateY(300px);
  }
</style>
