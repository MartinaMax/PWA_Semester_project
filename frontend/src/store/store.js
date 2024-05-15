import { createStore } from 'vuex';

const store = createStore({
  state: {
    userId: localStorage.getItem('userId') || null,
    authToken: localStorage.getItem('authToken') || null,
    projectId: localStorage.getItem('projectId') || null,
    projectTitle: localStorage.getItem('projectTitle') || null,
    collaborators: localStorage.getItem('collaborators') || null,
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
      localStorage.setItem('projectId', projectId)
    },
    setProjectTitle(state, projectTitle) {
      state.projectTitle = projectTitle;
      localStorage.setItem('projectTitle', projectTitle)
    },
    setCollaborators(state, collaborators) {
      state.collaborators = collaborators;
      localStorage.setItem('collaborators', collaborators)
    },
    clearProject(state) {
      state.projectId = null;
      state.projectTitle = null;
    },
  },
  actions: {
  },
  getters: {
    getUserId: state => state.userId,
    getToken: state => state.authToken,
    getProjectId: state => state.projectId,
    getProjectTitle: state => state.projectTitle,
    getCollaborators: state => state.collaborators
  }
});

export default store;
