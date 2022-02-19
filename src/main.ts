import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from '@/utils'
const app = createApp(App);

// 挂载原型
app.config.globalProperties.$utils = utils;
//

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
