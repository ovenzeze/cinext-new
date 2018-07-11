<template>
  <div id="app">
    <el-container>
      <el-header class="fixed-header" :height="'100'">
        <router-view name="header"></router-view>
      </el-header>
      <el-main>
        <router-view name="main"></router-view>
      </el-main>
      <el-footer :height="'80'">
        <router-view name="footer"></router-view>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif !important;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }
#app .icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
  body{
    margin: 0;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .fixed-header{
    position: fixed;
    top: 0px;
    z-index: 1001;
    padding: 0;
    width: 100%;
  }
  .el-main {
    padding: 0;
    min-height:650px;
    background-color: rgb(247, 247, 247);
  }
  .el-footer {
    background-color: #333;
    text-align: center;
    color: floralwhite;
  }
</style>
