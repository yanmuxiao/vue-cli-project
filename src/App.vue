<template>
    <div id="app" v-loading="loading">
      <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  data() {
      return {
      }
  },
  methods: {
    
  },
  computed: {
    ...mapGetters(['loading']),
  },
  created() {
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
