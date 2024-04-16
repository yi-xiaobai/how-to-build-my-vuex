

export default {
    state: {
        a: 1
    },
    mutations: {
        increment(state, n) {
            state.a += n
        }
    },
    actions: {
        increment({ commit }) {
            commit('increment')
        }
    },
}