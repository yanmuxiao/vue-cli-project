import {
	LOADING,
	ASIDE_MENU,
	MOBILE_TYPE,
	ASIDE_SH,
	MUTATION_ACTION,

	COUNTER

} from './mutation-type'


const mutations = {
	[LOADING](state, data) {
		state.loading = data;
	},
	[ASIDE_MENU](state, data) {
		state.asideMenu = data;
	},
	[MOBILE_TYPE](state, data) {
		state.mobileType = data;
	},
	[ASIDE_SH](state, data) {
		state.mobileAside = data;
	},

	[MUTATION_ACTION](state, data) {
		state.mobileAside = data;
	},

	[COUNTER](state, data) {
		state.counter = data;
	}
}


export default mutations
