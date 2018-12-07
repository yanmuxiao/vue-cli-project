
import actions from './actions'
import getters from './getters'
import mutations from './mutations'


const state = {
	loading: false,
	asideMenu: false,
	mobileType: false,
	mobileAside: false,
	count: 8800,

	axiosCancle: []
	
}


export default {
	state,
	actions,
	getters,
	mutations
}
