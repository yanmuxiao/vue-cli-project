<template>
  
    <div class="router-view">

        <el-form ref="form" :model="form" label-width="140px">

            <el-row>
                <el-col>活动信息</el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="活动名称：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="活动时间：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="活动举办地：">
                        <el-input v-model="form.place"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="活动归属区：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="活动性质：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="活动规模：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="观众人数：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="活动类型：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="活动规格：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>


            <el-row>
                <el-col>相关公司及机构</el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="主办方名称：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="承办方名称：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="承办方性质：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="关联活动搭建公司：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="关联风险评估机构：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="关联场地单位：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="关联安保公司：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="临建物验收单位：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                </el-col>
            </el-row>
          
        </el-form>

    </div>

</template>


<style lang="scss" scoped>

    .el-form-item {
        margin-bottom: 15px;
    }

    .router-view {
      height: 100%;
    }
    .iframe-wrap {
      border: none;
      display: block;
      width: 100%;
      height: 100%;
    }

    .form-list {

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
              form: {
                 name: 'name',
                 place: 'place',
                 audience: '',
                 hostName: '',
                 organizerName: '',
              }
          }

      },
      created() {
          let activityId = this.$route.query.activityId;
          // let activityId = this.$route.params.activityId;
          _get({ url: activityDetailApi, params: { activityId: activityId } }).then(res=>{
              this.form = res.Activity;
          }).catch(error => {
          })
      },
      watch: {

      },
      computed: {

      }
  }
</script>