import { createStore } from 'vuex';

const store = createStore({
  state: {
    userId: localStorage.getItem('userId') || null
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
      localStorage.setItem('userId', userId)
    }
  },
  actions: {
  },
  getters: {
    getUserId: state => state.userId
  }
});

export default store;
