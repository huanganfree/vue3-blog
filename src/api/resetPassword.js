import request from '@/utils/request.js'

function requestResetPassword(params) {
  return request({
    url: '/resetPassword',
    method: 'post',
    data: params
  })
}

export {
  requestResetPassword 
}