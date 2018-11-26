<!--suppress ALL -->
<template>
  <div class="login-background">
    <transition name="fade" appear>
      <div v-if="!isResetPwd" class="login-container">
        <div class="login-tabs">
          <span class="login-text">登录Cinext</span>
        </div>
        <div class="login-form">
          <transition name="fadeR" appear>
            <el-alert
              v-if="bErrorTipsShow"
              title="账号不存在或密码有误，请重试。"
              type="error"
              class="alertBox">
            </el-alert>
          </transition>
          <el-form ref="form" :model="form" size="medium" label-width="80px" label-position="left">
            <el-form-item label="账号">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <!--<span class="forget-pwd">忘记密码？</span>-->
              <el-input type="password" v-model="form.pwd">
                <el-button slot="append" style="padding: 2px 2px 2px 8px; font-size: 12px;" @click="isResetPwd = !isResetPwd">忘记密码？</el-button>
              </el-input>
            </el-form-item>
            <el-form-item label="有效期">
              <el-switch v-model="form.remember"
                         active-text="七天免登录"
                         inactive-text="单次免登录"></el-switch>
            </el-form-item>
            <el-form-item class="submit-container">
              <el-button type="primary" class="loginBtn" @click="onSubmit">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div v-else class="login-container">
        <div class="login-tabs">
          <span class="login-text">找回密码</span>
        </div>
        <div class="login-form">
          <transition name="fadeR" appear>
            <el-alert
              v-if="bErrorTipsShow"
              title="账号不存在或密码有误，请重试。"
              type="error"
              class="alertBox">
            </el-alert>
          </transition>
          <el-form ref="form" :model="form" size="medium" label-width="80px" label-position="left">
            <el-form-item label="账号">
              <el-input v-model="resetMail" placeholder="请输入你的注册邮箱"></el-input>
            </el-form-item>
            <el-form-item class="submit-container">
              <el-button type="primary" class="loginBtn" @click="resetPwd">找回密码</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </transition>
    <el-dialog title="请查收邮件" :visible.sync="isCheckMailModalShow">
      <div class="content-box">
      <div class="check-mail-icon">
      <i class="el-icon-success" style="font-size: 35px;"></i>
      </div>
      <div class="check-mail-text">
      <p>密码重置邮件已经发送到
        <span class="reset-mail">{{resetMail}}</span>
      <br>如果没有收到邮件，请在一分钟后点击
        <span class="resend-mail" @click="resendMail">重新发送</span>
        </p>
      </div>
      </div>
    </el-dialog>


    <div class="nav-tips-box">
      <span>还没有账号？</span>
      <router-link to="/register">
        <span class="login">立即注册</span>
      </router-link>
    </div>
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
        bErrorTipsShow: false,
        isResetPwd: false,
        resetMail: '',
        isCheckMailModalShow: false
      };
    },
    methods: {
      onSubmit: async function () {
        this.bErrorTipsShow = false
        const password = `cinext|${this.form.pwd}`
        const loginInfo = {
          mail: this.form.name,
          password: this.utils.hexSha1(password),
          validateTime: '168',
        }
        console.log('loginInfo =', loginInfo)
        const loginRes = await this.axios.post('//www.icinext.com:9099/api/post/login', loginInfo)
        console.log('Status', loginRes.status, 'Data:', loginRes.data)
        if (loginRes.data.code === 0) {
          const token = loginRes.data.userid
          const userInfoRes = await this.axios.get(`//www.icinext.com:9099/api/get/userInfo/${token}`)
          console.log('userInfoRes:',userInfoRes)
          const userInfo = JSON.stringify({
            userId: loginRes.data.userid,
            userName: this.form.name,
            authorAvator: userInfoRes.authorAvator,
          })
          this.utils.setCookie('token', token, 7)
          this.utils.setCookie('userInfo', userInfo, 7)
          router.push('/index')
        }
        else {
          this.bErrorTipsShow = true
        }
      },
      resetPwd: async function () {
        const mail = this.resetMail
        if(!mail) {
          this.$message({
            showClose: true,
            message: '邮箱地址不存在，请检查后重试。',
            type: 'warning'
          })
        }
        this.isCheckMailModalShow = true


      },
      resendMail: async function () {
        this.$message({
          showClose: true,
          message: '密码重置邮件已重新发送，请查收',
          type: 'info'
        })
      },
      SHA1: function () {
      }
    },

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
    /*width: 100%;*/
    /*height: 100%;*/
    margin-top: 100px;
    text-align: center;
    /*position: relative;*/
    /*!*margin-top: 100px;*!*/
    /*text-align: center;*/
    /*position: relative;*/
    /*background-size: cover;*/
    /*background-image: url("http://www.dgtle.com/template/dgstyle/cr180_static/images/login/BG.png");*/
  }

  .login-container {
    width: 380px;
    position: relative;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    /*position: absolute;*/
    background-color: rgb(255, 255, 255);
    padding: 30px 40px;
    transition: all 1.5s;
  }

  .login-text {
    font-size: 21px;
    letter-spacing: 1px;
    font-weight: bold;
  }

  .active {
    color: yellow;
  }

  .login-form {
    margin-top: 30px;
    text-align: left;
    transition: all 1.5s;
  }

  .forget-pwd {
    position: absolute;
    float: right;
    font-size: 13px;
    margin-right: 10px;
    font-weight: bold;
    margin-top: 8px;
    transition: all 0.5s;
  }

  .forget-pwd:hover {
    color: black;
  }

  .login-form .el-input {
    width: 250px;
  }

  .submit-container {
    text-align: center;
    margin-right: 50px;
  }

  .nav-tips-box {
    margin-top: 50px;
    font-size: 15px;
  }

  .loginBtn {
    width: 100%;
  }

  .alertBox {
    width: 66%;
    margin-left: 21%;
    margin-bottom: 20px;
  }
  .content-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .check-mail-icon{
    width: 10%;
  }
  .check-mail-text{
    width: 60%;
    font-size: 15px;
  }
  .reset-mail{
    font-size: 17px;
    font-weight: bold;
    color: #629edc;
  }
  .resend-mail{
    font-weight: bold;
    color: #e0d283;
    cursor: pointer;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 1.5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0.3;
    transform: translateX(80px);
  }

  .fadeR-enter-active, .fadeR-leave-active {
    transition: all 1.4s;
  }

  .fadeR-enter, .fadeR-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0.3;
    transform: translateX(80px);
  }
</style>
