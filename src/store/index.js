import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    exit ({ commit }) {
      commit('setUser', null)
    },
    login ({ commit }, user) {
      commit('setUser', user)
    }
  }
})

export default store
