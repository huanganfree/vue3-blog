import request from '@/utils/request.js'

function requestUserInfoUpload(params) {
  return request({
    url: '/upload',
    method: 'post',
    data: params
  })
}

export { requestUserInfoUpload } 