<template>
  <div class="tabbar">
    <div class="tabbar-item" v-for="item in tabbarObj" @click="tabClick(item)">
      <div class="tabbar-item--img">
        <img :src="active === item.url ? item.img_active : item.img" />
      </div>
      <div
        class="tabbar-item--text"
        :style="{ color: active === item.url ? '#fea5c8' : '#000000' }"
      >{{ item.name }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, reactive, ref, watch } from 'vue'
import { toRaw } from '@vue/reactivity'
import { useRoute } from 'vue-router'
const proxy = getCurrentInstance()
const route = useRoute()
const tabbarObj = reactive<any>([
  { name: '社区', url: '/home', img: require('../../assets/images/home.png'), img_active: require('../../assets/images/home_active.png') },
  { name: '圈子', url: '/circle', img: require('../../assets/images/circle.png'), img_active: require('../../assets/images/circle_active.png') },
  { name: '消息', url: '/message', img: require('../../assets/images/message.png'), img_active: require('../../assets/images/message_active.png') },
  { name: '我的', url: '/me', img: require('../../assets/images/me.png'), img_active: require('../../assets/images/me_active.png') },
])
watch(
  () => route.path,
  (newValue, oldValue) => {
    const isTab = tabbarObj.find((item: any) => item.url === newValue)
    if (isTab) {
      active.value = newValue
    }

  },
  {
    immediate: true,
    deep: true,
  }
)
let active = ref('/home')
const emit = defineEmits(['tabUrl'])
const tabClick = (tab: any) => {
  // proxy转换
  const tabValue = toRaw(tab)
  active.value = tabValue.url
  emit('tabUrl', tab.url)
}
</script>

<style lang="less" scoped >
.tabbar {
  height: 44px;
  display: flex;
  justify-content: space-around;
  background-color: @bg;
  .tabbar-item {
    height: 100%;
    &--img {
      text-align: center;
      img {
        width: 24px;
        height: 24px;
      }
    }
    &--text {
      font-size: 12px;
    }
  }
}
</style>
