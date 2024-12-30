export const localData = {
  setData(key, value) {
    window.localStorage.setItem(key, value)
  },
  getData(key) {
    return window.localStorage.getItem(key)
  },
  removeData(key) {
    window.localStorage.removeItem(key)
  },
  clearAllData() {
    window.localStorage.clear()
  }
}

export const storageSet = (key, info) => {
  if (info) {
    if (typeof info === 'string') {
      localData.setData(key, info)
    } else {
      localData.setData(key, JSON.stringify(info))
    }
  } else {
    localData.removeData(key)
  }
}

export const storageGet = key => {
  const data = localData.getData(key)

  if (data) {
    return JSON.parse(data)
  }
  return null
}
