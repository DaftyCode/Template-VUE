import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/main-layout/MainLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      children: [
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
      ],
    },
    /* {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    }, */
  ],
});

export default router;
