<template>
  <div class="login-background">
    <transition name="fade" appear>
      <div class="login-container">
        <div class="login-tabs">
          <!--<router-link to="/login">-->
          <!--<span class="login">注册</span>-->
          <!--</router-link>-->
          <!--&lt;!&ndash;<span class="separator">|</span>&ndash;&gt;-->
          <!--<router-link to="/register">-->
          <!--<span class="register active">Cinext</span>-->
          <!--</router-link>-->
          <span class="login-text">注册Cinext</span>
        </div>
        <div class="login-form">
          <el-form ref="form" :model="form" :rules="registerRules" status-icon size="small" label-width="80px"
                   label-position="left">
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
              <el-switch v-model="form.remember"
                         active-text="同意"
                         inactive-text="不同意"></el-switch>
            </el-form-item>
            <el-form-item class="submit-container">
              <el-button size="medium" class="registerBtn" type="primary" @click="onSubmit">立即注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </transition>
    <div class="nav-tips-box">
      <span>已有账号？</span>
      <router-link to="/login">
        <span class="login">立即登录</span>
      </router-link>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      const validatePass = (rule, value, callback) => {
        if (this.form.pwd === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerRules.checkPass !== '') {
            this.$refs.form.validateField('checkPass');
          }
          callback();
        }
      };
      const validatePass2 = (rule, value, callback) => {
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
            {required: true, validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {required: true, validator: validatePass2, trigger: 'blur'}
          ],
        },
      };
    },
    methods: {
      onSubmit: async function () {
        const keyMix = `cinext|${this.form.email}`
        const registerInfo = {
          mail: this.form.email,
          password: this.form.pwd,
          username: this.form.name,
          key: this.utils.hexSha1(keyMix)
        }
        console.log('loginInfo =', registerInfo)
        const registerRes = await this.axios.post('//www.icinext.com:9099/api/post/register', registerInfo)
        console.log( 'Status',registerRes.status, 'Data:',registerRes.data)
        if(registerRes.data.code === 0) {
          const password = `cinext|${this.form.pwd}`
          const loginInfo = {
            mail: this.form.email,
            password: this.utils.hexSha1(password),
            validateTime: '168',
          }
          const loginRes = await this.axios.post('//www.icinext.com:9099/api/post/login', loginInfo)
          const token = loginRes.data.userid
          const userInfoRes = await this.axios.get(`//www.icinext.com:9099/api/get/userInfo/${token}`)
          const userInfo = JSON.stringify({
            userId: loginRes.data.userid,
            userName: this.form.name,
            authorAvator: userInfoRes.authorAvator,
          })
          this.utils.setCookie('token', token, 7)
          this.utils.setCookie('userInfo', userInfo, 7)
          router.push('/index')
        }
        else{
          this.$alert('注册失败，请重试。', '提示', {
            confirmButtonText: '确定'
          })
        }
      }
    }
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
    height: 100%;
    margin-top: 100px;
    text-align: center;
    position: relative;
    /*background-image: url("http://www.dgtle.com/template/dgstyle/cr180_static/images/login/BG.png");*/
    /*background-size: cover;*/
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
    transition: all 0.5s;
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
  }

  .login-form .el-input {
    width: 280px;
  }

  .submit-container {
    text-align: center;
    margin-right: 20px;
  }

  .registerBtn {
    width: 100%;
  }

  .nav-tips-box {
    margin-top: 50px;
    font-size: 15px;
  }

  /*.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{*/
  /*margin-bottom: 0;*/
  /*}*/
  .el-form-item label {
    padding: 0px !important;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 1.5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0.3;
    transform: translateX(80px);
  }
</style>
