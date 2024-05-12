import { createStore } from 'vuex';

const store = createStore({
  state: {
    userId: localStorage.getItem('userId') || null,
    authToken: localStorage.getItem('authToken') || null
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
      localStorage.setItem('userId', userId)
    },
    setToken(state, authToken) {
      state.authToken = authToken;
      localStorage.setItem('authToken', authToken)
    }
  },
  actions: {
  },
  getters: {
    getUserId: state => state.userId,
    getToken: state => state.authToken
  }
});

export default store;
