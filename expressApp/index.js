// 数据库连接
const db = require('./db/db.js'); 


// express启动服务
const express = require('express');
const app = express();


const bodyParser = require('body-parser');
//使用body-parser，对json数据处理，可在后面配置router接口的时候，对req和res进行数据处理
app.use(bodyParser.json());	// parse application/json
app.use(bodyParser.urlencoded({extended: false}));// parse application/x-www-form-urlencoded


// 用户登录注册
const loginApi = require('./apis/loginApi.js'); 
app.post(loginApi.login.url, loginApi.login.callback);
app.post(loginApi.register.url, loginApi.register.callback);


app.listen(9090, function() {
  	console.log('Express started on http://localhost:9090');
});
