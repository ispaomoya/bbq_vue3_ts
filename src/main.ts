import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from '@/utils/index'
import axios from 'axios'
import md5 from 'blueimp-md5'
import sha1 from 'sha1'
import '@/style/style.less'
// 按需引入vant
import { Button, Dialog, Toast, Tab, Tabs, Field, CellGroup } from 'vant'
const app = createApp(App);
app.use(Button)
app.use(Dialog)
app.use(Toast)
app.use(Tab)
app.use(Tabs)
app.use(Field)
app.use(CellGroup)

// 挂载原型
app.config.globalProperties.$utils = utils;
app.config.globalProperties.$Dialog = Dialog;
app.config.globalProperties.$Toast = Toast;
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$md5 = md5;
app.config.globalProperties.$sha1 = sha1;

// //路由
// router.beforeEach((to, from, next) => {
//     if (!utils.isMobile() && to.meta.title !== 'pc') {
//       next('/pc')
//     } else {
//       next()
//     }
// })
// app挂载
app
  .use(store)
  .use(router)
  .mount('#app')
