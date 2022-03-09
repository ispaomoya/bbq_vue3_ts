<template>
  <div id="app" class="app">
    <div class="body-content">
      <router-view />
    </div>
    <div class="bar">
      <Tabbar @tabUrl="tabUrl"></Tabbar>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getCurrentInstance, watch, reactive, ref, } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// 解proxy
import { toRaw } from '@vue/reactivity'
import Tabbar from '@/components/Tabbar/index.vue'
// 必须先声明调用
const route = useRoute()
const router = useRouter()
//绑定vue原型引用
const { proxy }: any = getCurrentInstance()
let isMobile = ref(proxy.$utils.isMobile())
watch(
  isMobile,
  (newValue) => {
    if (!newValue) {
      router.push('/pc')
    }
  },
  {
    immediate: true,
    deep: true
  })
const tabUrl = (url: string) => {
  if (proxy.$route.path !== url) router.push(url)

}
</script>
<style lang="less">
.app {
  box-sizing: border-box;
  height: 100vh;
  font-size: @size;
  background-color: @bg;
  .body-conten {
    padding: 12px 12px 0 12px;
    height: calc(100% - 44px);
  }
  .bar {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
}
</style>
