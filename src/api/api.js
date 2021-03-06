
import Mock from './../mockData/dataAPI.js'
// Mock.bootstrap(); // 注意：Mock与真实接口存在冲突
import axios from 'axios';


let base = '';


// 用户登录接口
// export const requestLogin = params => {
// 	return axios.post(`${base}/login`, params).then(res => res.data); 
// };


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




// 2018 mongodb api
let mongodbApi = process.env.NODE_ENV === 'production'?'..':'/api';
export let userLoginApi = `${mongodbApi}/user/login`; // 用户登录
export let userLogoutApi = `${mongodbApi}/user/logout`; // 用户登出
export let userRegisterApi = `${mongodbApi}/user/register`; // 用户注册

export let userInfoApi = `${mongodbApi}/user/info`; // 用户资料
export let formUploadApi = `${mongodbApi}/form/upload`; // 资料上传
export let filesApi = `${mongodbApi}/files`; // 资料上传
