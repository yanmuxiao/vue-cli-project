<template>
  
  <div class="el-login-model">
      <el-form :model="formData">
        <h3 class="model-title">系统登录</h3>

        <el-form-item prop="account">
          <el-input type="text" v-model="formData.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <!-- el-input无法触发原生@keyup.enter键盘事件，加上.native修饰符 -->
          <el-input type="password" v-model="formData.password" @keyup.enter.native="loginFn" auto-complete="off" @change="loginAutoFlase" placeholder="密码"></el-input>
        </el-form-item>

        <el-checkbox v-model="checked" class="el-remember">记住密码</el-checkbox>

        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;" @click="loginFn">登录</el-button>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;" @click="registerFn">注册</el-button>
        </el-form-item>

        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;" @click="getNew">确定</el-button>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;" @click="cancelAllFn">清除所有</el-button>
        </el-form-item>

      </el-form>
  </div>

</template>

<style lang="scss">
    
    .el-login-model {
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        width: 350px;
        padding: 35px 35px 15px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -160px 0 0 -211px;
        /*transform: translate(-50%,-50%)*/
    }
    .model-title {
        margin: 0 auto 20px;
        text-align: center;
    }
    .el-remember {
        margin-bottom: 35px;
    }

</style>

<script>
  
  import { setCookie, getCookieValue, deleteCookie } from '@/lib/cookie';
  import { userLoginApi, userRegisterApi } from '@/api/api';
  import { _get, _post } from '@/lib/utils';

  export default {
    data() {
      return {
        formData: {
            account: 'admin',
            password: 'suntek'
        },
        formValidate: {
            account: [
                { required: true, message: '请输入账号', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
            ]
        },
        checked: false,// 是否记住密码
        loginAuto: false
      }
    },
    methods: {
        loginFn() {
            var that = this;
            let params = {
                name: this.formData.account,
                pwd: this.formData.password,
                uId: new Date().getTime(),
                addCancelId: 'userLoginApi'
            };
            _post({ url: userLoginApi, params  }).then(res=>{
                if(res.success === true) {
                    this.$message({
                        type: 'info',
                        message: res.msg
                    }); 
                    this.$router.replace('/');
                }else{
                    this.$message({
                        type: 'info',
                        message: res.msg
                    }); 
                }
            }).catch(function(error){
                console.log('catch');
                // 手动清除或者链接超时失败都会进入这里，只是手动清除和链接超时失败的返回值不同
                if(error.code === 'ECONNABORTED') {
                  that.$message({
                      type: 'info',
                      message: '连接超时，请求失败！'
                  }); 
                }
            })
        },
        registerFn() {
            let params = {
                name: this.formData.account,
                pwd: this.formData.password,
                uId: new Date().getTime()
            };
            _post({ url: userRegisterApi, params  }).then(res=>{
                if(res.success === true) {
                    this.$message({
                        type: 'info',
                        message: res.msg
                    });
                    this.formData.account = '';
                    this.formData.password = '';
                }else{
                    this.$message({
                        type: 'info',
                        message: res.msg
                    }); 
                }
            }).catch(errro=>{
                console.log('catch');
            })
        },
        loginAutoFlase() {
        },
        getNew() {
            var that = this;
            // pending + 失败的请求 
            _post({ url: 'https://api.coindesk.com/v1/bpi/currentprice.json?t='+(new Date()).getTime(), params: { addCancelId: 'currentprice', tips: '请求失败' } }).then(res=>{
            }).catch(function(error){
                console.log('catch');
                if(error.code === 'ECONNABORTED') {
                  that.$message({
                      type: 'info',
                      message: '连接超时，请求失败！'
                  }); 
                }
            })
        },
        cancelAllFn() {
            _get({ url: 'https://api.coindesk.com/v1/bpi/currentprice.json?t='+(new Date()).getTime(), params: { delCancelId: 'cancleAll' } }).then(res=>{
            }).catch(function(error){
                console.log('catch');
            })
        }
    },
    created() {
    }
  }



</script>