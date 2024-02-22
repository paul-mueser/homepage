import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import LegalView from '../views/LegalView.vue'
import PrivacyView from '../views/PrivacyView.vue'

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
  },
  {
    path: '/legal',
    name: 'legal',
    component: LegalView
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
