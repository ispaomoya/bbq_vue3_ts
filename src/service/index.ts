// service统一出口
import HYRequest from './request'
import md5 from 'blueimp-md5'
import sha1 from 'sha1'
const hyRequest = new HYRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  interceptors: {
    requestInterceptor: (config:any) => {
      const time = new Date().getTime()
      config.headers.timestamp = time
      config.headers.signature = md5(sha1(`mall_${time}`))
      // 携带token拦截
      const token = ''
      if (token) {
        // config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求成功拦截-----', config)
      return config
    },
    requestInterceptorCatch: error => {
      console.log('请求失败拦截-----', error)
      return error
    },
    responeInterceptor: res => {
      console.log('获取数据成功', res)
      return res
    },
    responeInterceptorCatch: error => {
      console.log('获取数据失败', error)
      return error
    },
  },
})

export default hyRequest
