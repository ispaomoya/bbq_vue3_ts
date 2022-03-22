import hyRequest from '@/service'
/**
 *
 * 注册
 *
 */
export const register = (data: Object) => {
  return hyRequest.request({
    url: '/api/login/register',
    method: 'POST',
    data,
  })
}
