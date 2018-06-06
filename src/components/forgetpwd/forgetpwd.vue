<template>
  <div class="login-background">
    <div class="login-container">
      <div class="login-tabs">
        <span class="active">找回密码</span>
        <p class="tip-text">请输入邮箱或用户名，通过注册邮箱收取邮件重置密码</p>
      </div>
      <div class="login-form">
        <el-form ref="form" :model="form" :rules="registerRules" status-icon size="small" label-width="70px" label-position="top">
          <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
          >
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item
            prop="name"
            label="用户名"
            :rules="[
      { required: true, message: '请输入用户名', trigger: 'blur' }
      ]">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item class="submit-container">
            <el-button type="primary">找回密码</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          pwd: '',
          checkPwd: '',
          remember: true,
        },
      };
    },
    methods: {}
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #666760;
    transition: all 0.5s;
  }

  a:hover {
    color: #dede8a;
  }

  .active {
    color: yellow;
    font-size: 22px;
  }
  .tip-text{
    font-size: 13px;
    color: red;
  }
  .login-background {
    width: 100%;
    height: 650px;
    text-align: center;
    position: relative;
    background-image: url("http://www.dgtle.com/template/dgstyle/cr180_static/images/login/BG.png");
    background-size: cover;
  }

  .login-container {
    width: 320px;
    position: absolute;
    top: 180px;
    right: 130px;
    background-color: rgba(238, 245, 242, 0.7);
    padding: 30px 40px;
    transition: all 0.5s;
  }

  .login-tabs {
    font-size: 21px;
    cursor: pointer;
  }

  .active {
    color: yellow;
  }

  .login-form {
    margin-top: 30px;
    text-align: left;
  }

  .login-form .el-input {
    width: 320px;
  }

  .submit-container {
    text-align: center;
  }

  /*.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{*/
  /*margin-bottom: 0;*/
  /*}*/
  .el-form-item label {
    padding: 0px !important;
  }
</style>
