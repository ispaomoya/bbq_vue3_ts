import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/home/index.vue'),
    meta: { title: '首页', keepAlive: true },
  },
  {
    path: '/pc',
    name: 'pc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/pc/index.vue'),
      meta: { title: 'pc', keepAlive: false },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login/index.vue'),
      meta: { title: '登录', keepAlive: false },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
