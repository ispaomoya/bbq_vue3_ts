<template>
  <div class="head-top">
    <div class="me" @click="toMeClick()">
      <img src="@/assets/images/boy.png" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const toMeClick = () => {
  router.push('/me')
}
</script>

<style lang="less" scoped>
.head-top {
  .me {
    img {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
