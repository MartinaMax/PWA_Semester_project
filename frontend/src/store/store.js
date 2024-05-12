import { createStore } from 'vuex';

const store = createStore({
  state: {
    userId: null
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
    }
  },
  actions: {
  },
  getters: {
    getUserId: state => state.userId
  }
});

export default store;
