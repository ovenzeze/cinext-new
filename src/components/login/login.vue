<template>
  <div class="login-background">
    <transition name="fade" appear>
    <div class="login-container">
    <div class="login-tabs">
      <router-link to="/login">
        <span class="login active">登录</span>
      </router-link>
      <span class="separator">|</span>
      <router-link to="/register">
        <span class="register">注册</span>
      </router-link>
    </div>
    <div class="login-form">
      <transition name="fadeR" appear>
      <el-alert
        v-if="bErrorTipsShow"
        title="账号不存在或密码有误，请重试。"
        type="error" style="width: 95%">
      </el-alert>
      </transition>
      <el-form ref="form" :model="form" size="small" label-width="60px" label-position="top">
        <el-form-item label="账号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <router-link to="/forgetpwd">
          <span class="forget-pwd">忘记密码？</span>
        </router-link>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item label="一周内免登录">
          <el-switch v-model="form.remember"></el-switch>
        </el-form-item>
        <el-form-item class="submit-container">
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    </div>
    </transition>
  </div>
</template>

<script>
  import router from "../../router";

  export default {
    data() {
      return {
        form: {
          name: '',
          pwd: '',
          remember: true,
        },
        bErrorTipsShow: false
      };
    },
    methods: {
      onSubmit: async function () {
        this.bErrorTipsShow = false
        // const loginRes = await this.axios.post('',loginInfo)
        if(this.form.name === 'clayzhang' && this.form.pwd === '123456') {
          const userInfo = JSON.stringify({
            userId: 'test001',
            userName: 'clayzhang',
            authorAvator: 'https://sfault-avatar.b0.upaiyun.com/236/471/2364719857-5b1509b01f946_big64',
          })
          const token = 'zzzzz000000azzzxxxxz'
          this.utils.setCookie('token', token, 7)
          this.utils.setCookie('userInfo', userInfo, 7)
          router.push('/index')
        }
        else{
          this.bErrorTipsShow = true
        }
      },
      SHA1: function () {}
    },

  }
</script>

<style scoped>
  a{
    text-decoration: none;
    color: #666760;
    transition: all 0.5s;
  }
  a:hover{
    color: #dede8a;
  }
  .active{
    color: yellow;
    font-size: 22px;
  }
  .login-background{
    width: 100%;
    height: 650px;
    text-align: center;
    position: relative;
    background-image: url("http://www.dgtle.com/template/dgstyle/cr180_static/images/login/BG.png");
  }
  .login-container{
    width: 260px;
    position: absolute;
    top: 150px;
    right: 130px;
    background-color: rgba(238, 245, 242, 0.7);
    padding: 30px 40px;
  }
  .login-tabs{
    font-size: 21px;
    cursor: pointer;
  }
  .active{
    color: yellow;
  }
  .login-form{
    margin-top: 30px;
    text-align: left;
  }
  .forget-pwd{
    float: right;
    font-size: 13px;
    margin-right: 10px;
    font-weight: bold;
    margin-top: 8px;
    transition: all 0.5s;
  }
  .forget-pwd:hover{
    color: black;
  }
  .login-form .el-input{
    width: 250px;
  }
  .submit-container{
    text-align: center;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .8s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(300px);
  }
  .fadeR-enter-active, .fadeR-leave-active {
    transition: all .4s;
  }
  .fadeR-enter, .fadeR-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(150px);
  }
</style>
