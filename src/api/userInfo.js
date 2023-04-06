import request from '@/utils/request.js'

function requestUserInfoUpload(params) {
  return request({
    url: '/upload',
    method: 'post',
    data: params
  })
}

function requestUserInfo(params) {
  return request({
    url: '/userInfo',
    method: 'get',
    params
  })
}

export { requestUserInfoUpload, requestUserInfo } 