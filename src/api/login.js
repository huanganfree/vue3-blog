import request from '@/utils/request.js'

function requestLogin(params) {
  return request({
    url: '/login',
    method: 'post',
    data: params
  })
}

export { requestLogin } 