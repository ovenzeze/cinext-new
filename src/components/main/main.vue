<template>
  <div>
    <el-carousel height="500px">
      <el-carousel-item v-for="item in slideArr" :key="item.title">
        <div class="intro" v-if="!item.noTextIntro">
        <h3 class="post-title">不二</h3>
          <p class="post-desc">
            以平行蒙太奇和交叉蒙太奇的双重表现手法来展现三个少女之间的故事。要离开上海的少女a与赴朋友之约的少女b。</p>
          <a href="//www.baidu.com">
            <el-button plain>立刻观看</el-button>
          </a>
        </div>
        <div class="play">
          <a href="//www.baidu.com">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-play"></use>
          </svg>
          </a>
        </div>
        <img :src='item.picUrl' :alt="item.title">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slideArr: [
          {
            picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/09/5acb77528ada5.jpg@1920w',
            title: 'slide1',
            noTextIntro: true,
          },
          {
            picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/19/5ad876b00b5bf.jpg@1920w',
            title: 'slide2'
          },
          {
            picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/20/5ad97803dd398.jpg@1920w',
            title: 'slide3'
          },
          {
            picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/18/5ad734e10e00f.jpg@1920w',
            title: 'slide4',
            noTextIntro: true,

          },
        ]
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
    position: relative;
    top: 150px;
    left: 150px;
    position: absolute;
  }
  .el-carousel__item h3 {
    color: #ebeff5;
    font-size: 27px;
    font-weight: 1000;
    margin: 0;
  }
  .el-carousel .post-desc {
    color: white;
    font-size: 20px;
    font-weight: 330;
    line-height: 35px;
  }
  .el-carousel img{
    width: 100%;
    height: 100%;
  }
  .el-carousel .intro .el-button {
    background-color: transparent;
    color: white;
    border-width: 2px;
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
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
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
</style>
