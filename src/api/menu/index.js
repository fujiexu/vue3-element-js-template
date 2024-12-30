import http from '@/utils/http'
import api from '../api'

/**
 * 菜单列表
 * @param params
 * @returns
 */
export function getPageList(params) {
  return http.request({
    url: api.menu.getPageList,
    method: 'GET',
    params
  })
}

/**
 * 菜单新增
 * @param data
 * @returns
 */
export function addMenu(data) {
  return http.request({
    url: api.menu.add,
    method: 'POST',
    data
  })
}

/**
 * 菜单修改
 * @param data
 * @returns
 */
export function editMenu(data) {
  return http.request({
    url: api.menu.edit,
    method: 'PUT',
    data
  })
}

/**
 * 菜单保存
 * @param data
 * @returns
 */
export function saveMenu(data) {
  return data.id ? editMenu(data) : addMenu(data)
}

/**
 * 菜单删除
 * @param id
 * @returns
 */
export function delMenu(id) {
  return http.request({
    url: api.menu.del + id,
    method: 'DELETE'
  })
}

/**
 * 菜单详情
 * @param id
 * @returns
 */
export function detailMenu(id) {
  return http.request({
    url: api.menu.detail + id,
    method: 'GET'
  })
}

/**
 * 菜单状态修改
 * @param id
 * @param state
 * @returns
 */
export function modStateMenu(id, state) {
  return http.request({
    url: `${api.menu.modState}/${id}/${state}`,
    method: 'PUT'
  })
}

/**
 * 菜单排序
 * @param data
 * @returns
 */
export function sortMenu(data) {
  return http.request({
    url: api.menu.sort,
    method: 'PUT',
    data
  })
}

/**
 * 根据角色获取菜单列表
 * @param roleId
 * @returns
 */
export function getRoleMenuList(roleId) {
  return http.request({
    url: api.menu.getMenuList,
    method: 'GET',
    params: { roleId }
  })
}
