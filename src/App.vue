<template>
    <div id="app" v-loading="loading">
      <router-view />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


// let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
// let cancelToken = axios.CancelToken;
// let removePending = (config) => {
//     for(let p in pending){
//         if(pending[p].u === config.cancelId) { //当当前请求在数组中存在时执行函数体
//             pending[p].f(); //执行取消操作
//             pending.splice(p, 1); //把这条记录从数组中移除
//         }
//     }
// }

export default {
  name: 'app',
  data() {
      return {
          ajaxStart: 0,
          ajaxEnd: 0
      }
  },
  created() {
  },
  methods: {
      ...mapActions(['loading_action']),
  },
  computed: {
      ...mapGetters(['loading']),
  },
  mounted() {
      var that = this;
      this.axios.interceptors.request.use(function (config) {

          that.ajaxStart=0;
          that.ajaxEnd=0;
          that.ajaxStart++;
          that.loading_action(true);

          // if(config.cancelId) {
          //     removePending(config); //在一个ajax发送前执行一下取消操作
          // }
          // if(config.addCancelId) {
          //     config.cancelToken = new cancelToken((c)=>{
          //         pending.push({ u: config.cancelId, f: c });  
          //     });
          // }

          return config;
      }, function (error) {
          // Do something with request error 
          return Promise.reject(error);
      })
      this.axios.interceptors.response.use(function (response) {
          if(response.data.success == false){
              // 登录过期
              if((Object(response.data.result).hasOwnProperty('errCode')) && response.data.result.errCode=='NotLogin') {
              }
          }
          that.ajaxEnd++;
          if(that.ajaxStart <= that.ajaxEnd){
              that.loading_action(false);
          }

          // removePending(res.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
          return response;
      }, function (error) {
          // Do something with response error
          return Promise.reject(error);
      })
  }
}

</script>


<style lang="scss">
    #app {
      font-family: Helvetica Neue,Helvetica,Tahoma,Arial,Microsoft Yahei,Hiragino Sans GB,WenQuanYi Micro Hei,sans-serif;
      width: 100%;
      height: 100%;
      position: relative;
    }

    html {
      width: 100%;
      height: 100%;
    }
    body {
      margin: 0;
      width: 100%;
      height: 100%;
    }

    .el-loading-mask {
        background-color: rgba(0,0,0,0.1);
    }
</style>
