
// Models
const UserModels = require('../models/users.js'); 
const loginApi = [{
	type: 'POST',
	url: '/user/register',
	callback: (req, res)=>{
		UserModels.Users.findOne({ name: req.body.name }, 'name', (err, doc) => {
			if(err) {
				console.log(err);
			}else if(doc) {
				res.send({
					success: false,
					status: 222,
					msg: '该用户已存在！'
				}).end();
			}else{
				UserModels.Users(req.body)
				.save()
				.then(() => {
					res.send({
						success: true,
						status: 200,
						msg: '注册成功！'
					}).end();
				})
				.catch(()=>{
					res.send({
						success: false,
						status: 500
					}).end();
				})
			}
		})
	}
},{
	type: 'POST',
	url: '/user/login',
	formData: true,
	callback: (req, res)=>{

		let { name, pwd } = req.body;
		//读取用户 的cookies；
	    // const { userid } = req.cookies;
	    // console.log(userid);
		UserModels.Users.findOne({ name }, 'pwd', (err, doc) => {
			if(err) {
				console.log(err);
			}else if(doc) {
				if(doc.pwd != pwd){
					res.send({
						success: false,
						status: 201,
						msg:'密码输入错误'
					})
				}else if(doc.pwd == pwd){
					req.session.sid = name;
					setTimeout(()=>{
						res.send({
							success: true,
							status: 200,
							msg:'登录成功'
						})
					}, 3000);
				}else{
					res.send({
						success: false,
						status: 201,
						msg:"未知错误"
					})
				}
			}else{
				res.send({
					success: false,
					status: 201,
					msg: '该账号不存在！'
				}).end();
			}
		})
	}
},{
	type: 'POST',
	url: '/user/logout',
	callback: (req, res)=>{
		req.session.sid = null; // 删除session
	    res.send({
			success: true,
			status: 200,
			msg:'登出成功'
		})
	}
},{
	url: '/user/info',
	callback: (req, res)=>{
		setTimeout(function() {
            res.send({
				success: true,
				status: 200,
				data: {
					name: 'infoName',
					userId: '1212121212',
					phone: 18826408772
				}
			})
		}, 1000);
	}
}];
module.exports = loginApi;