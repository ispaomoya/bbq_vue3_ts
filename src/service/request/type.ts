import { AxiosRequestConfig, AxiosResponse } from 'axios'

// 接口类
export interface HYRequestInterceptors {
  // 响应
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  // 捕抓
  requestInterceptorCatch?: (error: any) => any
  // 成功
  responeInterceptor?: (res: AxiosResponse) => AxiosResponse
  // 成功异常
  responeInterceptorCatch?: (error: any) => any
}

// 接口继承
export interface HYRequestConfig extends AxiosRequestConfig {
  // 扩展
  interceptors?: HYRequestInterceptors
}
