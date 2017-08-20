import {
	MUTATION_ACTION,
	DATE_TIME
} from './mutation-type'


const mutations = {
	[MUTATION_ACTION](state, data) {
		state.count++;
	},
	[DATE_TIME](state, data) {
		state.dateTime = data
	}
}


export default mutations
