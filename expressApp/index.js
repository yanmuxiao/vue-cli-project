let fs = require('fs');
let path = require('path');

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


// 接收Form Data
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

if(!fs.existsSync('./upload')) {
	fs.mkdirSync('./upload');
}
app.use(multipart({uploadDir:'./upload'}));


// cookie
// const cookieParser=require("cookie-parser");
// app.use(cookieParser());


// session
let session = require('express-session');
app.use(session({
    secret: '12345',
    name: 'sid',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: { maxAge: 10*60*1000 },  //设置maxAge是10min，即10min后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}));

// app.use('/static', express.static('public'));

app.use(function(req, res, next) {
	console.log('sid：' + req.session.sid)
	console.log('拦截器：' + req.url)
	if(req.url === '/user/logout') {
		req.session.sid = null; // 删除session
	    res.send({
			success: true,
			status: 200,
			msg:'登出成功'
		})
	}else if(req.url == "/user/register") {
		req.session.sid = null; // 删除session
        next(); //如果请求的地址是登录则通过，进行登录
	}else if (!req.session.sid) {
        if (req.url == "/user/login") {
        	req.session.sid = null; // 删除session
            next(); //如果请求的地址是登录则通过，进行登录
        } else {
            res.send({
				success: true,
				status: 401,
				msg:'登录已过期！'
			})
        }
    } else if (req.session.sid) {
        next();//如果已经登录，则可以进入
    }
});


// 用户登录注册
const loginApi = require('./apis/loginApi.js'); 
// 列表
const fileApi = require('./apis/fileApi.js'); 

let apis = [];
apis = apis.concat(loginApi, fileApi);
for(let i = 0; i < apis.length; i++) {
	if (apis[i].formData) { // Form Data表单数据
		app.post(apis[i].url, multipartMiddleware, apis[i].callback);
	}else if(apis[i].type === 'POST') {
		app.post(apis[i].url, apis[i].callback);
	}else{
		app.get(apis[i].url, apis[i].callback);
	}
}



app.listen(9090, function() {
  	console.log('Express started on http://localhost:9090');
});
