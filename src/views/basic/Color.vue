<template>

	

	<div class="el-layout">

		<h4>Color 色彩</h4>
		<p>Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</p>


		<div class="el-section">
			<h4>主色</h4>
			<p>Element 主要品牌颜色是鲜艳、友好的蓝色。</p>
		    <el-row :gutter="20">
		      <el-col :span="8"><div class="color-grid color-light-blue">

		      		Light Blue
					#58B7FF

		      </div></el-col>
		      <el-col :span="8"><div class="color-grid color-blue">
		      		Blue
					#20A0FF

		      </div></el-col>
		      <el-col :span="8"><div class="color-grid color-dark-blue">
		      		Dark Blue
					#1D8CE0
		      </div></el-col>
		    </el-row>
		</div>

		<div class="el-section">
			<h4>辅助色</h4>
			<p>除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。</p>
		    <el-row :gutter="20">
		      <el-col :span="6"><div class="color-grid color-light-blue">

		      		Blue
					#20A0FF

		      </div></el-col>
		      <el-col :span="6"><div class="color-grid color-sucess">
		      		Success
					#13CE66

		      </div></el-col>
		      <el-col :span="6"><div class="color-grid color-warning">
		      		Warning
					#F7BA2A
		      </div></el-col>
		      <el-col :span="6"><div class="color-grid color-danger">
		      		Danger
					#FF4949
		      </div></el-col>
		    </el-row>
		</div>

		<div class="el-section">
			<h4>中性色</h4>
			<p>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>
		    <el-row :gutter="20">
		      <el-col :span="6">
			      	<div class="color-grid color-black">
			      		Black
						#1F2D3D
			      	</div>
			      	<div class="color-grid color-light-black">
			      		Light Black
						#324057
			      	</div>
			      	<div class="color-grid color-extra-light-black">
			      		Extra Light Black
						#475669
			      	</div>
		      </el-col>
		      <el-col :span="6">
		      		<div class="color-grid color-silver">
			      		Silver
						#8492A6
			      	</div>
			      	<div class="color-grid color-light-silver">
			      		Light Silver
						#99A9BF
			      	</div>
			      	<div class="color-grid color-extra-light-silver">
			      		Extra Light Silver
						#C0CCDA
			      	</div>
		      </el-col>
		      <el-col :span="6">
		      		<div class="color-grid color-gray">
			      		Gray
						#D3DCE6
			      	</div>
			      	<div class="color-grid color-light-gray">
			      		Light Gray
						#E5E9F2
			      	</div>
			      	<div class="color-grid color-extra-light-gray">
			      		Extra Light Gray
						#EFF2F7
			      	</div>
		      </el-col>
		      <el-col :span="6">
		      		<div class="color-grid color-dark-white">
			      		Dark White
						#F9FAFC
			      	</div>
			      	<div class="color-grid color-white">
			      		White
						#FFFFFF
			      	</div>
		      </el-col>
		     </el-row>
		</div>


	</div>



</template>

<style lang="scss">
	
	$bgColor: background-color;

	.color-grid {
		height: 40px;
		color: #fff;
		padding: 20px 10px;
		border-radius: 4px;
	}



	.color-light-blue {
		#{$bgColor}: #58B7FF;
	}
	.color-blue {
		#{$bgColor}: #20A0FF;
	}
	.color-dark-blue {
		#{$bgColor}: #1D8CE0;
	}



	.color-sucess {
		#{$bgColor}: #13CE66;
	}
	.color-warning {
		#{$bgColor}: #F7BA2A;
	}
	.color-danger {
		#{$bgColor}: #FF4949;
	}


	.color-black {
		#{$bgColor}: #1F2D3D;
	}
	.color-light-black {
		#{$bgColor}: #324057;
	}
	.color-extra-light-black {
		#{$bgColor}: #475669;
	}


	.color-silver {
		#{$bgColor}: #8492A6;
	}
	.color-light-silver {
		#{$bgColor}: #99A9BF;
	}
	.color-extra-light-silver {
		#{$bgColor}: #C0CCDA;
	}


	.color-gray {
		#{$bgColor}: #D3DCE6;
		color: #5e6d82;
	}
	.color-light-gray {
		#{$bgColor}: #E5E9F2;
		color: #5e6d82;
	}
	.color-extra-light-gray {
		#{$bgColor}: #EFF2F7;
		color: #5e6d82;
	}


	.color-dark-white {
		#{$bgColor}: #F9FAFC;
		color: #5e6d82;
	}
	.color-white {
		#{$bgColor}: #FFF;
		color: #5e6d82;
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