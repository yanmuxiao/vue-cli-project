<template>  
   
    <aside class="el-aside">
        <div class="mobileMask" @click="mobileMaskFn"></div>
        <div class="el-aside-x">
            <h1 class="aside-logo"><a href="javascript:;">LOGO</a></h1>
            <div class="el-aside-scroll">
                <el-menu :default-active="$route.path == '/' ? 'index' : $route.path.replace('/','')" class="el-menu-vertical-demo" unique-opened router>
                    
                    <!-- 固定的菜单 -->
                    <el-menu-item index="index"><i class="el-icon-message"></i>控制台</el-menu-item>
                    <!-- dxhd -->
                    <el-menu-item index="dxhdList"><i class="el-icon-message"></i>dxhdList</el-menu-item>

                    <!-- 非固定的菜单 -->
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


<style lang="scss">
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

    import navModules from '@/lib/navModules.js'

    export default {
        data() {
            return {
                asideNavModule: ''
            }
        },
        props:['navModule'],
        methods: {
            mobileMaskFn() {
                // 不通过mapActions直接触发mutations
                this.$store.commit('ASIDE_SH', false);
            }
        },
        created() {
        },
        computed: {
            asideList() {
                if(navModules[this.navModule]) {
                    this.asideNavModule = this.navModule;
                    return navModules[this.navModule]
                }else{
                    return navModules[this.asideNavModule]
                }
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