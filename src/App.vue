<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// 必须先声明调用
const route = useRoute()
const router = useRouter()
//绑定vue原型引用
const { proxy }: any = getCurrentInstance()
if (!proxy.$utils.utils.isMobile()) {
  router.push('/pc')
} else {
  router.push('/')
}

</script>
<style lang="less">
</style>
