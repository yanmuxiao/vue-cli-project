
// dxhd
let base = process.env.NODE_ENV === 'production'?'..':'/dxhd';
export let userLoginApi = `${base}/user/login`; // 用户登录
export let userInfoApi = `${base}/user/userInfo`; // 用户信息详情
export let getMenusApi = `${base}/user/getMenus`; // 用户权限

export let isAcceptanceApi = `${base}/config/isAcceptance`; // 获取验收环节是否开启
export let activityListApi = `${base}/activity/getAll`; // 活动列表
export let activityDetailApi = `${base}/activity/getActivity`; // 活动详情

export let regionApi = `${base}/dept/getVisible`; // 活动归属区
export let companyTypeApi = `${base}/company/scoreQuery`; // 公司类型
