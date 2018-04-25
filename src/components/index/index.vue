<template>
  <el-container>
    <el-header :height="100">
      <router-view name="header"></router-view>
    </el-header>
    <el-main>
      <router-view name="main"></router-view>
    </el-main>
    <el-footer :height="80">
      <router-view name="footer"></router-view>
    </el-footer>
  </el-container>
</template>

<script>
  import header from '@/components/header/header'
  import footer from '@/components/footer/footer'
  import main from '@/components/main/main'
  export default {
    name: 'index',
    components: {
      'page-header': header,
      'page-footer': footer,
      'page-main': main,
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  .el-header {
    padding: 0;
  }
  .el-footer {
    background-color: #333;
    text-align: center;
    color: floralwhite;
  }
</style>
