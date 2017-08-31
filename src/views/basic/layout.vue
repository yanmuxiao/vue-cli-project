<template>

	

	<div class="el-layout">

		<div class="el-section">
			<h4>基础布局:</h4>
			<p>使用单一分栏创建基础的栅格布局。</p>
			<el-row>
		      <el-col :span="24"><div class="grid-content bg-purple-dark">121212</div></el-col>
		    </el-row>
		    <el-row>
		      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
		      <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
		    </el-row>
		    <el-row>
		      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
		      <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
		      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
		    </el-row>
		    <el-row>
		      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
		      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
		    </el-row>
		    <el-row>
		      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		    </el-row>
		</div>


		<div class="el-section">
			<h4>分栏间隔:</h4>
			<p>分栏之间存在间隔。</p>
			<el-row :gutter="20">
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
		</div>


		<div class="el-section">
			<h4>混合布局:</h4>
			<p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
			<el-row :gutter="20">
			  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
			<el-row :gutter="20">
			  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
			<el-row :gutter="20">
			  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
		</div>

		<div class="el-section">
			<h4>分栏偏移:</h4>
			<p>支持偏移指定的栏数。</p>
			<el-row :gutter="20">
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
			<el-row :gutter="20">
			  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
			<el-row :gutter="20">
			  <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
		</div>

		<div class="el-section">
			<h4>对齐方式:</h4>
			<p>通过 flex 布局来对分栏进行灵活的对齐。</p>
			<el-row type="flex" class="row-bg">
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
			<el-row type="flex" class="row-bg" justify="center">
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
			<el-row type="flex" class="row-bg" justify="end">
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
			<el-row type="flex" class="row-bg" justify="space-between">
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
			<el-row type="flex" class="row-bg" justify="space-around">
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
		</div>

		<div class="el-section">
			<h4>响应式布局:</h4>
			<p>参照了 Bootstrap 的 响应式设计，预设了四个响应尺寸：xs、sm、md和lg。</p>
			<el-row :gutter="10">
			  <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple-light"></div></el-col>
			  <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple-light"></div></el-col>
			</el-row>
		</div>


		<div class="el-section">

			<h4>Row Attributes</h4>
			<template>
		        <el-table
		          :data="RowAttributes"
		          style="width: 100%">
		          <el-table-column
		            prop="arg"
		            label="参数"
		            width="180">
		          </el-table-column>
		          <el-table-column
		            prop="state"
		            label="说明"
		            width="180">
		          </el-table-column>
		          <el-table-column
		            prop="type"
		            label="类型">
		          </el-table-column>
		          <el-table-column
		            prop="optional"
		            label="可选值">
		          </el-table-column>
		          <el-table-column
		            prop="default"
		            label="默认值">
		          </el-table-column>
		        </el-table>
		     </template>

		</div>


		<div class="el-section">

			<h4>Col Attributes</h4>
			<template>
		        <el-table
		          :data="ColAttributes"
		          style="width: 100%">
		          <el-table-column
		            prop="arg"
		            label="参数"
		            width="180">
		          </el-table-column>
		          <el-table-column
		            prop="state"
		            label="说明"
		            width="180">
		          </el-table-column>
		          <el-table-column
		            prop="type"
		            label="类型">
		          </el-table-column>
		          <el-table-column
		            prop="optional"
		            label="可选值">
		          </el-table-column>
		          <el-table-column
		            prop="default"
		            label="默认值">
		          </el-table-column>
		        </el-table>
		     </template>

		</div>


	</div>



</template>

<style>

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


  .el-section {
  		margin-bottom: 20px;
  }


</style>


<script>
	
	export default {
		data() {
			return {
				RowAttributes: [{
		            arg: 'gutter',
		            state: '栅格间隔',
		            type: 'number',
		            optional: '—',
		            default: '0'
		        },{
		            arg: 'type',
		            state: '布局模式，可选 flex，现代浏览器下有效',
		            type: 'string',
		            optional: '—',
		            default: '—'
		        },{
		            arg: 'justify',
		            state: 'flex 布局下的水平排列方式',
		            type: 'string',
		            optional: 'start/end/center/space-around/space-between',
		            default: 'start'
		        },{
		            arg: 'align',
		            state: 'flex 布局下的垂直排列方式',
		            type: 'string',
		            optional: 'top/middle/bottom',
		            default: 'top'
		        }],
		        ColAttributes: [{
		            arg: 'span',
		            state: '栅格占据的列数',
		            type: 'number',
		            optional: '—',
		            default: '-'
		        },{
		            arg: 'offset',
		            state: '栅格左侧的间隔格数',
		            type: 'number',
		            optional: '—',
		            default: '0'
		        },{
		            arg: 'push',
		            state: '栅格向右移动格数',
		            type: 'number',
		            optional: '—',
		            default: '0'
		        },{
		            arg: 'pull',
		            state: '栅格向左移动格数',
		            type: 'number',
		            optional: '—',
		            default: '0'
		        },{
		            arg: 'xs',
		            state: '<768px 响应式栅格数或者栅格属性对象',
		            type: 'number/object (例如： {span: 4, offset: 4})',
		            optional: '—',
		            default: '-'
		        },{
		            arg: 'sm',
		            state: '≥768px 响应式栅格数或者栅格属性对象',
		            type: 'number/object (例如： {span: 4, offset: 4})',
		            optional: '—',
		            default: '-'
		        },{
		            arg: 'md',
		            state: '≥992 响应式栅格数或者栅格属性对象',
		            type: 'number/object (例如： {span: 4, offset: 4})',
		            optional: '—',
		            default: '-'
		        },{
		            arg: 'lg',
		            state: '≥1200 响应式栅格数或者栅格属性对象',
		            type: 'number/object (例如： {span: 4, offset: 4})',
		            optional: '—',
		            default: '-'
		        }]
			}

		},
		methods: {

		}
	}

</script>