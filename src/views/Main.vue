<template>  
    <div class="main-vue">
        <header class="header-menu"></header>
       
    </div>
</template>


<style  lang="scss">
    .header-menu {
        height: 60px;
        width: 100%;
        background-color: #f00;
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
            console.log(this.$store.getters.count)
            console.log(this.$store.getters.m)
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
