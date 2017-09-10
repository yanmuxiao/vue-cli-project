<template>
	<div>
		
		<h5>基本用法</h5>
		<p>适用性广泛的通知栏</p>
		<el-button
	    plain
	    @click="open">
	    可自动关闭
	  </el-button>
	  <el-button
	    plain
	    @click="open2">
	    不会自动关闭
	    </el-button>


	    <h5>带有倾向性</h5>
		<p>带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息</p>
		<el-button
		    plain
		    @click="open3">
		    成功
		  </el-button>
		  <el-button
		    plain
		    @click="open4">
		    警告
		  </el-button>
		  <el-button
		    plain
		    @click="open5">
		    消息
		  </el-button>
		  <el-button
		    plain
		    @click="open6">
		    错误
		  </el-button>

	</div>
</template>

<style lang="scss" scoped>


</style>


<script>
	
	export default {
		data() {
			return {
			}
		},
		methods: {
			open() {
		        const h = this.$createElement;

		        this.$notify({
		          title: '标题名称',
		          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
		        });
		    },

		   open2() {
		        this.$notify({
		          title: '提示',
		          message: '这是一条不会自动关闭的消息',
		          duration: 0
		        });
		    },


		  open3() {
	        this.$notify({
	          title: '成功',
	          message: '这是一条成功的提示消息',
	          type: 'success'
	        });
	      },

	      open4() {
	        this.$notify({
	          title: '警告',
	          message: '这是一条警告的提示消息',
	          type: 'warning'
	        });
	      },

	      open5() {
	        this.$notify.info({
	          title: '消息',
	          message: '这是一条消息的提示消息'
	        });
	      },

	      open6() {
	        this.$notify.error({
	          title: '错误',
	          message: '这是一条错误的提示消息',
	          offset: 100
	        });
	      }



		}
	}

</script>