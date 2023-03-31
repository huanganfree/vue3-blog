import request from '@/utils/request.js'

function requestAbout(params) {
  return request({
    url: '/about',
    method: 'get',
    params
  })
}

export { requestAbout }