import Vue from 'vue'
import Vuex from './myVuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a: 1
  },
  getters: {
    getNum(state) {
      return state.a + 1
    }
  },
  mutations: {
    change(state, num) {
      state.a = num
    }
  },
  actions: {
    asyncIncre({ commit }, arg) {
      setTimeout(() => {
        commit('change', arg)
      }, 1000)
    }
  }
})
