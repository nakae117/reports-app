import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServerRequest from '../views/ServerRequest.vue'
import ReviewResquest from '../views/ReviewResquest.vue'
import ReportCompose from '../views/ReportCompose.vue'
import ConfigReport from '../views/ConfigReport.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/server-request',
      name: 'ServerRequest',
      component: ServerRequest,
    },
    {
      path: '/review-request',
      name: 'ReviewResquest',
      component: ReviewResquest,
    },
    {
      path: '/report-compose',
      name: 'ReportCompose',
      component: ReportCompose,
    },
    {
      path: '/config',
      name: 'ConfigReport',
      component: ConfigReport,
    },
  ],
})

export default router
