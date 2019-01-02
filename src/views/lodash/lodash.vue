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
            console.log('lodash==>');
            console.log(this._.difference([1, 2, 3, 4, 5, 6], [2, 5]));
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
