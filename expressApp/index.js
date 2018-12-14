// 数据库连接
const db = require('./db/db.js'); 

// Models
const UserModels = require('./models/users.js'); 

// express启动服务
const express = require('express');
const app = express();


const bodyParser = require('body-parser');
//使用body-parser，对json数据处理，可在后面配置router接口的时候，对req和res进行数据处理
app.use(bodyParser.json());	// parse application/json
app.use(bodyParser.urlencoded({extended: false}));// parse application/x-www-form-urlencoded

// cookie
// const cookieParser=require("cookie-parser");
// app.use(cookieParser());

// session
let session = require('express-session');
app.use(session({
    secret: '12345',
    name: 'sid',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: { maxAge: 800000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}));


// app.use(function(req, res, next) {
// 	console.log('sid：' + req.session.sid)
// 	console.log('拦截器：' + req.url)
//     if (!req.session.sid) {
//         if (req.url == "/user/login") {
//             next(); //如果请求的地址是登录则通过，进行下一个请求
//         } else {
//             res.redirect('/login');//跳转到登录页面
//         }
//     } else if (req.session.user) {
//         next();//如果已经登录，则可以进入
//     }
// });


// 用户登录
app.post('/user/login', function(req, res){
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
					status: 200,
					msg:'密码输入错误'
				})
			}else if(doc.pwd == pwd){
				req.session.sid = name;
				res.send({
					success: true,
					status: 200,
					msg:'登录成功'
				})
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
// 用户登出
app.post('/user/logout', function(req, res){console.log('121212');
	req.session.sid = null; // 删除session
    res.redirect('login');
});
// 用户注册
app.post('/user/register',  function(req, res){
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
	
})


app.listen(9090, function() {
  	console.log('Express started on http://localhost:9090');
});