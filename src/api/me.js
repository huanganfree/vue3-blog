import request from '@/utils/request.js'

function requestLogout(params) {
  return request({
    url: '/user/logout',
    method: 'get',
    params
  })
}
  
export { 
  requestLogout
} 