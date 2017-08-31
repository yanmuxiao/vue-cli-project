<template>
	
	<section>

		<br><br>
		<div class="block">
		  <span class="demonstration">有默认值</span>
		  <el-color-picker v-model="color1"></el-color-picker>
		</div>

		<br><br>
		<div class="block">
		  <span class="demonstration">无默认值</span>
		  <el-color-picker v-model="color2"></el-color-picker>
		</div>


		<br><br>
		<el-color-picker v-model="color3" show-alpha></el-color-picker>

		<br><br>



		<br><br>


	</section>

</template>


<style></style>

<script>
	
	 export default {
	    data() {
	      return {
	        color1: '#20a0ff',
        	color2: null,

        	 color3: 'rgba(19, 206, 102, 0.8)'
        	 
	      }
	    }
	  };


</script>