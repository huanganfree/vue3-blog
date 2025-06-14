import request from '@/utils/request.js'

function requestAbout(params) {
  return request({
    url: '/about',
    method: 'get',
    params
  })
}

function requestKeyWordsSearch(data) {
  return request({
    url: '/about/search',
    method: 'post',
    data
  })
}

export { requestAbout,requestKeyWordsSearch }