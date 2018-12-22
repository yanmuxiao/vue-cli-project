<template>  
    <div>

    </div>
</template>
<style  lang="scss">

</style>
<script>
    import { userInfoApi } from '@/api/api';
    import { _get, _post } from '@/lib/utils';
    export default {
        data() {
            return {
            }
        },
        created() {

            _get({ url: userInfoApi, params: {} }).then(res=>{
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
