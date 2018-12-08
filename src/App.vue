<template>
    <div id="app" v-loading="loading">
      <router-view />
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'app',
  data() {
      return {

          cancelToken: null,
          pending: [],

          ajaxStart: 0,
          ajaxEnd: 0

      }
  },
  created() {
      this.cancelToken = this.axios.CancelToken;
  },
  methods: {
      ...mapMutations(['addAxiosCancle']),
      ...mapActions(['loading_action']),
      removePending(cancelId, cancleF) {
          console.log(JSON.stringify(this.pending));
          if(cancelId) {
              for(let idx in this.pending){
                  // if((new RegExp('^' + cancelId)).test(this.pending[idx].cancelId)) { //当请求在pending中存在时执行取消操作
                  if(this.pending[idx].cancelId === cancelId) { 
                      if(cancleF) {
                          this.pending[idx].f(); // 取消正在执行的请求
                      }
                      this.pending.splice(idx, 1); // 把已响应的请求从pending中移除
                      console.log(JSON.stringify(this.pending));
                      return false;
                  }
              }
          }
          
      }
  },
  computed: {
      ...mapGetters(['loading']),
  },
  mounted() {
      let that = this;
      this.axios.interceptors.request.use(function (config) {
          let configParams = config.params;
          if(!configParams || !configParams.notLoading) {
              that.ajaxStart++;
          }
          that.loading_action(true);

          // 根据参数判断将该请求添加到pending中
          if(configParams && configParams.addCancelId) {
              config.cancelToken = new that.cancelToken((c)=>{
                  that.pending.push({ 
                      cancelId: configParams.addCancelId, 
                      f: c 
                  });
              });
          }
          // 根据参数取消指定的请求
          if(configParams && configParams.delCancelId) {
              that.removePending(configParams.delCancelId, true);
          }

          return config;
      }, function (error) {
          // Do something with request error 
          console.log('this.axios.interceptors.request.use: error');
          return Promise.reject(error);
      })
      this.axios.interceptors.response.use(function (response) {

          let configParams =  response.config.params;
          //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
          if(configParams && configParams.addCancelId) {
              that.removePending(configParams.addCancelId);  
          }
          if(!configParams || !configParams.notLoading) {
              that.ajaxEnd++;
          }
          if(that.ajaxStart <= that.ajaxEnd){
              that.ajaxStart = 0;
              that.ajaxEnd = 0;
              that.loading_action(false);
          }

          return response;
      }, function (error) {

          // Do something with response error
          console.log('this.axios.interceptors.response.use: error');
          // console.log(arguments);
          
          let configParams =  error.config.params;
          //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
          if(configParams && configParams.addCancelId) {
              that.removePending(configParams.addCancelId);  
          }
          if(!configParams || !configParams.notLoading) {
              that.ajaxEnd++;
          }
          if(that.ajaxStart <= that.ajaxEnd){
              that.ajaxStart = 0;
              that.ajaxEnd = 0;
              that.loading_action(false);
          }

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

    .pending {
      position: fixed;
      left: 0;
      right: 0;
      top: 60px;
      bottom: 0;
      z-index: 1000;
    }
</style>
