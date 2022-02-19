import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from '@/utils'
const app = createApp(App);

// 挂载原型
app.config.globalProperties.$utils = utils;
//

app
  .use(store)
  .use(router)
  .mount('#app')
