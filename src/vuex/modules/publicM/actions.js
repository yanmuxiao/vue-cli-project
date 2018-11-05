



export default {
	loading_action({commit}, data) {
		console.log('arguments==>');
		console.log(arguments);
		console.log('commit==>');
		console.log(commit);
		commit('LOADING', data);
	},
	mutation_action({commit}) {
		commit('MUTATION_ACTION');
	},

	counter_action({commit, data}) {
		commit('COUNTER');
	}

}