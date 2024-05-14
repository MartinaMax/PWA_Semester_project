import { createStore } from 'vuex';

const store = createStore({
  state: {
    userId: localStorage.getItem('userId') || null,
    authToken: localStorage.getItem('authToken') || null,
    projectId: null
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
      localStorage.setItem('userId', userId)
    },
    setToken(state, authToken) {
      state.authToken = authToken;
      localStorage.setItem('authToken', authToken)
    },
    setProjectId(state, projectId) {
      state.projectId = projectId;
    }
  },
  actions: {
  },
  getters: {
    getUserId: state => state.userId,
    getToken: state => state.authToken,
    getProjectId: state => state.projectId
  }
});

export default store;
