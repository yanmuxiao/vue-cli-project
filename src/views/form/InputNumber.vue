<template>

	<div class="">

		<br><br>
      <template>
        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
      </template>

      <br><br>

      <template>
        <el-input-number v-model="num2" :disabled="true"></el-input-number>
      </template>

      <br><br>

      <template>
        <el-input-number @change="handleChange"  v-model="num3" :step="2"></el-input-number>
      </template>

      <br><br>

      <template>
        <el-input-number size="large" v-model="num4"></el-input-number>
        <el-input-number v-model="num5"></el-input-number>
        <el-input-number size="small" v-model="num6"></el-input-number>
      </template>

      <br><br>

	</div>

</template>
<style>


</style>
<script>
	
	export default {
		data() {
			return {
				num1: 1,
				num2: 1,
				num3: 5,
				num4: 5,
				num5: 5,
				num6: 5
			}
		},
		methods: {
			handleChange(value) {
	          console.log(value)
	        }
		}
	}


</script>