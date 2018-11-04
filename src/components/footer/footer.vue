<template>
  <div>
  <el-row :gutter="20">
    <el-col :span="8"><div class="grid-content cinext">
      <p>让每一颗电影的种子都能发芽</p>
      <el-button type="info">作品分享</el-button>
      <br>
      <el-button type="info">加入我们</el-button>
    </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content about">
      <p class="title">投诉建议</p>
      <p class="email">service@cinext.com</p>
      <!--<p class="title">商业合作</p>-->
      <!--<p class="email">cinext@cinext.com</p>-->
      <p class="title">联系我们</p>
      <p class="email">cinext@cinext.com</p>
    </div>
    </el-col>
    <el-col :span="8"><div class="grid-content social">
      <p>关注我们</p>
      <el-popover
        ref="weixin"
        placement="top"
        transition="el-zoom-in-top"
        trigger="hover">
        <div class="qrcode">
        <img src="@/assets/weixin.jpg" alt="">
        </div>
      </el-popover>
      <svg class="icon" aria-hidden="true" v-popover:weixin>
        <use xlink:href="#icon-weixin"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-weibo"></use>
      </svg>
      <br>
      <el-popover
        ref="ios"
        placement="top"
        transition="el-zoom-in-top"
        trigger="hover">
        <div class="qrcode">
          <img src="@/assets/weixin.jpg" alt="">
        </div>
      </el-popover>
      <svg class="icon" aria-hidden="true" v-popover:ios>
        <use xlink:href="#icon-ios"></use>
      </svg>
      <el-popover
        ref="android"
        placement="top"
        transition="el-zoom-in-top"
        trigger="hover">
        <div class="qrcode">
          <img src="@/assets/weixin.jpg" alt="">
        </div>
      </el-popover>
      <svg class="icon" aria-hidden="true" v-popover:android>
        <use xlink:href="#icon-googleplay"></use>
      </svg>
    </div></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="24"><div class="grid-content copyright">
      <p>Copyright © 2018 Cinext 沪ICP备 15040869号-2 </p>
      <p>上海有影互联网科技有限公司</p>
    </div></el-col>
  </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row {
    margin: 20px 0;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .grid-content {
    border-radius: 4px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #333;
  }
  .cinext{
    padding: 0 40px;
    line-height: 80px;
  }
  .cinext p{
    line-height: 30px;
    font-weight: 500;
  }
  .cinext .el-button{
    color: #999;
    background-color: #443d3d;
    border: none;
    cursor: pointer;
    width: 180px;
    font-size: 15px;
    font-weight: 400;
    transition: all 0.3s;
  }
  .cinext .el-button:hover{
    color: whitesmoke;
    font-size: 16px;
    text-shadow: 2px 3px 5px rgba(0, 0, 0, 1);
  }
  .about{
    padding: 0 40px;
  }
  .about .title{
    line-height: 50px;
    font-weight: 500;
  }
  .about .email{
    line-height: 20px;
    color: #999;
    font-size: 15px;
    hover: floralwhite;
    cursor: pointer;
    transition: all 0.3s;
  }
  .about .email:hover{
    color: whitesmoke;
    font-size: 16px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1)
  }
  .social{
    padding: 0 35px;
    line-height: 90px;
  }
  .social p{
    line-height: 30px;
    font-weight: 500;
  }
  .el-popover{
    min-width: 0;
  }
  .qrcode img{
    width: 150px;
  }
  .social .icon{
    font-size: 35px;
    line-height: 30px;
    margin:0 20px;
    color: #999;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
  }
  .social .icon:hover{
    color: whitesmoke;
    font-size: 37px;
    text-shadow: 2px 3px 5px #999
  }
  .copyright p{
    line-height: 30px;
    margin: 0;
    font-size: 14px;
    color: #999;
  }
</style>
