<template>  
   
    <header class="header-menu">
        
        <!-- LOGO -->
        <h1 class="el-logo"><a href="javascript:;">PCI</a></h1>
        

        <!-- aside Button -->
        <div class="nav-list" v-show="!$store.getters.mobileType" @click="navSHFn">
            <i :class="{navClass: true, 'el-icon-fa-navicon': navSH, 'el-icon-close': !navSH}"></i>
        </div>

        
        <!-- 导航模块 -->
        <nav class="header-navTxt">

            <a href="javascript:;"v-for="(value, index) in navModules" :class="{active: value.cur}" @click="navClicked(value.navMName)" :key="index"  :navMName="value.navMName">{{value.nameLabel}}</a>

        </nav>
        

        <nav class="header-navIcon">
            <a href="javascript:;" class="active">
                <i class="el-icon-fa-envelope"></i>
            </a>
            <a href="javascript:;" class="active">
                <i class="el-icon-setting"></i>
            </a>
            <a href="javascript:;" class="active">
                <i class="el-icon-menu"></i>
            </a>
            <a href="javascript:;" class="active">
                <i class="el-icon-share"></i>
            </a>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                <i class="el-icon-fa-user-o"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="header-dropdown">
                <el-dropdown-item command="message">我的消息</el-dropdown-item>
                <el-dropdown-item command="lodash">设置</el-dropdown-item>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
        </nav>

        

    </header>
  
</template>


<style  lang="scss" scoped>
    .header-menu {
        $navHeight: 60px;

        height: $navHeight;
        width: 100%;  
        background-color: #293c55;
        
        .el-logo {
            float: left;
            margin: 0;
            width: 140px;
            text-align: center;
            a {
                display: block;
                font-size: 22px;
                color: #fff;
                font-weight: 400;
                line-height: $navHeight;
                text-align: center;
                text-decoration: none;
            }
        }


        .nav-list {
            float: left;
            height: $navHeight;
            padding: 0 23px;
            cursor: pointer;
            &:hover {
                background: rgba(0, 0, 0, 0.2);
            }
            .navClass{
                width: 14px;
                height:$navHeight;
                color: #fff;
            }
            .navClass:before {
                font-size: 14px;
                display: block;
                line-height: $navHeight;
            }
        }
        .header-navTxt {
            position: absolute;
            top: 0;
            left: 200px;
            height: $navHeight;
            a {
                padding: 0 15px;
                float: left;
                display: inline-block;
                color: #fff;
                height: $navHeight;
                overflow: hidden;
                text-decoration: none;
                line-height: $navHeight;
                box-sizing: border-box;
                border-bottom: 2px solid transparent;
                font-size: 14px;
            }
            .active {
                border-color: #35A338;
            }
            a:hover, .active {
                background: rgba(0, 0, 0, .2);
            }
        }
        .header-navIcon {
            float: right;
            height: $navHeight;
            a {
                padding: 0 22px;
                float: left;
                display: inline-block;
                color: #fff;
                height: $navHeight;
                overflow: hidden;
                text-decoration: none;
                line-height: $navHeight;
                box-sizing: border-box;
                &:hover {
                    background: rgba(0, 0, 0, .2);
                }
                i:before {
                    font-size: 16px;
                }
            }

            .el-dropdown {
                display: inline-block;
                color: #fff;
                box-sizing: border-box;
                .el-dropdown-link {
                    display: inline-block;
                    height: $navHeight;
                    line-height: $navHeight;
                    padding: 0 22px;
                    &:hover {
                        cursor: pointer;
                        background: rgba(0, 0, 0, .2);
                    }
                    i:before {
                        font-size: 16px;
                    }
                }
            }
        }
    } 
    
    .el-dropdown-menu.header-dropdown {
        width: 120px;
    }

</style>

<script>

    import navModules from '@/lib/navModules.js'
    import { userLogoutApi, userInfoApi } from '@/api/api';
    import { _get, _post } from '@/lib/utils';

    export default {
        data() {
            return {
                navModules: [
                    { navMName: 'basicList', nameLabel: '基本ElementUI', cur: false },
                    { navMName: 'lodash', nameLabel: 'lodash', cur: false }
                ]
            }
        },
        methods: {
            navSHFn(){
                this.$store.commit('ASIDE_MENU', this.navSH);
            },
            // 导航模块切换
            navClicked(navMName) {
                this.navModules.forEach((value, index, arr) => {
                    value.cur = value.navMName == navMName ? true : false;
                });
                this.$emit('sendNavModule', navMName);
                // this.$bus.emit('setMsg', navMName);
            },
            handleCommand(command) {
                if(command === 'message') {
                    _get({ url: userInfoApi, params: {} }).then(res=>{
                        if(res.success === true) {
                            
                        }else{
                            this.$message({
                                type: 'info',
                                message: res.msg
                            }); 
                        }
                    }).catch(function(error){})
                }else if(command === 'logout') {
                    _get({ url: userLogoutApi, params: {} }).then(res=>{
                        if(res.success === true) {
                            this.$message({
                                type: 'info',
                                message: res.msg
                            }); 
                            this.$router.push('/login');
                        }else{
                            this.$message({
                                type: 'info',
                                message: res.msg
                            }); 
                        }
                    }).catch(function(error){})
                }else if(command === 'lodash') {
                    this.$router.push('/lodash');
                }
            }
        },
        created() {

            // 刷新页面回到指定的导航
            let path = this.$route.path.replace('/', '');
            if(path === '' || path === 'index') {
                this.navModules[0].cur = true;
                return;
            }
            let cur = 'basicList';
            for(let obj in navModules) {
                for(let arrVal in navModules[obj]) {
                    let newValue = navModules[obj][arrVal];
                    if(newValue.subMenu){
                        for(let arrVal1 in newValue.children) {
                            if(newValue.children[arrVal1].index === path) {
                                cur = obj;
                                this.navModules.forEach(val => {
                                    if(val.navMName === cur) {
                                        val.cur = true;
                                        return false;
                                    }
                                })
                                this.navClicked(cur);
                                return false;
                            }
                        }
                    }else{
                        if(newValue.index === path) {
                            cur = obj;
                            this.navModules.forEach(val => {
                                if(val.navMName === cur) {
                                    val.cur = true;
                                    return false;
                                }
                            })
                            this.navClicked(cur);
                            return false;
                        }
                    }
                }
            }
        },
        computed: {
            navSH() {
                return !this.$store.getters.asideMenu;
            }
        },
        mounted () {
        },
        watch: {  
        },
        updated() {
        }
    }


</script>