<template>

	<div class="">

		<template>
			<!-- `checked` 为 true 或 false -->
			<el-checkbox v-model="checked">备选项</el-checkbox>
		</template>


		<br><br>

		<template>
			<el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
			<el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
		</template>

		<br><br>
		<template>
			<el-checkbox-group v-model="checkList">
			  <el-checkbox label="复选框 A"></el-checkbox>
			  <el-checkbox label="复选框 B"></el-checkbox>
			  <el-checkbox label="复选框 C"></el-checkbox>
			  <el-checkbox label="禁用" disabled></el-checkbox>
			  <el-checkbox label="选中且禁用" disabled></el-checkbox>
			</el-checkbox-group>
		</template>

		<br><br>

		<template>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"  @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </template>

		
	  <br><br>
	  <p>可选项目数量的限制</p>
      <el-checkbox-group 
	    v-model="checkedCities1"
	    :min="1"
	    :max="2">
	    <el-checkbox v-for="city2 in cities2" :label="city2" :key="city2">{{city2}}</el-checkbox>
	  </el-checkbox-group>



	</div>

</template>
<style>


</style>
<script>
	
	export default {
		data() {
			return { 
	            checked: true,
	            checked1: false,
	            checked2: true,
	            checkList: ['选中且禁用','复选框 A'],


	            checkAll: true,
				checkedCities: ['上海', '北京'],
				cities: ['上海', '北京', '广州', '深圳'],
				isIndeterminate: true,


				checkedCities1: ['上海', '北京'],
        		cities2: ['上海', '北京', '广州', '深圳']
	        }
		},
		methods: {
			handleCheckAllChange(event) {

	          this.checkedCities = event.target.checked ? cityOptions : [];
	          this.isIndeterminate = false;

	        },
	        handleCheckedCitiesChange(value) {

	          let checkedCount = value.length;
	          this.checkAll = checkedCount === this.cities.length;
	          this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;

	        }
		}
	}


</script>