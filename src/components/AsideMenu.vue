<template>  
   
    <aside class="el-aside">
        <div class="el-aside-x">
            <div class="el-aside-scroll">
                <el-menu :default-active="index" class="el-menu-vertical-demo" unique-opened router>

                    <el-menu-item index="index"><i class="el-icon-message"></i>控制台</el-menu-item>
                    <el-menu-item index="syncTask"><i class="el-icon-document"></i>用户列表</el-menu-item>
                    <el-menu-item index="editForm"><i class="el-icon-plus"></i>添加用户</el-menu-item>

                    <el-submenu index="2">

                        <template slot="title"><i class="el-icon-message"></i>基本</template>
                        <el-menu-item index="layout">布局</el-menu-item>
                        <el-menu-item index="color">色彩</el-menu-item>
                        <el-menu-item index="typography">字体</el-menu-item>
                        <el-menu-item index="icon">图标</el-menu-item>
                        <el-menu-item index="button">按钮</el-menu-item>

                    </el-submenu>

                    <el-submenu index="3">
                      <template slot="title"><i class="el-icon-setting"></i>表单</template>
                        <el-menu-item index="radio">单选框</el-menu-item>
                        <el-menu-item index="checkbox">多选框</el-menu-item>
                        <el-menu-item index="input">输入框</el-menu-item>
                        <el-menu-item index="inputNumber">计数器</el-menu-item>
                        <el-menu-item index="select">选择器</el-menu-item>
                        <el-menu-item index="cascader">级联选择器</el-menu-item>
                        <el-menu-item index="switch">开关</el-menu-item>
                        <el-menu-item index="slider">滑块</el-menu-item>
                        <el-menu-item index="timePicker">时间选择器</el-menu-item>
                        <el-menu-item index="datePicker">日期选择器</el-menu-item>
                        <el-menu-item index="dateTimePicker">日期时间选择器</el-menu-item>
                        <el-menu-item index="upload">上传</el-menu-item>
                        <el-menu-item index="rate">评分</el-menu-item>
                        <el-menu-item index="colorPicker">颜色选择器</el-menu-item>
                        <el-menu-item index="form">表单</el-menu-item>
                    </el-submenu>
                  </el-menu>
            </div>

        </div>
    </aside>
  
</template>


<style  lang="scss">
	$rgba0: rgba(0,0,0,0);
    .main-vue {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .el-aside {
        position: absolute;
        left: 0;
        top: 60px;
        bottom: 0;
        width: 200px;
        z-index: 1002;
        background-color: rgba(0,0,0,.5);;
        overflow: hidden;
    
        .el-aside-x {
            width: 200px;
            height: 100%;
            overflow: hidden;
        }
        .el-aside-scroll {
            width: 220px;
            height: 100%;
            overflow-x: hidden;
            overflow-y: auto;
            background-color: #263238;
        }
        .el-aside-scroll .el-menu-vertical-demo {
            width: 200px;
            background: #263238;
            padding: 10px 0;
        }


        .el-menu {
            background: $rgba0;
        }
        .is-opened .el-submenu__title {
            color: rgba(255,255,255,.7);
            background: rgba(255, 255, 255, 0.04);
        }
        .el-menu-item,
        .el-submenu__title {
            height: 40px;
            line-height: 40px;
            background: $rgba0;
            color: rgba(163,175,183,.9);
        }
        .el-menu-item:hover,
        .el-submenu .el-menu-item:hover,
        .el-submenu__title:hover {
            background: rgba(255,255,255,.1); 
            color: rgba(255,255,255,.8);
        }
        .el-menu .is-active,.el-menu .is-active:hover {
            color: #fff;
        }

        .el-menu .el-submenu__icon-arrow {
            font-size: 12px;
        }

    }

</style>
<style type="scss">
	.el-aside-x .el-menu-item, .el-aside-x .el-submenu__title {
		text-align: left;
	}

</style>

<script>

    import { mapActions, mapGetters } from 'vuex'

    export default {
        data() {
            return {
                
            }
        },
        methods: {
        },
        created() {
        },
        computed: {
        },
        mounted () {
        },
        watch: {  
        },
        updated() {
        }
    }


</script>