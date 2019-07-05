<template>

	<div class="">
		
		<h2 class="control">控制台</h2>

		<ve-ring :data="chartData"></ve-ring>

		<input type="file" ref="fileInput" id="fileInput" multiple="multiple" name="">
		<button @click="uploadFn">上传</button>

		<img :src="imgSrc" />

	</div>

</template>

<style lang="scss">

$color: #f00;
.control {
	color: $color
}

</style>

<script>
	import { formUploadApi, filesApi } from '@/api/api';
  	import { _get, _post, _upload } from '@/lib/utils';
	export default {
		data() {
			return {
				chartData: {
		          columns: ['日期', '访问用户', '下单用户', '下单率'],
		          rows: [
		            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
		            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
		            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
		            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
		            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
		            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
		          ]
		        },
		        name: 'Vue.component',
		        pNum: 100,

		        imgSrc: ''
			}
		},
		computed: {
		},
		methods: {
			handleChange(val) {
		        console.log(val);
		    },
		    uploadFn() {
		    	// var file = e.target.files[0] || e.dataTransfer.files[0];
		    	let file = this.$refs.fileInput.files[0];
		    	console.log(file);
	            var that = this;
	            let params = {
	                name: 'name',
	                fileUpload: file,
	                addCancelId: 'formUploadApi'
	            };
	            _post({ url: formUploadApi, params, toForm: true }).then(res=>{
	                if(res.success === true) {
	                    this.$message({
	                        type: 'info',
	                        message: res.msg
	                    }); 
	                    this.imgSrc = filesApi + res.fileUrl;
	                }else{
	                    this.$message({
	                        type: 'info',
	                        message: res.msg
	                    }); 
	                }
	            }).catch(function(error){
	            })
	        }
		},
		created() {
		}
	}

</script>