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

      </el-form>
  </div>

</template>

<style>
    
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
  // import { userRegister, userLogin } from '@/api/api';
  import { userLoginApi, userInfoApi, getMenusApi, isAcceptanceApi } from '@/api/dxhdApi';
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
            // userLogin({
            //   name: this.formData.account,
            //   pwd: this.formData.password,
            //   uId: new Date().getTime()
            // })
            // .then(res=>{
            //   console.log(res);
            // })
            var that = this;
            var params = {
                username: this.formData.account,
                password: this.formData.password,
            };
            _post({ url: userLoginApi, params, toForm: true  }).then(res=>{
                if(res.flag === 1) {
                    // // 登录成功后获取用户信息
                    // _get({ url: userInfoApi }).then(userInfoRes=>{
                    //     // this.$router.replace('/dxhdList');
                    // });
                    // // 登录成功后获取用户菜单权限
                    // _get({ url: getMenusApi }).then(getMenusRes=>{
                    //     console.log(getMenusRes);
                    // });
                    // // 登录成功后获取验收环节的状态
                    // _get({ url: isAcceptanceApi }).then(acceptRes=>{
                    //     console.log(acceptRes);
                    // });

                    this.axios.all([_get({ url: userInfoApi }), _get({ url: getMenusApi }), _get({ url: isAcceptanceApi })])
                    .then(this.axios.spread(function (userInfoRes, getMenusRes, acceptRes) {
                        //3个请求现已完成
                        that.$router.replace('/dxhdList');
                    }));


                }else{
                    this.$message({
                        type: 'info',
                        message: res.info
                    }); 
                }
            })
        },
        registerFn() {
            userRegister({
                name: this.formData.account,
                pwd: this.formData.password,
                uId: new Date().getTime()
            })
        },
        loginAutoFlase() {
        }
    },
    created() {
    }
  }



</script>