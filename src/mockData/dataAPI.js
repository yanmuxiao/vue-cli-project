import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginUsers, taskListObj } from './data/user';

import MD5 from 'MD5/md5.js' // MD5
import Lodash from 'lodash' 


export default {

	bootstrap() {

		let mock = new MockAdapter(axios);
		let userList = taskListObj.taskList;

		// mock success request
	    mock.onGet('/success').reply(200, {
	      msg: 'success'
	    });

	    // mock error request
	    mock.onGet('/error').reply(500, {
	      msg: 'failure'
	    });

	    //登录信息验证返回
	    mock.onPost('/login').reply(config => {
	      let {username, password} = JSON.parse(config.data);
	      return new Promise((resolve, reject) => {
	        let user = null;
	        setTimeout(() => {
	          let hasUser = LoginUsers.some(u => {
	            if (u.username === username && u.password === (MD5('vue') + password)) {
	              user = JSON.parse(JSON.stringify(u));
	              user.password = undefined;
	              return true;
	            }
	          });
	          if (hasUser) {
	            resolve([200, { code: 200, msg: '请求成功', user }]);
	          } else {
	            resolve([200, { code: 500, msg: '账号或密码错误' }]);
	          }
	        }, 1000);
	      });
	    });


	    // 用户列表返回
	    mock.onGet('/userList').reply(config => {
	      let { searchVal, currentPage  } = config.params;

	      let start = (currentPage - 1) * 20;
	      let end = currentPage * 20;


	      let filterData;
	      if(_.trim(searchVal) != ''){
	      		filterData = _.filter(userList, (o) => {
		      		return _.toLower(o.name).indexOf(searchVal) > -1 ? true : false;
		        })
	      } else {
	      		filterData = userList;
	      }
	      


	      return new Promise((resolve, reject) => {
	        setTimeout(() => {
	          let totalNum = filterData.length;
	          if ( totalNum >= 20) {
	            resolve([200, { code: 200, msg: '请求成功', total: totalNum, pageData: _.slice(filterData, start, end) }]);
	          } else {
	            resolve([200, { code: 200, msg: '请求成功1', total: totalNum, pageData: filterData }]);
	          }
	        }, 1000);
	      });
	    });


	    // 删除用户
	    mock.onGet('/rmUserList').reply(config => {
	      let { rmObj } = config.params;
	      userList = _.differenceBy(userList, rmObj, 'id');
	      return new Promise((resolve, reject) => {
	        setTimeout(() => {
	          resolve([200, { code: 200, msg: '请求成功' }]);
	        }, 1000);
	      });
	    });


	    // 修改用户信息
	    mock.onGet('/editUserList').reply(config => {
	      let { editForm } = config.params;
	      let oIndex = _.findIndex(userList, (obj)=>{
	      		return obj.id == editForm.id;
	      });
	      return new Promise((resolve, reject) => {
	        setTimeout(() => {

	          if(oIndex > -1) {
		      		_.assign(userList[oIndex], editForm);
		      }	
	          resolve([200, { code: 200, msg: '请求成功' }]);
	        }, 1000);
	      });
	    });

	    // 添加用户
	    mock.onGet('/addUserList').reply(config => {
	      let { addUserForm } = config.params;
	      console.log(addUserForm.id);
	      addUserForm.id = userList[0].id - 1;
	      //userList = _.differenceBy(userList, rmObj, 'id');
	      return new Promise((resolve, reject) => {
	        setTimeout(() => {
	          userList.unshift(addUserForm);
	          resolve([200, { code: 200, msg: '请求成功' }]);
	        }, 1000);
	      });
	    });

	}

}