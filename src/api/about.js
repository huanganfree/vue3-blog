import request from '@/utils/request.js'

function requestAbout(params) {
  return request({
    url: '/about',
    method: 'get',
    params
  })
}

function requestSearch(data) {
  return request({
    url: '/search',
    method: 'post',
    data
  })
}

export { requestAbout,requestSearch }