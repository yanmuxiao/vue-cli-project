<template>
  
  <div class="router-view">

      <div class="el-btn-wrap">
          <el-input class="search-ipt"
            placeholder="请输入搜索内容"
            icon="search"
            v-model="searchVal"
            :on-icon-click="searchIconClick">
          </el-input>
      </div>

      <div class="el-table-wrap">          
          <el-table
            :data="tableDataList"
            border
            max-height="500"

            @select-all="tableSelectAllFn"
            @select = "tableselectFN"
            @selection-change = "tableSelectChange"
            @row-click = "rowClickFn"

            >

            <el-table-column
              fixed
              type="selection"
              width="48">
            </el-table-column>

            <el-table-column
              prop="recordId"
              label="流程号"
              min-width="250">
            </el-table-column>
            <el-table-column
              prop="name"
              label="流程名称"
              min-width="120">
            </el-table-column>
            <el-table-column
              prop="companyName "
              label="创建单位"
              min-width="120">
            </el-table-column>
            <el-table-column
              prop="startTime"
              label="创建时间"
              min-width="120">
            </el-table-column>
            <el-table-column
              prop="status"
              label="当前节点"
              min-width="100">
            </el-table-column>

            <el-table-column
              fixed="right"
              label="操作"
              width="80">

              <template slot-scope="scope">
                <el-button type="text" @click="editList(scope.$index, tableDataList)" size="small">修改</el-button>
              </template>

            </el-table-column>

          </el-table>
      </div>

      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="5"
      layout="total, prev, pager, next, jumper"
      :total="taskListCount">
      </el-pagination>

  </div>

</template>


<style lang="scss">
  
  .el-btn-wrap {
      padding-bottom: 15px;
  }
  .search-ipt {
      width: 200px;
      margin-right: 10px;
  }
  .el-pagination {
      padding: 30px 0;
      text-align: center;
  }
  .loadingClass {
      background-color: rgba(0,0,0,0.1);
  }

</style>

<script>
  
  import "@/lib/dateFormat.js" // 日期格式化
  import { activityListApi, activityDetailApi } from '@/api/dxhdApi';
  import { _get } from '@/lib/utils';

  export default {
      methods: {

          // 导航完成之后获取数据
          fetchData(page) {
              _get({ url: activityListApi, params: page, toForm: true }).then(res=>{
                  this.tableDataList.length = 0;
                  this.tableDataList = this.tableDataList.concat(res.rows);
                  this.taskListCount = res.total;
              }).catch(error => {
              })
          },
          // 删除行
          editList(index, rows) {
              _get({ url: activityDetailApi, params: { activityId: rows[index].activityId} }).then(res=>{

              }).catch(error => {
              })
          },
          searchIconClick() {
                this.currentPage = 1;
                this.fetchData({ page: 1, size: 5, state: 'all'});
          },
          // 全选(参数为tableData)
          tableSelectAllFn(rows) {
          },
          // 单选
          tableselectFN(selection, rows) {
            
          },
          // change
          tableSelectChange(selection) {
            this.selected = selection;
          },
          // row-click
          rowClickFn(row, event, column) {
             console.log('row-click');
          },
          handleSizeChange(val) {
            this.fetchData({ page: val, size: 5, state: 'all' });
          },
          handleCurrentChange(val) {
            this.currentPage = val;
            this.fetchData({ page: val, size: 5, state: 'all'});
          },

      },
      data() {

          return {
            selected: [],
            searchVal: '',
            tableDataList: [],  // 列表
            currentPage: 1,     // 当前页数
            taskListCount: 0,   // 总条数
          }

      },
      created() {
          this.fetchData({ page: this.currentPage, size: 5, state: 'all' });// 导航完成之后获取数据
      },
      watch: {

      },
      computed: {

      }
  }
</script>