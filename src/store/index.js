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
    // синхронная хтонь
    ADD_SAVE: (state, payload) => {
      state.saves.push(payload);
    },
  },
  actions: {
    // асинхронная хтонь
    SET_SAVE: (context, payload) => {
      context.commit('ADD_SAVE', payload);
    }
  }
});