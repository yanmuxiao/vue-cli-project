<template>
	<div>

		<h5>基础用法</h5>
		<div class="block">
		  <span class="demonstration">页数较少时的效果</span>
		  <el-pagination
		    layout="prev, pager, next"
		    :total="50">
		  </el-pagination>
		</div>
		
		<br>

		<div class="block">
		  <span class="demonstration">大于 7 页时的效果</span>
		  <el-pagination
		    layout="prev, pager, next"
		    :total="1000">
		  </el-pagination>
		</div>

		
		<h5>小型分页</h5>
		<p>在空间有限的情况下，可以使用简单的小型分页。</p>
		<el-pagination
		  small
		  layout="prev, pager, next"
		  :total="50">
		</el-pagination>


		
		<h5>附加功能</h5>
		<p>根据场景需要，可以添加其他功能模块。</p>
		<div class="block">
		    <span class="demonstration">显示总数</span>
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page.sync="currentPage1"
		      :page-size="100"
		      layout="total, prev, pager, next"
		      :total="1000">
		    </el-pagination>
		  </div>


		  <br>
		  <div class="block">
		    <span class="demonstration">调整每页显示条数</span>
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page.sync="currentPage2"
		      :page-sizes="[100, 200, 300, 400]"
		      :page-size="100"
		      layout="sizes, prev, pager, next"
		      :total="1000">
		    </el-pagination>
		  </div>


		  <br>
		  <div class="block">
		    <span class="demonstration">直接前往</span>
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page.sync="currentPage3"
		      :page-size="100"
		      layout="prev, pager, next, jumper"
		      :total="1000">
		    </el-pagination>
		  </div>


		  <br>
		  <div class="block">
		    <span class="demonstration">完整功能</span>
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage4"
		      :page-sizes="[100, 200, 300, 400]"
		      :page-size="100"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="400">
		    </el-pagination>
		  </div>


	</div>
</template>

<style lang="scss" scoped>

</style>


<script>
	
	export default {
		data() {
			return {
				currentPage1: 5,
		        currentPage2: 5,
		        currentPage3: 5,
		        currentPage4: 4
			}
		},
		methods: {
			handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		      },
		      handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		      }
		}
	}

</script>