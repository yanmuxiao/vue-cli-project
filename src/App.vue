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
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  width: 100%;
  height: 100%;
  position: relative;

}
</style>
<style lang="scss">
html {
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
  width: 100%;
  height: 100%;
}


/* Safari浏览器样式兼容问题: checkbox、radio、select */

.el-checkbox__input.is-checked .el-checkbox__inner:after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
}
.el-radio__input.is-checked .el-radio__inner:after {
    -webkit-transform: translate(-50%,-50%) scale(1);
    transform: translate(-50%,-50%) scale(1);
}
.el-select .el-input .el-input__icon, .el-select .el-input .el-input__icon.is-show-close {
    color: #bfcbd9;
    -webkit-transform: translateY(-50%) rotate(180deg);
    transform: translateY(-50%) rotate(180deg);
}
.el-select .el-input .el-input__icon.is-reverse {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

</style>
