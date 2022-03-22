<template>
  <div class="register">
    <van-cell-group inset>
      <van-field
        v-model="userName"
        label="表白号"
        placeholder="请输入6-10位数字"
        maxlength="10"
        clearable
        type="number"
        autocomplete="off"
      />
      <van-field
        v-model="password"
        label="密码"
        placeholder="请输入10-16位密码"
        maxlength="16"
        clearable
        type="password"
        autocomplete="off"
      />
      <van-field
        v-model="confirmPassword"
        label="确认密码"
        placeholder="请重新输入密码"
        maxlength="16"
        clearable
        type="password"
        autocomplete="off"
      />
    </van-cell-group>
  </div>
</template>

<script lang="ts" setup>
// import { register } from '@/api/public/index'
import { ref, reactive } from 'vue';
let userName = ref('')
let password = ref('')
let confirmPassword = ref('')
const emit = defineEmits(['regEmit'])
emit('regEmit', { userName, password, confirmPassword })
// if (username.value !== '' && password.value !== '' && confirm_password.value !== '') {
//   const reg = await register({
//     username,
//     password,
//     confirm_password
//   })
// }
</script>

<style lang="less" scoped>
</style>
