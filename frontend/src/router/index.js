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
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/DashboardView.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/project',
    name: 'project',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/ProjectView.vue'),
    meta: {requiresAuth: true}

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the route requires authentication
    if (!store.getters.getUserId) {
      // If user is not authenticated, redirect to login page
      next('/');
    } else {
      // Otherwise, proceed to the route
      next();
    }
  } else {
    // If the route does not require authentication, proceed
    next();
  }
});

export default router
