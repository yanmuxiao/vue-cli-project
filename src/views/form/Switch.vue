<template>
	
	<section>

		<el-switch
		  v-model="value1"
		  on-text=""
		  off-text="">
		</el-switch>

		<br><br>

		<el-switch
		  v-model="value2"
		  on-color="#13ce66"
		  off-color="#ff4949">
		</el-switch>



		<br><br>
		<p>扩展的 value 类型</p>
		<el-tooltip :content="'我是自定义的提示语: ' + value3" placement="top">
		  <el-switch
		    v-model="value3"
		    on-color="#13ce66"
		    off-color="#ff4949"
		    on-value="ok"
		    off-value="no">
		  </el-switch>
		</el-tooltip>

		<br><br>


		<el-switch
		  v-model="value4"
		  on-text=""
		  off-text=""
		  disabled>
		</el-switch>


		<br><br>

		<el-switch
		  v-model="value5"
		  disabled>
		</el-switch>


	</section>

</template>


<style></style>

<script>
	
	 export default {
	    data() {
	      return {
	        value1: true,
	        value2: true,

	        value3: 'no',


	        value4: true,
	        value5: false,

	        abc: 'Switch value: '
	      }
	    }
	  };


</script>