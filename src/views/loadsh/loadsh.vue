<template>  
    <div>

    </div>
</template>
<style  lang="scss">

</style>
<script>
    import _ from '@/lib/lodash'
    import { mapGetters, mapActions } from 'vuex';
    import { userInfoApi } from '@/api/api';
    import { _get, _post } from '@/lib/utils';
    export default {
        data() {
            return {
            }
        },
        created() {

            _get({ url: userInfoApi, params: {} }).then(res=>{
                this.loading_action(false);
                if(res.success === true) {
                    
                }else{
                    this.$message({
                        type: 'info',
                        message: res.msg
                    }); 
                }
            }).catch(function(error){})
            
        },
        computed: {

        },
        mounted () {
            console.log(_.trim('   af  c   '));
        },
        methods: {

        },
        watch: {  
 
        },
        updated() {
        },
        components: {

        }
    }


</script>
