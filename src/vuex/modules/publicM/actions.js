



export default {
	loading_action({commit}, data) {
		console.log('arguments==>');
		console.log(arguments);
		console.log('commit==>');
		console.log(commit); // 对象的结构获取commit方法
		commit('LOADING', data);
	},
	mutation_action({commit}) {
		commit('MUTATION_ACTION');
	}

}