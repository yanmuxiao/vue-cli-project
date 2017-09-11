
import Mock from './../mockData/dataAPI.js'
Mock.bootstrap();

import axios from 'axios';


let base = '';


// 用户登录接口
export const requestLogin = params => {
	return axios.post(`${base}/login`, params).then(res => res.data); 
};


// 获取用户列表接口
export const getUserList = params => { 
	return axios.get(`${base}/userList`, { params: params }); 
};

// 删除单个用户
export const removeUserList = params => { 
	return axios.get(`${base}/rmUserList`, { params: params }); 
};

// 修改用户信息
export const editUserList = params => { 
	return axios.get(`${base}/editUserList`, { params: params }); 
};

// 添加用户
export const addUserList = params => { 
	return axios.get(`${base}/addUserList`, { params: params }); 
};




