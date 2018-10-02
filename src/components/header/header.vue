<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo"
           mode="horizontal"
           :background-color='this.fixedBarColor'
           text-color="#fff"
           active-text-color="#ffd04b"
           :router=true>
    <div index="0" class="logo-container">
      <img src="@/assets/logo.png" alt="">
    </div>
    <el-menu-item index="/index">Cinext</el-menu-item>
    <!--<el-menu-item index="festival">Cine Next 青年影展</el-menu-item>-->
    <el-menu-item index="/newslist">阅读</el-menu-item>
    <!--<el-menu-item index="comment">在线评审</el-menu-item>-->
    <div class="login-container">
      <router-link to="/login">
        <span class="login">登录</span>
      </router-link>
      <router-link to="/register">
        <span class="register">注册</span>
      </router-link>
    </div>
  </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 'index',
        fixedBarColor: '#333'
      };
    },
    methods: {
      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if (scrollTop < 420 && this.activeIndex == '/index') {
            this.fixedBarColor = 'transparent'
          }
          else {
            this.fixedBarColor = '#333'
          }
      }
    },
    mounted() {
      if(this.$route.path == '/index') {
        this.fixedBarColor = 'transparent'
      }
      window.addEventListener('scroll', this.handleScroll)
      this.activeIndex = this.$route.path
    },
    watch: {
      '$route': function () {
        const routerName = this.$route.path
        this.activeIndex = routerName
        if(routerName == "/index") {
          this.fixedBarColor = 'transparent'
        }
        else{
          this.fixedBarColor = '#333'
        }
      }
    },
  }
</script>

<style scoped>
  .logo-container {
    display: inline-block;
    margin: 0px 45px;
    padding-top: 10px;
    float: left;
  }

  .logo-container img {
    /*margin-bottom: 10px;*/
    width: 80px;
    height: 40px;
  }

  .el-menu {
    background-color: #999;
  }

  .el-menu--horizontal {
    border-bottom: none;
  }

  .el-menu--horizontal .is-active {
    background-color: transparent;
  }

  .el-menu--horizontal > .el-menu-item {
    height: 60px;
    line-height: 60px;
    transition: all 0.3s;
    font-size: 15px;
    font-weight: 450;
    /*background-color: transparent;*/
  }

  .el-menu--horizontal > .el-menu-item:hover {
    font-size: 16px;
    font-weight: 500;
    color: #9c8d62 !important;
    background-color: transparent !important;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
  }
  .login-container{
    float: right;
    margin-right: 70px;
  }
  .login-container span{
    display: inline-block;
    line-height: 60px;
    color: #ccc;
    font-size: 16px;
    margin-left: 20px;
    transition: all 0.5s;
    cursor: pointer;
  }
  .login-container span:hover{
    font-size: 17px;
    color: #9c8d62;
  }
</style>
