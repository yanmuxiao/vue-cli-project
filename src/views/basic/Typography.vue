<template>

	

	<div class="el-layout">

		<h4>Typography 字体</h4>
		<p>我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。</p>


		<div class="el-section">
			<h4>中文字体</h4>
		    <el-row :gutter="8">

		      <el-col :span="6">
			      	<div class="typography-box typo-PingFang">
			      		和畅惠风
			      		<div class="typography-name">PingFang SC</div>
			      	</div>
		      </el-col>

		      <el-col :span="6">
			      	<div class="typography-box typo-Hiragino">
			      		和畅惠风
			      		<div class="typography-name">Hiragino Sans GB</div>
			      	</div>
		      </el-col>

		      <el-col :span="6">
			      	<div class="typography-box typo-Microsoft">
			      		和畅惠风
			      		<div class="typography-name">Microsoft YaHei</div>
			      	</div>
		      </el-col>

		      <el-col :span="6">
		      </el-col>

		     </el-row>
		</div>


		<div class="el-section">
			<h4>英文／数字字体</h4>
		    <el-row :gutter="8">

		      <el-col :span="6">
			      	<div class="typography-box typo-Helvetica-neue">
			      		RGag
			      		<div class="typography-name">Helvetica Neue</div>
			      	</div>
		      </el-col>

		      <el-col :span="6">
			      	<div class="typography-box typo-Helvetica">
			      		RGag
			      		<div class="typography-name">Helvetica</div>
			      	</div>
		      </el-col>

		      <el-col :span="6">
			      	<div class="typography-box typo-Arial">
			      		RGag
			      		<div class="typography-name">Arial</div>
			      	</div>
		      </el-col>

		      <el-col :span="6">
		      </el-col>

		     </el-row>
		</div>



		<div class="el-section">

			<h4>字体使用规范</h4>
			<template class="typhography-style">
		        <el-table
		          :data="typhographyRule"
		          style="width: 100%">
		          <el-table-column
		            prop="mainTitle"
		            label="类型"
		            width="180">
		          </el-table-column>
		          <el-table-column
		            prop="example"
		            label="例子"
		            width="180">
		          </el-table-column>
		          <el-table-column
		            prop="cssStyle"
		            label="样式">
		          </el-table-column>
		        </el-table>
		     </template>

		</div>


	</div>



</template>

<style lang="scss">

	$WH: 200px;
	
	.typography-box {
		height: $WH;
	    width: $WH;
	    position: relative;
	    border: 1px solid #eaeefb;
	    font-size: 40px;
	    color: #1f2d3d;
	    text-align: center;
	    line-height: 162px;
	    padding-bottom: 36px;
	    box-sizing: border-box;
	    display: inline-block;
	    margin-right: 17px;
	    border-radius: 4px;
	}
	.typography-name {
		position: absolute;
	    bottom: 0;
	    width: 100%;
	    height: 35px;
	    border-top: 1px solid #eaeefb;
	    font-size: 14px;
	    color: #8492a6;
	    line-height: 35px;
	    text-align: left;
	    text-indent: 10px;
	    font-family: Helvetica Neue;
	}



	.typo-PingFang {
		font-family: PingFang SC;
	}
	.typo-Hiragino {
		font-family: Hiragino Sans GB;
	}
	.typo-Microsoft {
	    font-family: Microsoft YaHei;
	}


	.typo-Helvetica {
	    font-family: Helvetica;
	}
	.typo-Arial {
	    font-family: Arial;
	}



</style>


<script>
	
	export default {
		data() {
			return {
				typhographyRule: [{
		            mainTitle: '主标题',
		            example: '用 Element 快速搭建页面',
		            cssStyle: '20px Extra large'
		        },{
		            mainTitle: '标题',
		            example: '用 Element 快速搭建页面',
		            cssStyle: '18px large'
		        },{
		            mainTitle: '主标题',
		            example: '用 Element 快速搭建页面',
		            cssStyle: '20px Extra large'
		        },{
		            mainTitle: '小标题',
		            example: '用 Element 快速搭建页面',
		            cssStyle: '16px Medium'
		        },{
		            mainTitle: '正文',
		            example: '用 Element 快速搭建页面',
		            cssStyle: '14px Small'
		        },{
		            mainTitle: '正文（小）',
		            example: '用 Element 快速搭建页面',
		            cssStyle: '20px Extra large'
		        },{
		            mainTitle: '辅助文字',
		            example: '用 Element 快速搭建页面',
		            cssStyle: '12px Extra Extra Small'
		        }]
			}
		},
		methods: {

		}
	}

</script>