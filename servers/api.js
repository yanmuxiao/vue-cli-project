
// 数据库连接
const db = require('./db/db.js'); 

// Models
const UserModels = require('./models/users.js'); 

// express启动服务
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
//使用body-parser，对json数据处理，可在后面配置router接口的时候，对req和res进行数据处理
app.use(bodyParser.json());// parse application/json
app.use(bodyParser.urlencoded({extended: false}));// parse application/x-www-form-urlencoded



// 用户登录
app.post('/user/login', function(req, res){
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
				console.log(1);
				setTimeout(()=>{
					console.log(2);
					res.send({
						success: true,
						status: 200,
						msg:'登录成功'
					})
				}, 5000)
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
});
// 用户注册
app.post('/user/register',  function(req, res){

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
	
})

app.listen(9090, function() {
  console.log('Express started on http://localhost:9090');
});
