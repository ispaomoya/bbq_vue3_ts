import hyRequest from '@/service'

export const test = (params: Object) => {
  return hyRequest.request({
    url: '/home/data?type=pop&page=1',
    method: 'GET',
    params,
  })
}
