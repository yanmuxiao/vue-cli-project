// getter这一部可以理解为vue组件中的计算属性computed，同时有筛选过滤的功能
export default {
	loading: state=>state.loading,
	asideMenu: state=>state.asideMenu,
	mobileType: state=>state.mobileType,
	mobileAside: state=>state.mobileAside,

	count: state=>state.count
	
}