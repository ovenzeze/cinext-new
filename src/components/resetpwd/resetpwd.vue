<!--suppress ALL -->
<template>
  <div class="login-background">
    <transition name="fade" appear>
      <div class="login-container">
        <div class="login-tabs">
          <span class="login-text">重置密码</span>
        </div>
        <div class="login-form">
          <el-form :model="form" ref="form" status-icon :rules="rules2" size="medium" label-width="100px"
                   label-position="right">
            <el-form-item label="新密码" prop="pass">
              <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="重复新密码" prop="checkPass">
              <el-input type="password" v-model="form.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item class="submit-container">
              <el-button type="primary" class="loginBtn" @click="resetPwd('form')">重置密码</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </transition>
    <el-dialog title="密码重置成功" :visible.sync="isResetSuccModalShow">
      <div class="content-box">
        <div class="check-mail-icon">
          <i class="el-icon-success" style="font-size: 35px;"></i>
        </div>
        <div class="check-mail-text">
          <p>密码已重置,请保存好新密码,尝试
            <router-link to='/login/' class="resend-mail">
              重新登录
            </router-link>
            <br>
            <span class="resend-mail">{{changeGap}}s</span>
            后自动跳转到登录页

          </p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import router from "../../router";

  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(!(/^[\w_-]{6,16}$/.test(value))) {
          callback(new Error('密码必须为6位以上,包含数字、字母或特殊字符'))
        }
        else {
          if (this.rules2.checkPass !== '') {
            this.$refs.form.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        form: {
          pass: '',
          checkPass: ''
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ]
        },
        isResetSuccModalShow: false,
        changeGap: 3
      };
    },
    methods: {
      resetPwd: function (formName) {
        this.$refs[formName].validate(async (valid) => {
          if (!valid) {
            return false
          }else{
            const pwd = this.form.pass,
              uid = this.$route.query.uid
            const bResetSucc = await this.resetPwdAction(uid, pwd)
            if(bResetSucc) {
              this.isResetSuccModalShow = true
              setInterval(() => {
                this.changeGap--
              }, 1000)
              setTimeout(() => {
                this.$router.push('/login/')
              }, this.changeGap * 1000)
            }else{
              this.$message({
                showClose: true,
                message: '重置密码出错,请重试',
                type: 'error'
              })
            }
          }
        })
      },
      resetPwdAction: async function (uid, pwd) {
        try{
          let bResetSucc = false
          const resetPwdRes = await this.axios.get(`//www.icinext.com:9099/api/get/updatePass/${uid}/${pwd}`)
          if(resetPwdRes.data.code === 0) {
            bResetSucc = true
          }
          return bResetSucc
        }
        catch(err) {
          return false
        }
      }
    },
    created() {
      console.log('path:', this.$route.query)

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
    margin-top: 100px;
    text-align: center;
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
    margin-right: 30px;
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

  .check-mail-icon {
    width: 10%;
  }

  .check-mail-text {
    width: 60%;
    font-size: 15px;
  }

  .reset-mail {
    font-size: 17px;
    font-weight: bold;
    color: #629edc;
  }

  .resend-mail {
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
