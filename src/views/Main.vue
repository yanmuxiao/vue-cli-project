<template>  
    <div class="main-vue">
        <HeaderVue></HeaderVue>
        <AsideMenu></AsideMenu>

        <main class="el-main">
             <transition name="fade" mode="out-in">
                <router-view></router-view>
             </transition>
        </main>


    </div>
</template>
<style  lang="scss" scoped>
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
    }

      
</style>
<script>
    import HeaderVue from '@/components/HeaderVue'
    import AsideMenu from '@/components/AsideMenu'

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
        },
        components: { AsideMenu, HeaderVue }
    }


</script>
