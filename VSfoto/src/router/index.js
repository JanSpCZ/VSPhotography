import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../pages/PortfolioPage.vue'),
    },
    {
      path: '/cenik',
      name: 'cenik',
      component: () => import('../pages/CenikPage.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../pages/FaQPage.vue'),
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import('../pages/KontaktPage.vue'),
    },
  ],
})

export default router
