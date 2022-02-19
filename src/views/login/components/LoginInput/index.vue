<template>
  <div class="login-input">
    <input type="text" />
    {{ bbb }}
    {{ change() }}
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
// import { defineEmits, defineProps } from 'vue'
// defineEmits和defineProps在<script setup>中自动可用，无需导入
const bbb = inject('aaa')
const c = 100
const emit = defineEmits(['one'])
const change = () => {
  emit('one', c)
}
</script>

<style lang="less" scoped>
</style>
