import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from '@/utils/index'
import '@/style/style.less'
// 按需引入vant
import { Button,Dialog,Toast } from 'vant'
const app = createApp(App);
app.use(Button)
app.use(Dialog)
app.use(Toast)

// 挂载原型
app.config.globalProperties.$utils = utils;
app.config.globalProperties.$Dialog = Dialog;
app.config.globalProperties.$Toast = Toast;

//路由
router.beforeEach((to, from, next) => {
    if (!utils.isMobile() && to.meta.title !== 'pc') {
      next('/pc')
    } else {
      next()
    }
})
// app挂载
app
  .use(store)
  .use(router)
  .mount('#app')
