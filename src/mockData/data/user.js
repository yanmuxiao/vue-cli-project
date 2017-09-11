import Mock from 'mockjs';


// 用户
const LoginUsers = [
  {
    id: '001',
  	username: 'admin',
  	password: '951c1f757a9f918f0624cd5cb90b890d33f4cd2a6e455672c47140dec13d1404',
  	avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
  	nickName: 'adminNickName',
  	token: Date.now()
  },{
    id: '002',
    username: 'yanmuxiao',
    password: '951c1f757a9f918f0624cd5cb90b890d33f4cd2a6e455672c47140dec13d1404',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    nickName: 'yanmuxiaoNN',
    token: Date.now()
  }
];


// sync-task
// table的所有数据
let taskListObj = Mock.mock({
  'taskList|200': [{
      'date': '@date',
      'name': '@name',
      'province': '@province',
      'city': '@city',
      'address': '@county(true)',
      'zip|+1': 10,
      'id|+1': 1000
  }]
});


export { LoginUsers, taskListObj };