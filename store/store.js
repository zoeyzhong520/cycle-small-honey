// 引用Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 实例store对象
const store = new Vuex.Store({
	state: {
		cycleValue: ''
	},
	// mutations修改store数据入口
	mutations: {
		// 更新周期记录
		updateCycleValue(state, provider) {
			state.cycleValue = provider
			console.log('更新周期记录为：'+state.cycleValue)
		},
	}
})

export default store