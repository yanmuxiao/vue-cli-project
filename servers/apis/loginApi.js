const cookieParser=require("cookie-parser");
app.use(cookieParser());

// Models
const UserModels = require('../models/users.js'); 

const loginApi = {
	login: {
		url: '/user/login',
		callback: (req, res)=>{
			var {name,pwd} = req.body;
			UserModels.Users.findOne({name}, 'pwd', (err, doc) => {
				if(err) {
					console.log(err);
				}else if(doc) {
					if(doc.pwd != pwd){
						res.send({
							success: false,
							status: 200,
							msg:'密码输入错误'
						})
					}else if(doc.pwd == pwd){
						setTimeout(()=>{
							res.cookie("userid", 'abcdefg123456', { expires: new Date(Date.now() + 100), httpOnly: true });
							res.send({
								success: true,
								status: 200,
								msg:'登录成功'
							})
						}, 3000)
					}else{
						res.send({
							success: false,
							status: 200,
							msg:"未知错误"
						})
					}
				}else{
					res.send({
						success: false,
						status: 222,
						msg: '该账号不存在！'
					}).end();
				}
			})
		}
	},
	register: {
		url: '/user/register',
		callback: (req, res)=>{
			UserModels.Users.findOne({name: req.body.name}, 'name', (err, doc) => {
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
	}
}

module.exports = loginApi;