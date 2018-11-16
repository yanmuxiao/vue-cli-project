<template>
  
    <div class="router-view">

      <iframe id="iframeWrap" class="iframe-wrap" src="http://172.25.20.57:9080/portal/login/autoLogin.jsp?usr=admin&pwd=suntek&url=/efacecloud/page/library/faceCaptureList.html "></iframe>

    </div>

</template>


<style lang="scss" scoped>
    .router-view {
      height: 100%;
    }
    .iframe-wrap {
      border: none;
      display: block;
      width: 100%;
      height: 100%;
    }
</style>

<script>
  
  import { activityDetailApi } from '@/api/dxhdApi';
  import { _get } from '@/lib/utils';

  export default {
      methods: {

      },
      data() {

          return {
          }

      },
      created() {
          // let activityId = this.$route.query.activityId;
          // // let activityId = this.$route.params.activityId;
          // _get({ url: activityDetailApi, params: { activityId: this.$route.params.activityId } }).then(res=>{
          // }).catch(error => {
          // })
      },
      watch: {

      },
      computed: {

      }
  }
</script>