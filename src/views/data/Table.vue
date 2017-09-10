<template>
	<div>
		
		<el-table
		    :data="tableData3"
		    @select-all="tableSelectAllFn"
            @select = "tableselectFN"
            @selection-change = "tableSelectChange"
		    stripe
		    border
		    style="width: 100%"
		    max-height="500">


		    <el-table-column
              fixed
              type="selection"
              width="55">
            </el-table-column>


		    <el-table-column
		      prop="date"
		      label="日期"
		      width="150">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="姓名"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      prop="province"
		      label="省份"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      prop="city"
		      label="市区"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="地址">
		    </el-table-column>
		    <el-table-column
		      prop="zip"
		      label="邮编"
		      width="120">
		    </el-table-column>
		  </el-table>


	</div>
</template>

<style lang="scss">

</style>


<script>
	
	export default {
		data() {
			return {
				selected: [],
				tableData3: [{
		          date: '2016-05-03',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2016-05-02',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2016-05-08',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2016-05-06',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2016-05-07',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }]
			}
		},
		methods: {
			  // 全选(参数为tableData)
		      tableSelectAllFn(selection) {
		      	console.log(JSON.stringify(selection, null, '\t'));

		      },
		      // 单选: 
		      // selectionselection ==> 所有选中的行
		      // rows ==> 当前选中的行
		      tableselectFN(selection, rows) {
		        	// console.log(JSON.stringify(selection, null, '\t'))
		        	// console.log(JSON.stringify(rows, null, '\t'))
		      },
		      // change
		      // selectionselection ==> 所有选中的行，全选只执行一次
		      tableSelectChange(selection) {
		        this.selected = selection;
		        // console.log(JSON.stringify(this.selected, null, '\t'))
		        // console.log(selection)
		        //for(let i = 0; i < selection.length; i++) {
		          //console.log(selection[i].date);
		        //}
		      },
		}
	}

</script>