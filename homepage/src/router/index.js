import { createRouter, createWebHashHistory } from 'vue-router'
import OverviewView from '../views/OverviewView.vue'
import ProjectView from '../views/ProjectView.vue'
import LegalView from '../views/LegalView.vue'
import PrivacyView from '../views/PrivacyView.vue'

const routes = [
  {
    path: '/',
    name: 'overview',
    component: OverviewView
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
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
