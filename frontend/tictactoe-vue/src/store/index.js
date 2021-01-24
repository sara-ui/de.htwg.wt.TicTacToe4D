import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const initState = {
  players: {},
  game: {
    statusMessage: "",
    gridArray: []
  }
};

export default new Vuex.Store({
  state: initState,
  getters: {
    players: state => state.players,
    game: state => state.game
  },
  mutations: {
    SET_PLAYERS(state, players) {
      state.players = players;
    },
    SET_GAME(state, value) {
      state.game = value;
    }
  },
  actions: {
    setPlayers({ commit }, players) {
      commit("SET_PLAYERS", players);
    },
    login({ commit }, payload) {
      axios.post("/players", payload).then(({ data }) => {
        commit("SET_IS_LOGGED_IN", true);
        commit("SET_PLAYERS", payload);
        commit("SET_GAME", data);
      });
    },
    logout({ commit }) {
      commit("SET_IS_LOGGED_IN", false);
      commit("SET_PLAYERS", {});
      commit("SET_GAME", {
        statusMessage: "",
        gridArray: []
      });
    },
    setGame({ commit }, data) {
      commit("SET_GAME", data);
    }
  },
  modules: {}
});
