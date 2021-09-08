import { createRouter, createWebHistory } from '@ionic/vue-router';
import Ejemplo from '../pages/Ejemplo'

const routes = [
  {
    path: '/',
    redirect: '/pages'
  },
  {
    path: '/pages',
    component: Ejemplo
  },
  {
    path: '/pages/:id',
    component: () => import('../pages/MemoryDetailsPage.vue')
  },
  {
    path: '/pages/AddImagePage',
  component: () => import('../pages/AddImagePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
