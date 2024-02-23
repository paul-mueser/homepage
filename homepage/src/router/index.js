import {createRouter, createWebHistory} from 'vue-router'
import OverviewView from '../views/OverviewView.vue'
import ProjectView from '../views/ProjectView.vue'
import StatsBotView from '../views/projects/StatsBotView.vue'
import MusicBotView from '../views/projects/MusicBotView.vue'
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
        path: '/projects/statsbot',
        name: 'statsbot',
        component: StatsBotView
    },
    {
        path: '/projects/musicbot',
        name: 'musicbot',
        component: MusicBotView
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
