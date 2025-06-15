import {createRouter, createWebHashHistory} from 'vue-router'
import OverviewView from '../views/OverviewView.vue'
import ProjectView from '../views/ProjectView.vue'
import LegalView from '../views/LegalView.vue'
import PrivacyView from '../views/PrivacyView.vue'

const routes = [
    {
        path: '/',
        name: 'overview',
        component: OverviewView,
        meta: {title: 'Home'}
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectView,
        meta: {title: 'Projects'}
    },
    {
        path: '/legal',
        name: 'legal',
        component: LegalView,
        meta: {title: 'Legal'}
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: PrivacyView,
        meta: {title: 'Privacy'}
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

router.afterEach((to, from) => {
    document.title = to.meta.title + ' | Paul Müser' || 'Paul Müser';
});

export default router
