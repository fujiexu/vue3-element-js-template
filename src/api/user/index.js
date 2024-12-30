import http from '@/utils/http'
import api from '../api'

/**
 * 用户登录
 * @param data
 * @returns
 */
export function getUserInfo(data) {
  return http.request({
    url: api.user.login,
    method: 'POST',
    data
  })
}

/**
 * 修改密码
 * @param data
 * @returns
 */
export function updatePwd(data) {
  return http.request({
    url: api.user.updatePwd,
    method: 'POST',
    data
  })
}
