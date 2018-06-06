<template>
  <el-card class="recom-container">
    <img :src='recomInfo.coverUrl' class="recom-image">
    <div class="recom-intro">
      <el-row class="video-base-info">
        <h3 class="video-title">{{recomInfo.title}}</h3>
        <p class="video-desc">{{recomInfo.desc}}</p>
      </el-row>
      <!--暂时没有创作者和主要设备信息-->
      <!--<el-row>-->
        <!--<el-col :span="5">-->
          <!--<span class="title">创作者</span>-->
          <!--<br>-->
          <!--<span class="content">{{recomInfo.author}}</span>-->
        <!--</el-col>-->
        <!--<el-col :span="19">-->
          <!--<span class="title">主要设备</span>-->
          <!--<br>-->
          <!--<span class="content">{{formatDevices}}</span>-->
        <!--</el-col>-->
      <!--</el-row>-->
      <el-row  class="video-extra-info">
        <el-col :span="5">
          <span class="title">时长</span>
          <br>
          <span class="content">{{formatDuration}}</span>
        </el-col>
        <el-col :span="5">
          <span class="title">播放次数</span>
          <br>
          <span class="content">{{recomInfo.playTimes}}次</span>
        </el-col>
        <el-col :span="6">
          <span class="title">标签</span>
          <br>
          <span class="content">{{formatTags}}</span>
        </el-col>
        <el-col :span="8">
          <a href="//www.baidu.com">
          <el-button type="text" class="button">立即观看</el-button>
          </a>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
  export default {
    data() {
      return {
        recomInfo: {},
      }
    },
    computed: {
      formatDevices: function () {
        let devicesStr = ''
        if(this.recomInfo.devices) {
          this.recomInfo.devices.forEach((item) => {
            devicesStr += `${item} ; `
          })
        }
        else{
          devicesStr = "未知"
        }
        return devicesStr
      },
      formatDuration: function () {
        const duration = this.recomInfo.videoDuration
        const second = duration % 60
        const minute = (duration - second) / 60
        return `${minute}:${second}`
      },
      formatTags: function () {
        if(this.recomInfo.tags) {
          const tagsArr = this.recomInfo.tags.split(",")
          let tagsStr = ''
          tagsArr.forEach((item) => {
            tagsStr += `${item} , `
          })
          return tagsStr.replace(/, $/, '')
        }
      },
    },
    async created() {
//      const res = await this.axios.get('//clayz.top:8082/api/get/ciRecom')
      const res = await this.axios.get('//www.icinext.com:9099/api/get/cirecom')
      console.log('cirecom',res)
      if(res.data.code == 0) {
        this.recomInfo = res.data.data
      }
//      else{
//        alert("加载失败")
//      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .recom-container{
    width: 88%;
    margin: 20px auto;
  }
  .recom-container .recom-image{
    width: 540px;
    height: 300px;
  }
  .recom-container .recom-intro{
    width: 50%;
    float: right;
    padding: 0;
    /*display: flex;*/
  }
  .recom-intro .video-title{
    margin-top: 0;
  }
  .recom-intro .el-row{
    padding-left: 20px;
  }
  .recom-intro .video-base-info{
    height: 150px;
  }
  .recom-intro .video-extra-info{
    height: 150px;
  }
  .recom-intro .video-desc{
    max-width: 90%;
    line-height: 30px;
    letter-spacing: 2px;
  }
  .recom-intro .title{
    font-size: 16px;
    display: inline-block;
    margin: 15px 0;
    color: #d6cfcf;
  }
  .recom-intro .content{
    font-size: 16px;
    display: inline-block;
    margin: 5px 0;
    color: #9e8989;
  }
  .recom-intro .el-button{
    border: 2px solid #00ff00;
    margin-top: 42px;
    border-radius: 0;
    font-size: 15px;
    padding: 10px 20px;
    transition: all 0.5s;
  }
  .recom-intro .el-button:hover{
    font-size: 16px;
    padding: 12px 22px;
    border: 2px solid #00ff00;
  }
</style>
