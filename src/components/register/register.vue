<template>
  <div class="login-background">
    <transition name="fade" appear>
    <div class="login-container">
      <div class="login-tabs">
        <router-link to="/login">
          <span class="login">登录</span>
        </router-link>
        <span class="separator">|</span>
        <router-link to="/register">
          <span class="register active">注册</span>
        </router-link>
      </div>
      <div class="login-form">
        <el-form ref="form" :model="form" :rules="registerRules" status-icon size="small" label-width="80px" label-position="left">
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
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="form.pwd" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="重复密码" prop="checkPass">
            <el-input type="password" v-model="form.checkPwd" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户协议">
            <el-switch v-model="form.remember"></el-switch>
          </el-form-item>
          <el-form-item class="submit-container">
            <el-button type="primary">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (this.form.pwd === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerRules.checkPass !== '') {
            this.$refs.form.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (this.form.checkPwd === '') {
          callback(new Error('请再次输入密码'));
        } else if (this.form.checkPwd !== this.form.pwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        form: {
          email: '',
          name: '',
          pwd: '',
          checkPwd: '',
          remember: true,
        },
        registerRules: {
          pass: [
            { required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            {required: true, validator: validatePass2, trigger: 'blur'}
          ],
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

  .login-background {
    width: 100%;
    height: 650px;
    text-align: center;
    position: relative;
    background-image: url("http://www.dgtle.com/template/dgstyle/cr180_static/images/login/BG.png");
    background-size: cover;
  }

  .login-container {
    width: 380px;
    position: absolute;
    top: 150px;
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
    width: 280px;
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
  .fade-enter-active, .fade-leave-active {
    transition: all .8s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(300px);
  }
</style>
