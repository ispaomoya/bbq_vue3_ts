<template>
  <div class="home">
    <HeadTop></HeadTop>
  </div>
</template>

<script lang="ts" setup>
import HeadTop from './components/HeadTop/index.vue'
import { test } from '@/api/home/index'
import { getCurrentInstance } from 'vue';
const { proxy }: any = getCurrentInstance()
proxy.$axios.get('/test/prices/mgets', {
  params: {
    skuIds: 'J_100011464875',
    type: 1,
  }
}).then((res: any) => {
  console.log('跨域数据', res.data)
})

const value = async () => {
  const data = await test({
    type: 'yuantong',
    postid: '11111111111'
  })
  console.log('data', data);

}
// value()
</script>

<style lang="less" scoped>
.home {
  height: 100%;
}
</style>
