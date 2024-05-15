import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import store from '../store/store'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/DashboardView.vue')
  },
  {
    path: '/project',
    name: 'project',
    beforeLeave: (to, from, next) => {
      store.commit('clearProject');
      next();
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/ProjectView.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
