<template>
  
    <div class="router-view">

        <el-form ref="form" :model="form" label-width="140px">

            <el-row class="act-list-title">
                <el-col>活动信息</el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="活动名称：">
                        <el-input v-model="form.name" v-validate="'required'" name="name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="活动时间：">
                        <el-date-picker
                          class="act-datetime"
                          v-model="form.startTime"
                          type="datetime"
                          placeholder="选择日期时间">
                        </el-date-picker>
                        -
                        <el-date-picker
                          class="act-datetime"
                          v-model="form.endTime"
                          type="datetime"
                          placeholder="选择日期时间">
                        </el-date-picker>
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
                        <el-select v-model="form.regionId" placeholder="请选择">
                          <el-option
                            v-for="item in regionOptions"
                            :label="item.departmentName"
                            :key = "item.departmentId"
                            :value="item.departmentId">
                          </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="活动性质：">
                        <el-select v-model="form.activityNature" placeholder="请选择">
                          <el-option
                            v-for="item in actNatureOptions"
                            :label="item.label"
                            :key = "item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="活动规模：">
                        <el-select v-model="form.size" placeholder="请选择">
                          <el-option
                            v-for="item in sizeOptions"
                            :label="item.label"
                            :key = "item.value"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="观众人数：">
                        <el-input v-model="form.audience"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="活动类型：">
                        <el-select v-model="form.activityType" placeholder="请选择">
                          <el-option
                            v-for="item in actTypeOptions"
                            :label="item.label"
                            :key = "item.value"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="活动规格：">
                        <el-select v-model="form.activitySpec" placeholder="请选择">
                          <el-option
                            v-for="item in actSpecOptions"
                            :label="item.label"
                            :key = "item.value"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>


            <el-row class="act-list-title">
                <el-col>相关公司及机构</el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="主办方名称：">
                        <el-input v-model="form.hostName" v-validate="'required'" name="hostName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="承办方名称：">
                        <el-input v-model="form.organizerName"></el-input>
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
                        <el-select v-model="form.buildingUnitId" placeholder="请选择">
                          <el-option
                            v-for="item in companyType2"
                            :label="item.name"
                            :key = "item.companyId"
                            :value="item.companyId">
                          </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="关联风险评估机构：">
                        <el-select v-model="form.agencyId" placeholder="请选择">
                          <el-option
                            v-for="item in companyType3"
                            :label="item.name"
                            :key = "item.companyId"
                            :value="item.companyId">
                          </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="关联场地单位：">
                        <el-select v-model="form.siteUnitId" placeholder="请选择">
                          <el-option
                            v-for="item in companyType5"
                            :label="item.name"
                            :key = "item.companyId"
                            :value="item.companyId">
                          </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="关联安保公司：">
                        <el-select v-model="form.securityCompanyId" placeholder="请选择">
                          <el-option
                            v-for="item in companyType4"
                            :label="item.name"
                            :key = "item.companyId"
                            :value="item.companyId">
                          </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="临建物验收单位：">
                        <el-select v-model="form.acceptanceUnitId" placeholder="请选择">
                          <el-option
                            v-for="item in companyType6"
                            :label="item.name"
                            :key = "item.companyId"
                            :value="item.companyId">
                          </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                </el-col>
            </el-row>
          
        </el-form>

        <p v-if="$validator.errors.has('name')">name: 不能为空</p>
        <p v-if="$validator.errors.has('hostName')">hostName: 不能为空</p>
        <el-button @click="actValidateForm">确定</el-button>

    </div>

</template>


<style lang="scss" scoped>

    .el-form-item {
        margin-bottom: 15px;
    }

    .router-view {
      height: 100%;
    }

    .act-list-title {
      padding-bottom: 15px;
    }
    
    .el-date-editor.act-datetime {
        width: 47%;
    }

</style>

<script>
  
  import { regionApi, companyTypeApi, activityDetailApi } from '@/api/dxhdApi';
  import { _get } from '@/lib/utils';

  export default {
      methods: {

      },
      data() {

          return {
              regionOptions: [],
              actNatureOptions: [{
                  label: '政府',
                  value: '政府'
              },{
                  label: '商用',
                  value: '商用'
              },{
                  label: '民用',
                  value: '民用'
              }],
              sizeOptions: [{
                  label: '5000以下',
                  value: '5000以下'
              },{
                  label: '5000-10000人',
                  value: '5000-10000人'
              },{
                  label: '10000以上',
                  value: '10000以上'
              }],
              actTypeOptions: [{
                  label: '体育比赛',
                  value: '体育比赛'
              },{
                  label: '人才招聘',
                  value: '人才招聘'
              },{
                  label: '文艺演出',
                  value: '文艺演出'
              },{
                  label: '彩票发行',
                  value: '彩票发行'
              },{
                  label: '庆祝庆典纪念活动',
                  value: '庆祝庆典纪念活动'
              },{
                  label: '会展会议',
                  value: '会展会议'
              },{
                  label: '焰火晚会',
                  value: '焰火晚会'
              },{
                  label: '花市游玩',
                  value: '花市游玩'
              },{
                  label: '其他',
                  value: '其他'
              }],
              actSpecOptions: [{
                  label: '国际',
                  value: '国际'
              },{
                  label: '地市级',
                  value: '地市级'
              },{
                  label: '国家',
                  value: '国家'
              },{
                  label: '县区级',
                  value: '县区级'
              },{
                  label: '省级',
                  value: '省级'
              },{
                  label: '县区以下',
                  value: '县区以下'
              }],
              companyType1: [],
              companyType2: [],
              companyType3: [],
              companyType4: [],
              companyType5: [],
              companyType6: [],
              form: {
                 name: '',
                 place: 'place',
                 audience: '',
                 hostName: '',
                 organizerName: '',
                 startTime: '',
                 endTime: '',

                 regionId: '',
                 activityNature: '',
                 size: '',
                 audience: '',
                 hostName: '',

              }
          }

      },
      created() {

          // // 归属地下拉列表
          // _get({ url: regionApi, params: {} }).then(res=>{
          //     this.regionOptions = res;
          // }).catch(error => {
          // })

          // // 公司类型下拉列表
          // let companyType = [1, 2, 3, 4, 5, 6];
          // companyType.forEach((value) => {
          //     _get({ url: companyTypeApi, params: { companyType: value, all: 'all' } }).then(res=>{
          //         this['companyType' + value] = res;
          //     }).catch(error => {
          //     })
          // })
          

          // let activityId = this.$route.query.activityId;
          // // let activityId = this.$route.params.activityId;
          // _get({ url: activityDetailApi, params: { activityId: activityId } }).then(res=>{
          //     this.form = res.Activity;
          // }).catch(error => {
          // })

      },
      methods: {
          actValidateForm() {
              this.$validator.validateAll().then(result => {
                  if(!result) {
                      console.log('not validated!');
                  }else{
                      console.log('validated!');
                  }
              },error => {
                  console.log(err);
              })
          }
      },
      watch: {

      },
      computed: {

      }
  }
</script>