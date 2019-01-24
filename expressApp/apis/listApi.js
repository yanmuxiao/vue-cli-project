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

		var fs = require('fs');
		var source = fs.createReadStream(fileUpload.path);

		var dest = fs.createWriteStream('D:/upload');
		source.pipe(dest);
		source.on('end', function() { 
			fs.unlinkSync(fileUpload.path);
		});   //delete
		source.on('error', function(err) {

		});

	    setTimeout(function() {
	    	res.send({
				success: true,
				status: 200,
				msg:'上传成功！'
			})
	    }, 2000);

	}
}];
module.exports = listApi;