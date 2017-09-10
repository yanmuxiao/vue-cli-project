<template>
	<div>
		
		<h5>消息提示alert</h5>
		<p>当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。</p>
		<el-button type="text" @click="open">点击打开 Message Box</el-button>


		<h5>确认消息confirm</h5>
		<p>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</p>
		<el-button type="text" @click="open2">点击打开 Message Box</el-button>


		<h5>提交内容prompt</h5>
		<p>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</p>
		<el-button type="text" @click="open3">点击打开 Message Box</el-button>

		<h5>自定义</h5>
		<p>可自定义配置不同内容。</p>
		<el-button type="text" @click="open4">点击打开 Message Box</el-button>



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
		        this.$alert('这是一段内容', '标题名称', {
		          confirmButtonText: '确定',
		          callback: action => {
		            this.$message({
		              type: 'info',
		              message: `action: ${ action }`
		            });
		          }
		        });
		    },

		    open2() {
		        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		    }).then(() => {
		          this.$message({
		            type: 'success',
		            message: '删除成功!'
		          });
		    }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消删除'
		          });          
		        });
		    },

		    open3() {
		        this.$prompt('请输入邮箱', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          inputErrorMessage: '邮箱格式不正确'
		    }).then(({ value }) => {
		          this.$message({
		            type: 'success',
		            message: '你的邮箱是: ' + value
		          });
		    }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '取消输入'
		          });       
		        });
		    },
		    open4() {
		        const h = this.$createElement;
		        this.$msgbox({
		          title: '消息',
		          message: h('p', null, [
		            h('span', null, '内容可以是 '),
		            h('i', { style: 'color: teal' }, 'VNode')
		          ]),
		          showCancelButton: true,
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          beforeClose: (action, instance, done) => {
		            if (action === 'confirm') {
		              instance.confirmButtonLoading = true;
		              instance.confirmButtonText = '执行中...';
		              setTimeout(() => {
		                done();
		                setTimeout(() => {
		                  instance.confirmButtonLoading = false;
		                }, 300);
		              }, 3000);
		            } else {
		              done();
		            }
		          }
		    }).then(action => {
		          this.$message({
		            type: 'info',
		            message: 'action: ' + action
		          });
		        });
		      },



		}
	}

</script>