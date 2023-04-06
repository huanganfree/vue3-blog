import request from '@/utils/request.js'

function requestLogin(params) {
  return request({
    url: '/user/login',
    method: 'post',
    data: params
  })
}

function requestRegister(params) {
  return request({
    url: '/user/register',
    method: 'post',
    data: params
  })
}

export { 
  requestLogin,
  requestRegister
} 