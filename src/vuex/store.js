import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'


Vue.use(Vuex)

const state = {
	count: 100,
	dateTime: '2017-08-03 20:40:20'
}

// 创建 store 实例
export default new Vuex.Store({
    // modules: {
    //     publicM: publicM,
    //     modulesA: modulesA
    // }
    state,
	actions,
	getters,
	mutations
})