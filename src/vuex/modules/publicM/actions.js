



export default {
	loading_action({commit}, data) {
		commit('LOADING', data);
	},
	mutation_action({commit}) {
		commit('MUTATION_ACTION');
	}

}