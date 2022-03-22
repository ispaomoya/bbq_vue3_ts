toString<template>
  <div class="login">
    <van-dialog
      :show="isShowLogIn"
      title="欢迎登录表白墙"
      show-cancel-button
      :confirm-button-text="loginTitle"
      confirm-button-color="blue"
      cancel-button-text="随便看看"
      cancel-button-color="#666666"
      @cancel="cancelClick"
      @confirm="confirmClick"
    >
      <div class="login-tabs">
        <van-tabs
          :active="loginTitle"
          @click-tab="onClickTab"
          color="#fea5c8"
          swipeable
          title-active-color="#fea5c8"
          title-inactive-color="#000000"
        >
          <van-tab title="登录" name="登录">
            <SignIn></SignIn>
          </van-tab>

          <van-tab title="注册" name="注册">
            <Register @reg-emit="regEmit"></Register>
          </van-tab>
        </van-tabs>
      </div>
    </van-dialog>
  </div>
</template>

<script lang="ts" setup>
import SignIn from './SignIn/index.vue'
import Register from './Register/index.vue'
import { ref, reactive, getCurrentInstance } from 'vue'
import { register } from '@/api/public'
const props = defineProps({
  isShowLogIn: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['noShowLogIn'])
const loginTitle = ref('登录')
const { proxy }: any = getCurrentInstance()
// 控制弹窗
const cancelClick = () => {
  emit('noShowLogIn', false)
}
// 切换tab
const onClickTab = ({ name }: any) => {
  loginTitle.value = name
}

// 注册返回的参数
const regData = reactive({
  userName: '',
  password: '',
  confirmPassword: ''
})
const regEmit = (data: any) => {
  for (const key in regData) {
    regData[key] = data[key]
  }
}
// 点击注册/登录
const confirmClick = () => {
  if (loginTitle.value === '注册') {
    if (regData.userName === '') return proxy.$Toast.fail('请输入表白号')
    if (regData.password === '') return proxy.$Toast.fail('请输入密码')
    if (regData.confirmPassword === '') return proxy.$Toast.fail('请输入确认密码')
    if (regData.confirmPassword !== regData.password) return proxy.$Toast.fail('两次密码不一致')
    if (regData.userName.length < 6 || regData.password.length < 10 || regData.confirmPassword.length < 10) {
      return proxy.$Toast.fail('请输入6-10位数')
    }
    // const data = async () => {
    //   const time = new Date().getTime()
    //   const res = await register({
    //     username: regData.userName,
    //     password: regData.password,
    //     confirm_password: regData.confirmPassword,
    //     timestamp: time,
    //     signature: proxy.$md5(proxy.$sha1(`mall_${time}`))
    //   })
    //   console.log('res', res)
    //   return res
    // }
    // data()
    // let time1: number = new Date()
    const time = Number(String(Date.parse(new Date().toString())).split('').splice(
      0, String(Date.parse(new Date().toString())).split('').length - 3
    ).join(''))

    proxy.$axios.put(
      '/bbq/api/login/register',
      {
        username: regData.userName,
        password: proxy.$md5(regData.password),
        confirm_password: proxy.$md5(regData.confirmPassword)
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Method': '*',
          'Access-Control-Allow-Headers': '*',
          "Access-Control-Allow-Credentials": "true",
          'Content-Type': 'text/html; charset=utf-8',
          'timestamp': time,
          'signature': proxy.$md5(proxy.$sha1(`mall_${time}`))
        }
      }
    ).then((res: any) => {
      console.log('注册', res.data)
    })

  } else {

  }
}
</script>

<style lang="less" scoped>
.login {
  .login-tabs {
    height: 300px;
    padding: 0 12px;
  }
}
</style>
