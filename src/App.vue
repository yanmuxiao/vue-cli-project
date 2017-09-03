<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'app'
}

</script>


<style lang="scss">
#app {
  font-family: Helvetica Neue,Helvetica,Tahoma,Arial,Microsoft Yahei,Hiragino Sans GB,WenQuanYi Micro Hei,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

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

</style>
