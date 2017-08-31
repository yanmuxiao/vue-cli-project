<template>

	<div class="">

		<!-- 基础用法 -->
    <template>
      <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
      <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
    </template>

    <br><br>

    <!-- 禁用状态 -->
    <template>
      <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
      <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
    </template>
  
    <br><br>
    <!-- 单选框组 -->
    <template>
      <el-radio-group v-model="radio2">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </template>
    

    <br><br>
    <!-- 按钮样式 -->
    <template>
    
        <el-radio-group v-model="radio3">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
        <div style="margin: 15px 0;"></div>


        <el-radio-group v-model="radio4">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京" :disabled="true"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
        <div style="margin: 15px 0;"></div>
        

        <el-radio-group v-model="radio5" :disabled="true">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>


      </template>

	</div>

</template>
<style>


</style>
<script>
	
	export default {
		data() {
			return {
				radio: '1',
				radio1: '选中且禁用',
				radio2: 3,
				radio3: '深圳',
				radio4: '深圳',
				radio5: '深圳'
			}
		},
		methods: {

		}
	}


</script>