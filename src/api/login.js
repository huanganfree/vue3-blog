import request from '@/utils/request.js'


export default function requestLogin(params) {
  return request({
    url: '/login',
    method: 'post',
    params
  })
}