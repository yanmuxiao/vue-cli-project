<template>
	<div>
		
		<h5>基础用法</h5>
		<el-tag>标签一</el-tag>
		<el-tag type="gray">标签二</el-tag>
		<el-tag type="primary">标签三</el-tag>
		<el-tag type="success">标签四</el-tag>
		<el-tag type="warning">标签五</el-tag>
		<el-tag type="danger">标签六</el-tag>
		
		
		<h5>可移除标签</h5>
		<el-tag
		  v-for="tag in tags"
		  :key="tag.name"
		  :closable="true"
		  :type="tag.type"
		>
		{{tag.name}}
		</el-tag>


		<h5>动态编辑标签</h5>
		<el-tag
		  :key="tag"
		  v-for="tag in dynamicTags"
		  :closable="true"
		  :close-transition="false"
		  @close="handleClose(tag)"
		>
		{{tag}}
		</el-tag>
		<el-input
		  class="input-new-tag"
		  v-if="inputVisible"
		  v-model="inputValue"
		  ref="saveTagInput"
		  size="mini"
		  @keyup.enter.native="handleInputConfirm"
		  @blur="handleInputConfirm"
		>
		</el-input>
		<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

	</div>
</template>

<style lang="scss">

</style>


<script>
	
	export default {
		data() {
			return {
				tags: [
		          { name: '标签一', type: '' },
		          { name: '标签二', type: 'gray' },
		          { name: '标签三', type: 'primary' },
		          { name: '标签四', type: 'success' },
		          { name: '标签五', type: 'warning' },
		          { name: '标签六', type: 'danger' }
		        ],


		        // 动态编辑标签
		        dynamicTags: ['标签一', '标签二', '标签三'],
		        inputVisible: false,
		        inputValue: ''


			}
		},
		methods: {

			
			// 动态编辑标签
			handleClose(tag) {
				this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
			},

			showInput() {
				this.inputVisible = true;
				this.$nextTick(_ => {
				  this.$refs.saveTagInput.$refs.input.focus();
				});
			},

			handleInputConfirm() {
				let inputValue = this.inputValue;
				if (inputValue) {
				  this.dynamicTags.push(inputValue);
				}
				this.inputVisible = false;
				this.inputValue = '';
			}
		}
	}

</script>