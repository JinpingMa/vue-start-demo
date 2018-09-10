<template>
    <div class="login-container">
        <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm"
                 label-position="left">
            <div class="title-container">
                <h3 class="title">vue项目demo</h3>
            </div>
            <el-form-item prop="username">
                <span class="svg-container svg-container_login">
                    <svg data-v-c8a70580="" data-v-37dfd6fc="" aria-hidden="true" class="svg-icon"><use
                            data-v-c8a70580="" xlink:href="#icon-user">
                        <svg class="icon" viewBox="0 0 1024 1024" id="icon-user" width="100%" height="100%"><path
                                d="M504.951 511.98c93.49 0 169.28-74.002 169.28-165.26 0-91.276-75.79-165.248-169.28-165.248-93.486 0-169.287 73.972-169.279 165.248-0.001 91.258 75.793 165.26 169.28 165.26z m77.6 55.098H441.466c-120.767 0-218.678 95.564-218.678 213.45V794.3c0 48.183 97.911 48.229 218.678 48.229H582.55c120.754 0 218.66-1.78 218.66-48.229v-13.77c0-117.887-97.898-213.45-218.66-213.45z"
                                p-id="7987"></path></svg></use>
                    </svg>
                </span>
                <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on"
                          placeholder="用户名"/>
            </el-form-item>

            <el-form-item prop="password">
                <span class="svg-container">
                    <svg data-v-c8a70580="" data-v-37dfd6fc="" aria-hidden="true" class="svg-icon"><use
                            data-v-c8a70580="" xlink:href="#icon-password">
                        <svg class="icon" viewBox="0 0 1024 1024" id="icon-password" width="100%" height="100%"><path
                                d="M780.8 354.579692 665.6 354.579692 665.6 311.689846c0-72.310154-19.849846-193.299692-153.6-193.299692-138.870154 0-153.6 135.049846-153.6 193.299692l0 42.889846L243.2 354.579692 243.2 311.689846C243.2 122.249846 348.790154 0 512 0s268.8 122.249846 268.8 311.689846L780.8 354.579692zM588.8 669.420308C588.8 625.900308 554.220308 590.769231 512 590.769231s-76.8 35.131077-76.8 78.651077c0 29.459692 15.399385 54.468923 38.439385 67.820308l0 89.639385c0 21.740308 17.250462 39.699692 38.4 39.699692s38.4-17.959385 38.4-39.699692l0-89.639385C573.44 723.889231 588.8 698.88 588.8 669.420308zM896 512l0 393.609846c0 65.260308-51.869538 118.390154-115.2 118.390154L243.2 1024c-63.291077 0-115.2-53.129846-115.2-118.390154L128 512c0-65.220923 51.869538-118.390154 115.2-118.390154l537.6 0C844.130462 393.609846 896 446.779077 896 512z"
                                p-id="9230"></path></svg>
                    </use></svg>
                </span>
                <el-input name="password" :type="passwordType" @keyup.enter.native="handleLogin"
                          v-model="loginForm.password" autoComplete="on" placeholder="密码"/>
                <span class="show-pwd" @click="showPwd">
                <svg data-v-c8a70580="" data-v-37dfd6fc="" aria-hidden="true" class="svg-icon"><use data-v-c8a70580=""
                                                                                                    xlink:href="#icon-eye">
                        <svg class="icon" viewBox="0 0 1024 1024" id="icon-eye" width="100%" height="100%"><path
                                d="M941.677063 391.710356c9.337669-14.005992 6.224772-32.68133-6.224772-43.575447-14.005992-10.894118-32.68133-7.78122-43.575447 6.224771-1.556449 1.556449-174.300768 205.426673-379.727441 205.426673-199.200878 0-379.727441-205.426673-381.28389-206.982098-10.894118-12.450567-31.124881-14.005992-43.575448-3.112898-12.450567 10.894118-14.005992 31.124881-3.112897 43.575448 3.112897 4.668323 40.46255 46.687322 99.600439 93.375667l-79.369676 82.48155c-12.450567 12.450567-10.894118 32.68133 1.556449 43.575448 3.112897 6.224772 10.894118 9.337669 18.675338 9.337669 7.78122 0 15.562441-3.112897 21.787213-9.337669l85.594447-88.706321c40.46255 28.013007 88.706321 54.469566 141.619438 73.14388L340.959485 707.631586c-4.668323 17.118889 4.669346 34.237779 21.787213 38.906101h9.337669c14.005992 0 26.456558-9.337669 29.568432-23.343661l32.68133-110.494556c24.90011 4.668323 51.356668 7.78122 77.813227 7.78122s52.913117-3.112897 77.813227-7.78122l32.68133 108.938108c3.112897 14.005992 17.118889 23.343661 29.569456 23.343661 3.112897 0 6.224772 0 7.78122-1.556449 17.118889-4.669346 26.456558-21.787212 21.788236-38.906102l-32.68133-108.938108c52.913117-18.675338 101.156888-45.131897 141.619438-73.14388l84.037998 87.150896c6.224772 6.224772 14.005992 9.337669 21.787212 9.337669 7.78122 0 15.562441-3.112897 21.787212-9.337669 12.450567-12.450567 12.450567-31.124881 1.556449-43.575448l-79.369675-82.48155c63.808258-46.688345 101.158934-91.820242 101.158934-91.820242z"
                                p-id="7879"></path></svg>
                    </use></svg>
                </span>
            </el-form-item>
            <div>
            <label class="remember_label" for="autoLogin">
                <input type="checkbox" value="1" name="remember_me" id="autoLogin" checked="checked"/>自动登录
                <a href="#">忘记密码</a>
            </label>

            </div>
            <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading"
                       @click.native.prevent="handleLogin">登录
            </el-button>
        </el-form>
    </div>
</template>

<script>
  // import { isValidateUsername } from '@/utils/validate'

  export default {
    name: 'login',
    data() {
      const validateUsername = (rule, value, callback) => {
        // if (!isValidateUsername(value)) {
        //   callback(new Error('请输入正确的用户名'))
        // } else {
        //   callback()
        // }
        if (value && value.length > 0) {
          callback()
        } else {
          callback(new Error('请输入用户名'))
        }
      }
      const validatePassword = (rule, value, callback) => {
        // if (value.length < 6) {
        //   callback(new Error('密码不能少于6'))
        // } else {
        //   callback()
        // }
        if (value && value.length > 0) {
          callback()
        } else {
          callback(new Error('请输入密码'))
        }
      }
      return {
        loginForm: {
          // username: 'admin',
          username: '',
          password: ''
          // password: 'dsspadmin'
        },
        loginRules: {
          username: [{ required: true, trigger: ['blur', 'change'], validator: validateUsername }],
          password: [{ required: true, trigger: ['blur', 'change'], validator: validatePassword }]
        },
        passwordType: 'password',
        loading: false,
        showDialog: false
      }
    },
    methods: {
      showPwd() {
        this.passwordType === 'password' ? this.passwordType = '' : this.passwordType = 'password'
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
              this.loading = false
              this.$router.push({ path: '/' })
            }).catch((err) => {
              this.loading = false
              this.$refs['loginForm'].resetFields()
              this.$message.error(err.msg || '登录失败')
              // this.$router.push({ path: '/' })
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
    $bg: #2d3a4b;
    $input_bg: rgb(250, 255, 189);
    $light_gray: #eee;
    $font_color: #14171a;

    /* reset element-ui css */
    .login-container {
        .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;
            input {
                background: transparent;
                border: 0px;
                -webkit-appearance: none;
                border-radius: 0px;
                padding: 12px 5px 12px 15px;
                color: $font_color;
                height: 47px;
                &:-webkit-autofill {
                    -webkit-box-shadow: 0 0 0px 1000px $light_gray inset !important;
                    -webkit-text-fill-color: $font_color !important;
                }
            }
        }
        .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.9); //输入框的背景色
            border-radius: 5px;
            color: #454545;
        }
    }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
    $bg: rgb(240, 242, 245);
    $dark_gray: #889aa4;
    $light_gray: #eee;
    $title_color: #14171a;

    .login-container {
        position: fixed;
        height: 100%;
        width: 100%;
        background-color: $bg;
        .login-form {
            position: absolute;
            left: 0;
            right: 0;
            width: 520px;
            padding: 35px 35px 15px 35px;
            margin: 120px auto;
            .remember_label {
                /*margin-left: 12px;*/
                text-align: left;
                color: #14171a;
                line-height: 30px;
                display: block;
                margin-bottom: 22px;
                cursor: pointer;
                font-weight: normal;
                font-size: 14px;
                input {
                    margin: 0;
                    font-size: 12px;
                    margin: 0 5px 0 0;
                }
                a {
                    color: #1c94e0;
                    font-size: 14px;
                    text-decoration: none;
                    display: block;
                    float: right;
                }
            }
        }
        .svg-container {
            padding: 6px 5px 6px 15px;
            color: $title_color;
            vertical-align: middle;
            width: 30px;
            display: inline-block;
            &_login {
                font-size: 20px;
            }
        }
        .svg-icon {
            width: 1em;
            height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }
        .title-container {
            position: relative;
            .title {
                font-size: 26px;
                font-weight: 400;
                color: $title_color;
                margin: 0px auto 40px auto;
                text-align: center;
                font-weight: bold;
            }
        }
        .show-pwd {
            position: absolute;
            right: 10px;
            top: 7px;
            font-size: 16px;
            color: $title_color;
            cursor: pointer;
            user-select: none;
        }
    }
</style>
