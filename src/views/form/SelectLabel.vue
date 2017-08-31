<template>

	<div class="">

		<br><br>
	    <template>
	        <el-select v-model="value" placeholder="请选择">
	          <el-option
	            v-for="item in options"
	            :label="item.label"
	            :value="item.value">
	          </el-option>
	        </el-select>
	    </template>

	</div>

</template>
<style>


</style>
<script>
	
	export default {
		data() {
			return {
				options: [{
	              value: '选项1',
	              label: '黄金糕'
	            }, {
	              value: '选项2',
	              label: '双皮奶'
	            }, {
	              value: '选项3',
	              label: '蚵仔煎'
	            }, {
	              value: '选项4',
	              label: '龙须面'
	            }, {
	              value: '选项5',
	              label: '北京烤鸭'
	            }],
	            value: '',
	            options2: [{
	              value: '选项1',
	              label: '黄金糕'
	            }, {
	              value: '选项2',
	              label: '双皮奶',
	              disabled: true
	            }, {
	              value: '选项3',
	              label: '蚵仔煎'
	            }, {
	              value: '选项4',
	              label: '龙须面'
	            }, {
	              value: '选项5',
	              label: '北京烤鸭'
	            }],
	            value2: '',
	            options3: [{
	              value: '选项1',
	              label: '黄金糕'
	            }, {
	              value: '选项2',
	              label: '双皮奶'
	            }, {
	              value: '选项3',
	              label: '蚵仔煎'
	            }, {
	              value: '选项4',
	              label: '龙须面'
	            }, {
	              value: '选项5',
	              label: '北京烤鸭'
	            }],
	            value3: '',
	            options4: [{
	              value: '选项1',
	              label: '黄金糕'
	            }, {
	              value: '选项2',
	              label: '双皮奶'
	            }, {
	              value: '选项3',
	              label: '蚵仔煎'
	            }, {
	              value: '选项4',
	              label: '龙须面'
	            }, {
	              value: '选项5',
	              label: '北京烤鸭'
	            }],
	            value4: '',
	            options5: [{
	              value: '选项1',
	              label: '黄金糕'
	            }, {
	              value: '选项2',
	              label: '双皮奶'
	            }, {
	              value: '选项3',
	              label: '蚵仔煎'
	            }, {
	              value: '选项4',
	              label: '龙须面'
	            }, {
	              value: '选项5',
	              label: '北京烤鸭'
	            }],
	            value5: [],
	            cities: [{
	              value: 'Beijing',
	              label: '北京'
	            }, {
	              value: 'Shanghai',
	              label: '上海'
	            }, {
	              value: 'Nanjing',
	              label: '南京'
	            }, {
	              value: 'Chengdu',
	              label: '成都'
	            }, {
	              value: 'Shenzhen',
	              label: '深圳'
	            }, {
	              value: 'Guangzhou',
	              label: '广州'
	            }],
	            value6: '',


	            options7: [{
	              label: '热门城市',
	              options: [{
	                value: 'Shanghai',
	                label: '上海'
	              }, {
	                value: 'Beijing',
	                label: '北京'
	              }]
	            }, {
	              label: '城市名',
	              options: [{
	                value: 'Chengdu',
	                label: '成都'
	              }, {
	                value: 'Shenzhen',
	                label: '深圳'
	              }, {
	                value: 'Guangzhou',
	                label: '广州'
	              }, {
	                value: 'Dalian',
	                label: '大连'
	              }]
	            }],
	            value7: '',


	            options8: [{
	              value: '选项1',
	              label: '黄金糕'
	            }, {
	              value: '选项2',
	              label: '双皮奶'
	            }, {
	              value: '选项3',
	              label: '蚵仔煎'
	            }, {
	              value: '选项4',
	              label: '龙须面'
	            }, {
	              value: '选项5',
	              label: '北京烤鸭'
	            }],
	            value8: ''
			}
		},
		methods: {
		},
		mounted() {
		}
	}


</script>