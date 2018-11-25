<template>
    <div id="app" v-loading="loading">
      <router-view />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  data() {
      return {
          ajaxStart:0,
          ajaxEnd:0
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
          // console.log('config==>');
          // console.log(config);
          that.ajaxStart=0;
          that.ajaxEnd=0;
          that.ajaxStart++;
          that.loading_action(true);
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
