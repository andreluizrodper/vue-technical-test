import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const token = require('../../config.json').nytApi.key;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    search: String,
    intern: {},
    section: 'home',
    isLoading: false,
  },
  mutations: {
    toggleSearch(state, term) {
      state.search = term;
    },
    toggleList(state, list) {
      state.list = list;
    },
    toggleSection(state, section) {
      state.section = section;
    },
    toggleLoading(state, status) {
      state.isLoading = status;
    },
  },
  actions: {
    getStories({ commit, state }) {
      commit('toggleLoading', true);
      axios.get(
        `https://api.nytimes.com/svc/topstories/v2/${state.section}.json`,
        {
          params: {
            'api-key': token,
          },
        },
      ).then((result) => {
        commit('toggleList', result.data.results);
      });
    },
  },
});
