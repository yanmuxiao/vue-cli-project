<template>
	<div>
		
		<h5>基础用法</h5>
		<p>从顶部出现，3 秒后自动消失。</p>
		<el-button :plain="true" @click="open">打开消息提示</el-button>
  		<el-button :plain="true" @click="openVn">VNode</el-button>
		
		<h5>不同状态</h5>
		<p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
		<el-button :plain="true" @click="open2">消息</el-button>
		<el-button :plain="true" @click="open3">成功</el-button>
		<el-button :plain="true" @click="open4">警告</el-button>
		<el-button :plain="true" @click="open5">错误</el-button>



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
		        this.$message('这是一条消息提示');
		    },

		    openVn() {
		        const h = this.$createElement;
		        this.$message({
		          message: h('p', null, [
		            h('span', null, '内容可以是 '),
		            h('i', { style: 'color: teal' }, 'VNode')
		          ])
		        });
		    },


			open2() {
				this.$message('这是一条消息提示');
			},
			open3() {
				this.$message({
				  message: '恭喜你，这是一条成功消息',
				  type: 'success'
				});
			},

			open4() {
				this.$message({
				  message: '警告哦，这是一条警告消息',
				  type: 'warning',
				  showClose: true,
				});
			},

			open5() {
				this.$message.error('错了哦，这是一条错误消息');
			}


		}
	}

</script>