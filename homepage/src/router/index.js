import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'

const routes = [
  {
    path: '/',
    name: 'overview',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
