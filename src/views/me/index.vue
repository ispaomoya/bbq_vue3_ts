<template>
  <div class="me">
    我的
    <van-button type="primary" @click="signInClick()">登录</van-button>
    <LogIn :isShowLogIn="isShowLogIn" @noShowLogIn="noShowLogIn"></LogIn>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import LogIn from '@/components/Login/index.vue'
const route = useRoute()
const router = useRouter()
let isShowLogIn = ref(false)
const signInClick = () => {
  isShowLogIn.value = true
}
const noShowLogIn = (value: any) => {
  isShowLogIn.value = value
}
</script>

<style lang="less" scoped>
</style>
