import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue'),
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return new Promise((resolve) => {
        nextTick(() => {
          resolve({
            el: to.hash,
            behavior: "smooth"
          })
        })
      })
    }
    return { top: 0}
  }
})

export default router
