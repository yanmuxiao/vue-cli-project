<template>
  
  <div class="el-login-model">
      <el-form :model="formData">
        <h3 class="model-title">系统登录</h3>

        <el-form-item prop="account">
          <el-input type="text" v-model="formData.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input type="password" v-model="formData.password" auto-complete="off" @change="loginAutoFlase" placeholder="密码"></el-input>
        </el-form-item>

        <el-checkbox v-model="checked" class="el-remember">记住密码</el-checkbox>


        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;"  :loading="logining" @click="loginFn">登录</el-button>
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
        transform: translate(-50%,-50%)
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


  export default {
    data() {
      return {
        formData: {
          account: '',
          password: ''
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
        loginAuto: false,
        logining: false
      }
    },
    methods: {
      loginFn() {
 
      },
      loginAutoFlase() {
      }
    },
    created() {
        console.log(this.$store.getters.count)
        console.log(this.$store.getters.m)

    }
  }



</script>