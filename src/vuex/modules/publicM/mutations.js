import {
	MUTATION_ACTION
} from './mutation-type'


const mutations = {
	[MUTATION_ACTION](state, data) {
		state.count++;
	}
}


export default mutations
