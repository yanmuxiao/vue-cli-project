<template>  
    <div class="main-vue" :class="{asideMenu: !$store.getters.asideMenu, mobileType: mobileType}">
        <HeaderVue @sendNavModule = 'getNavModule'></HeaderVue>
        <AsideMenu :navModule = 'navModule'  :class="{mobileAside: mobileAside}"></AsideMenu>
        <main class="el-main">
             <transition name="fade" mode="out-in">
                <router-view></router-view>
             </transition>
        </main>
        <div v-show="mobileType" ref="mobileType" @click="mobileAsideFn" :class="{asideHide: mobileAside}" class="el-aside-mobile"><i class="el-icon-fa-navicon asideMobileSH"></i></div>
    </div>
</template>
<style  lang="scss">
    .main-vue {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .el-main {
        position: absolute;
        left: 200px;
        top: 60px;
        bottom: 0;
        right: 0;
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;
        padding: 15px;
        transition: left .3s ease;
    }

    .asideMenu {
        .el-aside {
            left: -200px;
        }
        .el-main {
            left: 0;
        }
    }

    .el-aside-mobile {
        position: absolute;
        left: 36px;
        bottom: 36px;
        width: 36px;
        height: 36px;
        z-index: 1002;
        background-color: rgba(0,0,0,.7);
        text-align: center;
        border-radius: 6px;
        cursor: pointer;
        .asideMobileSH {
            font-size: 20px;
            color: #fff;
            &:before {
                line-height: 36px;
            }
        }
    } 

    .mobileType {
        .el-aside {
            left: -200px;
            .aside-logo {
                display: block;
            }
        }
        .el-main {
            left: 0;
        }
        .el-aside-scroll .el-menu {
            padding-bottom: 60px;
        }
    }
    .mobileType .mobileAside {
        left: 0; 
        top: 0;
        right: 0;
        width: auto;
    }
    .asideHide {
        display: none!important;
    }
</style>
<script>

    import { mapGetters, mapActions } from 'vuex'
    import HeaderVue from '@/components/HeaderVue'
    import AsideMenu from '@/components/AsideMenu'

    import { userLogoutApi, userInfoApi } from '@/api/api';
    import { _get, _post } from '@/lib/utils';

    export default {
        data() {
            return {
                screenWidth: document.body.clientWidth,
                navModule: 'basicList'
            }
        },
        beforeRouteEnter(to, from, next) {

            console.log('Main.vue: beforeRouteEnter');
            // 不能访问this
            // 可以通过给next传入一个函数传参访问
            next(vm => {
                // console.log(vm.screenWidth)
            });
        },
        beforeRouteUpdate(to, from, next) {
            // 通常用来禁止用户在还没保存修改前突然离开
            console.log('Main.vue: beforeRouteUpdate');
            next();
        },
        beforeRouteLeave(to, from, next) {
            console.log('Main.vue: beforeRouteLeave');
            next();
        },
        methods: {
            ...mapActions(['loading_action']),
            mobileAsideFn() {
                this.$store.commit('ASIDE_SH', true);
            },
            getNavModule(navModule) {
                this.navModule = navModule;
            }
        },
        created() {
            
            if(this.screenWidth <= 800) {
                this.$store.commit('MOBILE_TYPE', true);
                this.$store.commit('ASIDE_SH', false);
            }else{
                this.$store.commit('MOBILE_TYPE', false);
            }

            // this.$bus.on('setMsg', navMName => { 
            //     this.navModule = navMName;
            // });
            
        },
        computed: {
            mobileType() {
                return this.$store.getters.mobileType
            },
            mobileAside() {
                return this.$store.getters.mobileAside
            }
        },
        mounted () {
            _get({ url: userInfoApi, params: { a: 'ab' } }).then(res=>{
                if(res.success === true) {
                    
                }else{
                    this.$message({
                        type: 'info',
                        message: res.msg
                    }); 
                }
            }).catch(function(error){})
            
            window.onresize = () => {
                this.screenWidth = document.body.clientWidth;
            }
        },
        watch: {  
            // 路由跳转隐藏手机模式下的侧边栏
            $route (to, from) {
                if(this.mobileType) {
                    this.$store.commit('ASIDE_SH', false);
                }
            },
            screenWidth (val) {
                if (!this.timer) {
                    this.screenWidth = val
                    this.timer = true
                    setTimeout(() => {
                        if(this.screenWidth <= 800) {
                            this.$store.commit('MOBILE_TYPE', true);
                        }else{
                            this.$store.commit('MOBILE_TYPE', false);
                            this.$store.commit('ASIDE_SH', false);
                        }
                        this.timer = false
                    }, 0)
                }
            }
        },
        updated() {
        },
        components: { AsideMenu, HeaderVue }
    }


</script>
