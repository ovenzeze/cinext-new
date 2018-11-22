<template>
  <div class="header-container">
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
    <el-menu-item index="/newslist">阅读</el-menu-item>
  </el-menu>
    <div class="login-container">
      <div v-if="userInfo === null">
        <router-link to="/login">
          <span class="login">登录</span>
        </router-link>
        <router-link to="/register">
          <span class="register">注册</span>
        </router-link>
      </div>
      <div v-else>
        <span class="author-avator">
          <img :src="userInfo.authorAvator"/>
        </span>
        <span class="user-name">{{userInfo.userName}}</span>
        <span class="register" @click="loginOut">退出</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 'index',
        fixedBarColor: '#333',
        userInfo: null
      };
    },
    methods: {
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if (scrollTop < 420 && this.activeIndex == '/index') {
            this.fixedBarColor = 'transparent'
          }
          else {
            this.fixedBarColor = '#333'
          }
      },
      loginOut() {
        this.utils.setCookie('token', 'a', -1)
        this.utils.setCookie('userInfo', 'a', -1)
        this.userInfo = null

      },
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
        // 检查登录态
        const token = this.utils.getCookie('token')
        if(token !== null) {
          this.userInfo = JSON.parse(this.utils.getCookie('userInfo'))
          console.log('currentRoute =',this.$route.path, 'token =', token, 'userInfo =', this.userInfo)
        }
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
    created() {
      const token = this.utils.getCookie('token')
      if(token !== null) {
        this.userInfo = JSON.parse(this.utils.getCookie('userInfo'))
        console.log('token =', token)
        console.log('userInfo =', this.userInfo)
      }
    }
  }
</script>

<style scoped>
  .header-container{
    position: relative;
  }
  .logo-container {
    display: inline-block;
    margin: 0px 45px;
    padding-top: 10px;
    float: left;
    border: none;
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
    font-weight: 400;
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
    position: relative;
    top: -60px;
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
  .author-avator{
    display: inline-block;
  }
  .author-avator img{
    border-radius: 50%;
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
</style>
