import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import( '../views/home/index.vue'),
    meta: { title: '首页', keepAlive: true },
  },
  {
    path: '/pc',
    name: 'pc',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/pc/index.vue'),
      meta: { title: 'pc', keepAlive: false },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login/index.vue'),
      meta: { title: '登录', keepAlive: false },
  },
  {
    path: '/circle',
    name: 'circle',
    component: () => import( '../views/circle/index.vue'),
      meta: { title: '圈子', keepAlive: false },
  },
  {
    path: '/me',
    name: 'me',
    component: () => import( '../views/me/index.vue'),
      meta: { title: '我的', keepAlive: false },
  },
  {
    path: '/message',
    name: 'message',
    component: () => import( '../views/message/index.vue'),
      meta: { title: '消息', keepAlive: false },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
