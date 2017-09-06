<template>
	<div>
		<br>
		<h5>环形进度条</h5>
		<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

		
		<br>
		<h5>可选择</h5>
		<p>适用于需要选择层级时使用。在下例中，由于在点击时才进行该层数据的获取，导致层级不可预知，如果没有下层数据，则点击后下拉按钮会消失。</p>
		<el-tree
		  :data="regions"
		  :props="props"
		  :load="loadNode"
		  lazy
		  show-checkbox
		  @check-change="handleCheckChange">
		</el-tree>


	</div>
</template>

<style lang="scss">

</style>


<script>
	
	export default {
		data() {
			return {
				data: [{
		          label: '一级 1',
		          children: [{
		            label: '二级 1-1',
		            children: [{
		              label: '三级 1-1-1'
		            }]
		          }]
		        }, {
		          label: '一级 2',
		          children: [{
		            label: '二级 2-1',
		            children: [{
		              label: '三级 2-1-1'
		            }]
		          }, {
		            label: '二级 2-2',
		            children: [{
		              label: '三级 2-2-1'
		            }]
		          }]
		        }, {
		          label: '一级 3',
		          children: [{
		            label: '二级 3-1',
		            children: [{
		              label: '三级 3-1-1'
		            }]
		          }, {
		            label: '二级 3-2',
		            children: [{
		              label: '三级 3-2-1'
		            }]
		          }]
		        }],
		        defaultProps: {
		          children: 'children',
		          label: 'label'
		        },


		        // 可选择
		        regions: [{
		          'name': 'region1'
		        }, {
		          'name': 'region2'
		        }],
		        props: {
		          label: 'name',
		          children: 'zones'
		        },
		        count: 1
			}
		},
		methods: {

			handleNodeClick(data) {
		        console.log(data);
		    },

		    // 可选择
		    handleCheckChange(data, checked, indeterminate) {
		        console.log(data, checked, indeterminate);
		      },
		      handleNodeClick(data) {
		        console.log(data);
		      },
		      loadNode(node, resolve) {
		        if (node.level === 0) {
		          return resolve([{ name: 'region1' }, { name: 'region2' }]);
		        }
		        if (node.level > 3) return resolve([]);

		        var hasChild;
		        if (node.data.name === 'region1') {
		          hasChild = true;
		        } else if (node.data.name === 'region2') {
		          hasChild = false;
		        } else {
		          hasChild = Math.random() > 0.5;
		        }

		        setTimeout(() => {
		          var data;
		          if (hasChild) {
		            data = [{
		              name: 'zone' + this.count++
		            }, {
		              name: 'zone' + this.count++
		            }];
		          } else {
		            data = [];
		          }

		          resolve(data);
		        }, 500);
		      }

					
		}
	}

</script>