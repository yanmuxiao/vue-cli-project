import {
	ASIDE_MENU,
	MOBILE_TYPE,
	ASIDE_SH,
	MUTATION_ACTION
} from './mutation-type'


const mutations = {
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
	}
}


export default mutations
