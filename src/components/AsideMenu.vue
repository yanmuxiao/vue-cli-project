<template>  
   
    <aside class="el-aside">
        <div class="mobileMask" @click="mobileMaskFn"></div>
        <div class="el-aside-x">
            <h1 class="aside-logo"><a href="javascript:;">LOGO</a></h1>
            <div class="el-aside-scroll">
                <el-menu :default-active="$route.path == '/' ? 'index' : $route.path.replace('/','')" class="el-menu-vertical-demo" unique-opened router>

                    
                    <template v-for="singleList in asideList">

                        <el-submenu v-if="singleList.subMenu" :index="singleList.index">

                            <template slot="title"><i :class="singleList.className"></i>{{singleList.name}}</template>
                            <el-menu-item v-for="subList in singleList.children" :key="subList.index" :index="subList.index">{{subList.name}}</el-menu-item>

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
    .el-aside {
        position: absolute;
        left: 0;
        top: 60px;
        bottom: 0;
        width: 200px;
        z-index: 1002;
        background-color: rgba(0,0,0,.2);
        overflow: hidden;
        transition: left .3s ease;
    
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
            background: #242f35;
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


        .aside-logo {
            display: none;
            height: 60px;
            text-align: center;
            margin: 0;
            background-color: #293c55;
            a {
                display: block;
                font-size: 22px;
                color: #fff;
                font-weight: 400;
                line-height: 60px;
                text-align: center;
                text-decoration: none;
            }
        }
        .mobileMask {
            background-color: rgba(0,0,0,.2);
            position: absolute;
            left: 200px;
            top: 0;
            right: 0;
            bottom: 0;
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
            mobileMaskFn() {
                this.$store.commit('ASIDE_SH', false);
            }
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