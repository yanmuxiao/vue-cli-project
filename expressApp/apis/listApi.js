
let fs = require('fs');
let path = require('path');

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
		console.log(req.files.fileUpload);
		let { size, type, path: fileUrl, name: reFileName } = req.files.fileUpload;
	    setTimeout(function() {
	    	if(size > 1024 * 1024 * 10) { // 上传的文件大小不能大于10M
	    		fs.unlinkSync(fileUrl);
	    		res.send({
					success: false,
					status: 200,
					msg:'上传失败！'
				})
	    	}else{
				// 有两种方式：异步fs.rename或同步fs.renameSync更改，同步fs.renameSync更改没有回调，所以res.send不能写在回调中
	    		fs.rename(fileUrl, './upload/' + reFileName, function() {
	    			res.send({
						success: true,
						status: 200,
						fileUrl: '/' + reFileName,
						msg:'上传成功！'
					})
	    		});
	    	}
	    }, 1000);
	}
},{
	url: '/files/*', // 正则匹配
	callback: (req, res)=>{
		// __dirname ==> 代表当前文件所在的目录，即: D:\vueJsProject\vue-cli-project\expressApp\apis，但是/apis是多余的
		console.log(path.join(__dirname.replace(/\\apis$/, ''), './upload/' + encodeURIComponent(req.url.replace('/files/', ''))));
		fs.readFile(path.join(__dirname.replace(/\\apis$/, ''), './upload' + req.url.replace('/files', '')), "binary", function(error,file){
	       if(error){
	            res.writeHead(500,{"Content-Type": "text/plain"});
	            res.write(error+ "\n");
	            res.end();
	       }else{
	           res.writeHead(200,{"Content-Type": "image/png"});
	           res.write(file, "binary");
	           res.end();
	       }
	   });
	}
}];
module.exports = listApi;