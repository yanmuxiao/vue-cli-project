<template>
	
	<section>


		<br><br>
		<p>基础用法</p>
		<div class="block">
		  <span class="demonstration">默认不区分颜色</span>
		  <el-rate v-model="value1"></el-rate>
		</div>
		<br><br>
		<div class="block">
		  <span class="demonstration">区分颜色</span>
		  <el-rate
		    v-model="value2"
		    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
		  </el-rate>
		</div>



		<br><br>
		<p>辅助文字</p>
		<el-rate
		  v-model="value3"
		  show-text>
		</el-rate>


		<br><br>
		<p>其它 icon</p>
		<el-rate
		  v-model="value4"
		  :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
		  void-icon-class="icon-rate-face-off"
		  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
		</el-rate>



		<br><br>
		<p>只读</p>
		<el-rate
		  v-model="value5"
		  disabled
		  show-text
		  text-color="#ff9900"
		  text-template="{value}">
		</el-rate>


		<br><br>
		<p></p>


	</section>

</template>


<style>


</style>

<script>
	
	 export default {
	    data() {
	      return {
	        value1: null,
        	value2: null,

        	value3: null,

        	value4: null,

        	value5: 3.7



	      }
	    }
	  };


</script>