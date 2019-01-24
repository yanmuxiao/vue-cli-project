
var fs = require('fs');

const listApi = [{
	url: '/list/getProductList',
	callback: (req, res)=>{
	    res.send({
			success: true,
			status: 200,
			list: [{id: 001, name: 'name'},{id: 002, name: 'name'}],
			msg:'获取商品列表成功！'
		})
	}
},{
	url: '/form/upload',
	formData: true,
	callback: (req, res)=>{

		let { name } = req.body;
		let { fileUpload } = req.files;
		console.log(fileUpload);

		var { size, type, path } = fileUpload;

		// var source = fs.createReadStream(fileUpload.path);
		// var dest = fs.createWriteStream('D:\\0vuejs\\vue-cli\\vue-cli-project\\expressApp\\upload');
		// source.pipe(dest);
		// source.on('end', function() { 
		// 	fs.unlinkSync(fileUpload.path);
		// });   //delete
		// source.on('error', function(err) {});

	    setTimeout(function() {
	    	if(size > 1024 * 1024 * 10) { // 上传的文件大小不能大于10M
	    		fs.unlinkSync(fileUpload.path);
	    		res.send({
					success: false,
					status: 200,
					msg:'上传失败！'
				})
	    	}else{
	    		res.send({
					success: true,
					status: 200,
					msg:'上传成功！'
				})
	    	}
	    }, 1000);

	}
}];
module.exports = listApi;