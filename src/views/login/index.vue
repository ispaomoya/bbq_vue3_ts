<template>
  <div class="login">
    <div class="logo">登录</div>
    <div class="input-text">
      <LoginInput @one="oneSon"></LoginInput>
    </div>
    <div class="other">手机登录|找回密码|注册用户</div>
  </div>
</template>

<script lang="ts" setup>
import LoginInput from './components/LoginInput/index.vue'
import { ref } from 'vue'

import { provide } from 'vue'
const obj = ref({
  name: 'zhy'
})
provide('aaa', obj)
const oneSon = (e: any) => {
  console.log('子传父', e);

}
</script>

<style lang="less" scoped>
.login {
  font-size: @size;
}
</style>
