import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	plugins: [
		createPersistedState()
	],
	state: {
		token: null,
		user: null,
		isUserLoggIn: false
	},
	mutations: {
		setToken (state,token) {
			state.token = token
			if(token) {
				state.isUserLoggIn = true
			}else {
				state.isUserLoggIn = false
			}
		},
		setUser (state,user) {
			state.user = user
		}
	},
	actions: {
		setToken({commit}, token) {
			commit('setToken', token)
		},
		setUser({commit}, user) {
			commit('setUser', user)
		},
	}
})