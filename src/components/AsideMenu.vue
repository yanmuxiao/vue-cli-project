<template>  
   
    <aside class="el-aside">
        <div class="el-aside-x">
            <div class="el-aside-scroll">
                <el-menu :default-active="$route.path == '/' ? 'index' : $route.path.replace('/','')" class="el-menu-vertical-demo" unique-opened router>

                    <!-- <el-menu-item index="index"><i class="el-icon-message"></i>控制台</el-menu-item>
                    <el-menu-item index="syncTask"><i class="el-icon-document"></i>用户列表</el-menu-item>
                    <el-menu-item index="editForm"><i class="el-icon-plus"></i>添加用户</el-menu-item>

                    <el-submenu index="basic">
                        <template slot="title"><i class="el-icon-message"></i>基本</template>
                        <el-menu-item index="layout">布局</el-menu-item>
                        <el-menu-item index="color">色彩</el-menu-item>
                        <el-menu-item index="typography">字体</el-menu-item>
                        <el-menu-item index="icon">图标</el-menu-item>
                        <el-menu-item index="button">按钮</el-menu-item>
                    </el-submenu>

                    <el-submenu index="form">
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
                    </el-submenu> -->
                    
                    <template v-for="singleList in asideList">
                        <el-submenu v-if="singleList.subMenu" :index="singleList.index">
                            <template slot="title"><i :class="singleList.className"></i>{{singleList.name}}</template>
                            <el-menu-item v-for="subList in singleList.children" :index="subList.index">{{subList.name}}</el-menu-item>
                        </el-submenu>
                        <el-menu-item v-else :index="singleList.index"><i :class="singleList.className"></i>{{singleList.name}}</el-menu-item>
                    </template>

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
        background-color: rgba(0,0,0,.5);
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

<script>

    export default {
        data() {
            return {
                asideList: [
                    { index: 'index', className: 'el-icon-message',name: '控制台', subMenu: false },
                    { index: 'syncTask', className: 'el-icon-document',name: '用户列表', subMenu: false },
                    { index: 'editForm', className: 'el-icon-plus',name: '添加用户', subMenu: false },
                    { index: 'basicList', className: 'el-icon-message',name: '基本', subMenu: true, children: [
                        { index: 'layout',name: '布局' },
                        { index: 'color',name: '色彩' },
                        { index: 'typography',name: '字体' },
                        { index: 'icon',name: '图标' },
                        { index: 'button',name: '按钮' },
                    ]},
                    { index: 'formList', className: 'el-icon-setting',name: '表单', subMenu: true, children: [
                        { index: 'radio',name: '单选框' },
                        { index: 'checkbox',name: '多选框' },
                        { index: 'input',name: '输入框' },
                        { index: 'inputNumber',name: '计数器' },
                        { index: 'select',name: '选择器' },
                        { index: 'cascader',name: '级联选择器' },
                        { index: 'switch',name: '开关' },
                        { index: 'slider',name: '滑块' },
                        { index: 'timePicker',name: '时间选择器' },
                        { index: 'datePicker',name: '日期选择器' },
                        { index: 'dateTimePicker',name: '日期时间选择器' },
                        { index: 'upload',name: '上传' },
                        { index: 'rate',name: '评分' },
                        { index: 'colorPicker',name: '颜色选择器' },
                        { index: 'form',name: '表单' },
                    ]}
                ]
            }
        },
        methods: {
        },
        created() {
            console.log(this.$store.getters.m)
            console.log(this.$store.getters.count)
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