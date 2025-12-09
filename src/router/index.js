import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/katalog', name: 'catalog', component: () => import('../views/CatalogView.vue') },
    { path: '/produkt/:id', name: 'product', component: () => import('../views/ProductView.vue'), props: true },
    { path: '/kosik', name: 'cart', component: () => import('../views/CartView.vue') },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  ],
})

export default router
