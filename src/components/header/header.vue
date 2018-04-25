<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo"
           mode="horizontal"
           :background-color='this.fixedBarColor'
           text-color="#fff"
           active-text-color="#ffd04b"
           :router=true>
    <el-menu-item index="0" class="logo-container">
      <img src="@/assets/logo.png" alt="">
    </el-menu-item>
    <el-menu-item index="index">Cinext</el-menu-item>
    <el-menu-item index="festival">Cine Next 青年影展</el-menu-item>
    <el-menu-item index="newslist">阅读</el-menu-item>
    <el-menu-item index="review">在线评审</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 'index',
        fixedBarColor: 'transparent'
      };
    },
    methods: {
      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 420) {
          this.fixedBarColor = '#333'
        }
        else {
          this.fixedBarColor = 'transparent'
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
      this.activeIndex = this.$route.path.replace(/\//, '')
    },
    watch: {
      '$route': function () {
        const routerName = this.$route.path.replace(/\//,'')
        this.activeIndex = routerName
      }
    }
  }
</script>

<style scoped>
  .logo-container {
    margin: 0 45px;
    padding: 5px;
  }

  .logo-container img {
    margin-bottom: 20px;
  }

  /*.el-menu{*/
  /*background-color: transparent;*/
  /*}  */
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
    height: 80px;
    line-height: 80px;
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
</style>
