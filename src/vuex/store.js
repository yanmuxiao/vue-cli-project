import Vue from 'vue'
import Vuex from 'vuex'


import publicM from './modules/publicM'
import modulesA from './modules/modulesA'


Vue.use(Vuex)
// 创建 store 实例
export default new Vuex.Store({
    modules: {
        publicM,
        modulesA
    },
    strict: true
})