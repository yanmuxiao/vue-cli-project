<template>
	<div>
		
		<h5>基本用法</h5>
		<p>页面中的非浮层元素，不会自动消失。</p>
		<el-alert
		title="成功提示的文案"
		type="success">
		</el-alert>
		<el-alert
		title="消息提示的文案"
		type="info">
		</el-alert>
		<el-alert
		title="警告提示的文案"
		type="warning">
		</el-alert>
		<el-alert
		title="错误提示的文案"
		type="error">
		</el-alert>


		<h5>带有辅助性文字介绍</h5>
		<p>包含标题和内容，解释更详细的警告。</p>
		<el-alert
		title="带辅助性文字介绍"
		type="success"
		description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
		</el-alert>

		<h5>带有 icon 和辅助性文字介绍</h5>
		<el-alert
		title="成功提示的文案"
		type="success"
		description="文字说明文字说明文字说明文字说明文字说明文字说明"
		show-icon>
		</el-alert>
		<el-alert
		title="消息提示的文案"
		type="info"
		description="文字说明文字说明文字说明文字说明文字说明文字说明"
		show-icon>
		</el-alert>
		<el-alert
		title="警告提示的文案"
		type="warning"
		description="文字说明文字说明文字说明文字说明文字说明文字说明"
		show-icon>
		</el-alert>
		<el-alert
		title="错误提示的文案"
		type="error"
		description="文字说明文字说明文字说明文字说明文字说明文字说明"
		show-icon>
		</el-alert>




	</div>
</template>

<style lang="scss" scoped>

.el-alert {
	margin: 20px 0;
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