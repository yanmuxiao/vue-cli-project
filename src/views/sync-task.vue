<template>
  
  <div class="router-view">

      <div class="el-btn-wrap">
          <el-input class="search-ipt"
            placeholder="请输入搜索内容"
            icon="search"
            v-model="searchVal"
            :on-icon-click="searchIconClick">
          </el-input>
          <el-button type="danger" @click="newUser">新建</el-button>
          <el-button type="info" @click="batchDelete">批量删除</el-button>
      </div>


      <div class="el-table-wrap">          
          <el-table
            :data="tableData3"
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
              prop="date"
              label="日期"
              min-width="120">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              min-width="120">
            </el-table-column>
            <el-table-column
              prop="province"
              label="省份"
              min-width="120">
            </el-table-column>
            <el-table-column
              prop="city"
              label="市区"
              min-width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              min-width="180">
            </el-table-column>
            <el-table-column
              prop="zip"
              label="邮编"
              min-width="90">
            </el-table-column>


            <el-table-column
              fixed="right"
              label="操作"
              width="100">

              <template scope="scope">
                <el-button type="text" @click="deleteRow(scope.$index, tableData3)" size="small">删除</el-button>
                <el-button type="text" @click="editRow(scope.$index, tableData3)" size="small">编辑</el-button>
              </template>

            </el-table-column>

          </el-table>
      </div>


      <el-dialog title="信息" v-model="dialogFormVisible">

        <el-form label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" :picker-options="pickerOptions" style="width: 100%;"></el-date-picker>
          </el-form-item>

          <el-form-item label="省份">
            <el-input v-model="form.province"></el-input>
          </el-form-item>
          <el-form-item label="市区">
            <el-input v-model="form.city"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="邮编">
            <el-input v-model="form.zip"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="fromConfirm">确 定</el-button>
        </div>
      </el-dialog>


      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="20"
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
  import { getUserList, removeUserList, editUserList, addUserList } from '@/api/api.js'
// var timer = null
  export default {
    methods: {

      // 导航完成之后获取数据
      fetchData(page) {
          let loadingInstance = this.$loading({ 
            fullscreen: true,
            customClass: 'loadingClass'
          });

          getUserList(page).then(res => {
              if(res.data.code == 200) {
                  this.tableData3.length = 0;
                  this.tableData3 = this.tableData3.concat(res.data.pageData);
                  this.taskListCount = res.data.total;
                  loadingInstance.close();
              }
          })
          
      },

      // 删除行
      deleteRow(index, rows) {

        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          type: 'warning'
        }).then(() => {
            let loadingInstance = this.$loading({ 
              fullscreen: true,
              customClass: 'loadingClass'
            });

            removeUserList({rmObj: [rows[index]]}).then(res => {
                if(res.data.code == 200) {
                  this.fetchData({currentPage: this.currentPage, searchVal: this.searchVal});
                }
            })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });  
        });

      },

      editRow(index, row) {

          this.addEdit = 'edit';

          let rowObj = row[index];
          this.form.name = rowObj.name;
          this.form.province = rowObj.province;
          this.form.date = rowObj.date;
          this.form.city = rowObj.city;
          this.form.address = rowObj.address;
          this.form.zip = rowObj.zip;
          this.form.id = rowObj.id;
          this.dialogFormVisible = true;
        
      },
      newUser() {

          this.addEdit = 'add';

          this.form.name = '';
          this.form.province = '';
          this.form.date = '';
          this.form.city = '';
          this.form.address = '';
          this.form.zip = '';
          this.form.id = '';

          this.dialogFormVisible = true;
      },

      searchIconClick() {
            this.currentPage = 1;
            this.fetchData({currentPage: 1, searchVal: this.searchVal});
      },

      // 全选(参数为tableData)
      tableSelectAllFn(rows) {
        //for(let i = 0; i < rows.length; i++) {
          //console.log(rows[i].date);
        //}

        //console.log(rows.length);

      },

      // 单选
      tableselectFN(selection, rows) {
        
      },


      // change
      tableSelectChange(selection) {
        this.selected = selection;
        //for(let i = 0; i < selection.length; i++) {
          //console.log(selection[i].date);
        //}
      },
      // row-click
      rowClickFn(row, event, column) {
         // console.log('row-click');
      },

      batchDelete() {

        if(this.selected.length <= 0) {
            this.$message({
              type: 'info',
              message: '请选择要删除的内容！'
            }); 
            return;
        }

        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {

          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'

        }).then(() => {
            let loadingInstance = this.$loading({ 
              fullscreen: true,
              customClass: 'loadingClass'
            });
            removeUserList({rmObj: this.selected}).then(res => {
                if(res.data.code == 200) {
                    this.fetchData({currentPage: this.currentPage, searchVal: this.searchVal});
                }
            })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });


      },

      // 保存表单
      fromConfirm () {

          let loadingInstance = this.$loading({ 
            fullscreen: true,
            customClass: 'loadingClass'
          });

          this.form.date = new Date(this.form.date).format("yyyy-MM-dd");

          if(this.addEdit == 'edit') {
              editUserList({editForm: this.form}).then(res => {
                  if(res.data.code == 200) {
                      this.dialogFormVisible = false;
                      this.fetchData({currentPage: this.currentPage, searchVal: this.searchVal});
                  }
              })
          } else {
              addUserList({addUserForm: this.form}).then(res => {
                  if(res.data.code == 200) {
                      this.dialogFormVisible = false;
                      this.fetchData({currentPage: this.currentPage, searchVal: this.searchVal});
                  }
              })
          }
          
      },

      handleSizeChange(val) {
        this.fetchData({currentPage: val, searchVal: this.searchVal});
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.fetchData({currentPage: val, searchVal: this.searchVal});
      },
      // onSearch() {
      //     this.state = this.state + 1;
      //     setTimeout(()=>{
      //       this.state = this.state - 1;
      //       if(this.state <= 0) {
      //           console.log(this.searchVal)
      //       }
      //     },500)
      // },
      // debounce(delay) {
      //   clearTimeout(timer);
      //   timer = setTimeout(() => {
      //       console.log(`你搜索的是`+this.searchVal)
      //   }, delay);
      // },
      // highSearch() {
      //   this.debounce(1200);
      // }

    },
    data() {

      return {
        state: 0,
        selected: [],
        dialogFormVisible: false,
        form: {
          name : '',
          province : '',
          date : new Date(),
          city : '',
          address : '',
          zip : '',
          id : ''
        },
        addEdit: 'edit',
        formLabelWidth: '120px',
        idIndex: 20,
        tableData3: [],

        searchVal: '',


        currentPage: 1,
        taskListCount: 0,
        pageCount: 0,
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },

        fullscreenLoading: false
      }

    },
    created() {
        //this.fetchData({currentPage: this.currentPage, searchVal: this.searchVal});// 导航完成之后获取数据
    }
}
</script>