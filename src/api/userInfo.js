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

function submitUserInfo(params) {
  return request({
    url: '/userInfo',
    method: 'post',
    data: params
  })
}

// 下载
function requestDownload(params) {
  return request({
    url: '/download',
    method: 'get',
    params,
    responseType: 'blob' // 设置响应类型为 blob,添加这个才能正确下载文件流
  })
}

export {
  requestUserInfoUpload,
  requestUserInfo,
  submitUserInfo,
  requestDownload
} 