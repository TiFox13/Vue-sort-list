import { createStore } from 'vuex';

export const store = createStore({
  state: {
    saves: [],
  },
  getters: {
    SAVES: state => {
      return state.saves;
    },
  },
  mutations: {
    ADD_SAVE: (state, payload) => {
      state.saves.push(payload);
    },
  },
  actions: {
    SET_SAVE: (context, payload) => {
      context.commit('ADD_SAVE', payload);
    }
  }
});