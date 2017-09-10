<template>
	<div>
		
		<h5>区域加载</h5>
		<p>在表格等容器中加载数据时显示。</p>
		<el-table
		    v-loading.body="loading"
		    element-loading-text="拼命加载中"
		    :data="tableData"
		    style="width: 100%">
		    <el-table-column
		      prop="date"
		      label="日期"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="姓名"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="地址">
		    </el-table-column>
		  </el-table>



	</div>
</template>

<style lang="scss" scoped>


</style>


<script>
	
	export default {
		data() {
			return {
				tableData: [{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-02',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }],
		        loading: true
			}
		},
		methods: {

		}
	}

</script>