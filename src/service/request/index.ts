import axios from 'axios'
import type { AxiosInstance, AxiosResponse, AxiosPromise } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'

class HYRequest {
  instance: AxiosInstance //属性
  interceptors?: HYRequestInterceptors
  // 构造函数
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors //直接赋值拿到的是扩展的
    // 请求拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 成功拦截
    this.instance.interceptors.response.use(
      this.interceptors?.responeInterceptor,
      this.interceptors?.responeInterceptorCatch
    )
  }

  // 返回promise
  request(config: HYRequestConfig): AxiosPromise {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res: AxiosResponse) => {
          resolve(res)
        })
        .catch((e: any) => {
          reject(e)
        })
    })
  }
}
// 返回一个类
export default HYRequest
