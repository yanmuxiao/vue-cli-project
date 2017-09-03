<template>  
    <div class="main-vue" :class="{asideMenu: !$store.getters.asideMenu, mobileType: mobileType}">
        <HeaderVue></HeaderVue>
        <AsideMenu :class="{mobileAside: mobileAside}"></AsideMenu>
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
        transition: left .2s ease;
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

    import HeaderVue from '@/components/HeaderVue'
    import AsideMenu from '@/components/AsideMenu'

    export default {
        data() {
            return {
                screenWidth: document.body.clientWidth
            }
        },
        methods: {
            mobileAsideFn() {
                this.$store.commit('ASIDE_SH', true);
            }
        },
        created() {
            if(this.screenWidth <= 800) {
                this.$store.commit('MOBILE_TYPE', true);
                this.$store.commit('ASIDE_SH', false);
            }else{
                this.$store.commit('MOBILE_TYPE', false);
            }
            
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
