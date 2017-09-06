<template>
	<div>

		<h5>线形进度条 — 百分比外显</h5>
		<el-progress :percentage="0"></el-progress>
		<el-progress :percentage="70"></el-progress>
		<el-progress :percentage="100" status="success"></el-progress>
		<el-progress :percentage="50" status="exception"></el-progress>

		<br>
		<h5>线形进度条 — 百分比内显</h5>
		<el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
		<el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
		<el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
		<el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>

		
		<br>
		<h5>环形进度条</h5>
		<el-progress type="circle" :percentage="0"></el-progress>
		<el-progress type="circle" :percentage="25"></el-progress>
		<el-progress type="circle" :percentage="100" status="success"></el-progress>
		<el-progress type="circle" :percentage="50" status="exception"></el-progress>


		

	</div>
</template>

<style lang="scss" scoped>
	.el-progress {
		padding: 10px 0;
	}
</style>


<script>
	
	export default {
		data() {
			return {
		
			}
		},
		methods: {

		}
	}

</script>