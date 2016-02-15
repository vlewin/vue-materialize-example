import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    isAuthenticated: false
  },

  mutations: {
    LOGIN(state) {
      state.isAuthenticated = true
    },

    LOGOUT(state) {
      state.isAuthenticated = false
    }
  },

  strict: true // Vuex's patent pending anti-intern device
})

export default store
