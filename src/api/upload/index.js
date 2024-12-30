import http from '@/utils/http'

export function utest() {
  return http.request({
    url: '/',
    method: 'GET'
  })
}

export function uploadFile(data, cb) {
  return http.request({
    url: '/uploadfile',
    method: 'POST',
    data,
    onUploadProgress: progress => {
      cb?.(progress)
    }
  })
}

export function mergeFile(data) {
  return http.request({
    url: '/mergefile',
    method: 'POST',
    data
  })
}

export function checkFile(data) {
  return http.request({
    url: '/checkfile',
    method: 'POST',
    data
  })
}
