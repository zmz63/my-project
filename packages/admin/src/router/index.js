import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@admin/layout/index.vue';
import menu from './menu';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LAYOUT',
      component: Layout,
      redirect: '/order',
      children: menu,
    },
    {
      path: '/login',
      name: 'LOGIN',
      component: () => import('@admin/pages/login/index.vue'),
    },
  ],
});

export default router;
