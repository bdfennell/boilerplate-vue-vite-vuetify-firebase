import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
    { path: '/', component: HomeView, name: 'HomeView', meta: { requiresAuth: true } },
    { path: '/login', component: LoginView, name: 'LoginView', meta: { requiresAuth: false } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router