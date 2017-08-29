import {
	MODULES_ACTION
} from './mutation-type'


const mutations = {
	[MODULES_ACTION](state, data) {
		state.m++;
	}
}


export default mutations
