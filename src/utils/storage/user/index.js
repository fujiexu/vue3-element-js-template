import { StorageEnum } from '../enum.js'
import { localData, storageGet, storageSet } from '..'

export function setToken(token) {
  storageSet(StorageEnum.ACCESS_TOKEN, token)
}

export function getToken() {
  return localData.getData(StorageEnum.ACCESS_TOKEN)
}

export function getUser() {
  return storageGet(StorageEnum.USER)
}

export function setUser(info) {
  storageSet(StorageEnum.USER, info)
}
