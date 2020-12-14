import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
Vue.use(Vuex);

const initState = {
  players: {},
  isLoggedIn: false,
  game: {
    statusMessage: '',
    gridArray: []
  }
}

export default new Vuex.Store({
  state: initState,
  getters: {
    players: state => state.players,
    isLoggedIn: state => state.isLoggedIn,
    game: state => state.game,
  },
  mutations: {
    SET_PLAYERS (state, players) {
      state.players = players
    },
    SET_IS_LOGGED_IN (state, value) {
      state.isLoggedIn = value
    },
    SET_GAME (state, value) {
      state.game = value
    }
  },
  actions: {
    setPlayers ({commit}, players) {
      commit('SET_PLAYERS', players)
    },
    setIsLoggedIn ({commit}, value) {
      commit('SET_IS_LOGGED_IN', value)
    },
    login ({commit}, payload) {
      axios.post('/players', payload).then(({ data }) => {
        commit('SET_IS_LOGGED_IN', true)
        commit('SET_PLAYERS', payload)
        commit('SET_GAME', data)
      })
    }
  },
  modules: {}
});
