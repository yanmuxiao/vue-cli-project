<template>

	<div class="">
		
		<h2 class="control">控制台</h2>

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