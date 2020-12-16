import { createRouter, createWebHashHistory } from 'vue-router';
import { getViewRoutes } from '@/views';
import { authMiddleware } from '@/store/auth';

const routes = getViewRoutes([
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/search/:query/:page?',
    name: 'Search',
    props: true,
    async beforeEnter(to, from, next) {
      await authMiddleware(next, { name: 'Home' });
      next();
    },
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
])

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
