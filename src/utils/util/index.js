import dayjs from 'dayjs'
import arraySupport from 'dayjs/plugin/arraySupport'
import toArray from 'dayjs/plugin/toArray'

/**
 * 匹配对象
 * @param options
 * @returns
 */
export function check(options) {
  options.value = options.value?.trim()
  if (options.value) {
    const reg = typeof options.checkReg === 'string' ? new RegExp(options.checkReg) : options.checkReg //定义匹配

    return reg ? reg.test(options.value) : true
  }
  return options.ignore
}

/**
 * 防抖
 * @param fn
 * @param delay
 * @returns
 */
export function debounce(fn, delay = 400) {
  let timer = null

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

/**
 * 节流
 * @param fn
 * @param delay
 * @returns
 */
export function throttle(fn, delay = 400) {
  let flag = true
  return function (...args) {
    if (!flag) {
      return
    }
    flag = false
    setTimeout(() => {
      fn.apply(this, args)
      flag = true
    }, delay)
  }
}

/**
 * 字符匹配
 * @param search 搜索内容
 * @param content 整体内容
 * @returns 返回匹配正确true | false
 */
export function stringSearch(search = '', content = '') {
  search = search.trim()
  if (search) {
    search = '[' + search.toLowerCase().split('').join('].*[') + ']'
    const reg = new RegExp(search)

    return reg.test(content.toLowerCase())
  }
  return true
}

/**
 * 格式化时间
 * @param t
 */
export function formatTime(t, format = 'YYYY-MM-DD HH:mm:ss') {
  return t ? dayjs(t).format(format) : ''
}

/**
 * 格式化小周期
 * @param t
 */
export function formatTimeSmall(t) {
  return t ? dayjs(t).format('YYYY/MM/DD') : ''
}

/**
 * 格式化小周期
 * @param t
 */
export function formatMM(t) {
  return t ? dayjs(t).format('YYYY年MM月') : ''
}
/**
 * 时间比对
 * @param start,end
 */
export function formatTimeList(start, end) {
  return dayjs(start).format('YYYY-MM-DD') === dayjs(end).format('YYYY-MM-DD')
}
/**
 * 时间转换
 * @param
 */
export function formatTimeData(time) {
  if (new Date(time).getFullYear() === new Date().getFullYear()) {
    if (new Date(time).getMonth() === new Date().getMonth()) {
      if (new Date(time).getDate() === new Date().getDate()) {
        return dayjs(time).format('HH:mm')
      } else if (new Date(time).getDate() === new Date().getDate() - 1) {
        return `昨天 ${dayjs(time).format('HH:mm')}`
      }
      return dayjs(time).format('MM-DD HH:mm')
    }
    return dayjs(time).format('MM-DD HH:mm')
  }
  if (new Date(time).getFullYear() !== new Date().getFullYear()) {
    return dayjs(time).format('YYYY-MM-DD HH:mm')
  }
}
/**
 * 具体时间
 * @param time
 */
export function formatTimeDetail(time) {
  return dayjs(time).format('HH:mm')
}

/**
 * 时间转换
 * @param
 */
export function formatTimeItem(time) {
  if (new Date(time).getFullYear() === new Date().getFullYear()) {
    if (new Date(time).getMonth() === new Date().getMonth()) {
      if (new Date(time).getDate() === new Date().getDate()) {
        return '今天'
      } else if (new Date(time).getDate() === new Date().getDate() - 1) {
        return `昨天`
      }
      return dayjs(time).format('MM-DD')
    }
    return dayjs(time).format('MM-DD')
  }
  if (new Date(time).getFullYear() !== new Date().getFullYear()) {
    return dayjs(time).format('YYYY-MM-DD')
  }
}

/**
 * 表格时间格式化
 * @param row
 * @param column
 * @param cellValue
 * @param _index
 * @returns
 */
export function formatTableTime(row, column, cellValue, _index) {
  return formatTime(cellValue)
}

/**
 * 表格 string[] 格式化
 * @param row
 * @param column
 * @param cellValue
 * @param index
 * @returns
 */
export function formatTableArrString(row, column, cellValue, _index) {
  const res = cellValue?.join(',')
  return res || '--'
}

/**
 * 表格 string 格式化
 * @param row
 * @param column
 * @param cellValue
 * @param index
 * @returns
 */
export function formatTableShowAcross(row, column, cellValue, _index) {
  return cellValue || '--'
}
/**
 * 表单对象赋值
 * @param formState 目标对象 (将源对象中key深拷贝赋值给目标对象key)
 * @param defaultForm 源对象
 * @returns
 */
export function assignFormState(formState, defaultForm) {
  for (const key in formState) {
    if (typeof defaultForm[key] === 'object') {
      assignFormState(defaultForm[key], defaultForm[key])
    }
    if (defaultForm[key] !== undefined || defaultForm[key] !== null) {
      formState[key] = defaultForm[key]
    }
  }
  return formState
}

/**
 * 判断数据类型是否为对象
 * @param target
 * @returns
 */
export const isObject = target => (typeof target === 'object' || typeof target === 'function') && target !== null

/**
 * 深拷贝
 * @param target
 * @param map
 * @returns
 */
export function deepClone(target, map = new WeakMap()) {
  if (map.get(target)) {
    return target
  }
  // 为undefined或null, 原样返回
  if (target === null || typeof target === 'undefined') {
    return target
  }

  // 获取当前值的构造函数：获取它的类型
  const constructor = target.constructor
  // 检测当前对象target是否与正则、日期格式对象匹配
  if (/^(RegExp|Date)$/i.test(constructor.name)) {
    // 创建一个新的特殊对象(正则类/日期类)的实例
    return new constructor(target)
  }
  if (isObject(target)) {
    map.set(target, true) // 为循环引用的对象做标记
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (const prop in target) {
      if (Object.prototype.hasOwnProperty.call(target, prop)) {
        cloneTarget[prop] = deepClone(target[prop], map)
      }
    }
    return cloneTarget
  }
  return target
}

/**
 * ['2021','1','1','0','0','0'] =>>>> 时间戳
 * @param array
 * @returns
 */
export const dayArrayToTime = array => {
  const arr = array.map((element, index) => {
    if (index === 1) {
      return parseInt(element) - 1
    }
    return parseInt(element)
  })
  dayjs.extend(arraySupport)
  return dayjs(arr).valueOf()
}

/**
 *时间戳 =>>>>  ['2021','01','01','00','00','00']
 * @param t
 */

export const timeToArray = t => {
  dayjs.extend(toArray)
  return dayjs(t)
    .toArray()
    .slice(0, -1)
    .map((item, index) => {
      let value
      if (index === 1) {
        value = (item + 1).toString()
      } else {
        value = item.toString()
      }
      if (value.length === 1) {
        value = '0' + value
      }
      return value
    })
}

/**
 * 格式化时长
 * @param time 毫秒数
 * @param patter 格式  默认:x时x分x秒 参数为:=> 则为xx:xx:xx
 * @returns
 */
export const formatDuration = (time, patter) => {
  let h = '00'
  let m = '00'
  let s = '00'
  // if (time % (60 * 60 * 1000) >= 0) {
  //   h = Math.floor(time / (60 * 60 * 1000)) + ''
  //   time = time % (60 * 60 * 1000)
  //   if (time % (60 * 1000) >= 0) {
  //     m = Math.floor(time / (60 * 1000)) + ''
  //     time = time % (60 * 1000)
  //   }
  // } else {
  //   time = time % (60 * 60 * 1000)
  //   if (time % (60 * 1000) >= 0) {
  //     m = Math.floor(time / (60 * 1000)) + ''
  //     time = time % (60 * 1000)
  //   }
  // }
  // s = Math.floor(time / 1000) + ''
  // console.log(88, time % (1000 * 60 * 60))
  // return `${h}时${m}分${s}秒`

  if (time > 0) {
    s = timeToTwo(Math.floor((time / 1000) % 60)) // 秒
    m = timeToTwo(Math.floor((time / 1000 / 60) % 60)) // 分
    h = timeToTwo(Math.floor((time / 1000 / 60 / 60) % 24)) // 余下多少时（0-23）
  }

  if (patter) {
    return `${h}${patter}${m}${patter}${s}`
  }

  return `${h}时${m}分${s}秒`
}

/**
 * 表格时长格式化
 * @param row
 * @param column
 * @param cellValue
 * @param _index
 * @returns
 */
export function formatTableDuration(row, column, cellValue, _index) {
  return formatDuration(cellValue)
}

/**
 *时间转为2为 =>>>> 1 => '01'
 * @param t
 */
export const timeToTwo = t => {
  return (t >= 10 ? '' : '0') + t
}

/**
 * 字符串首字母大写
 * @param str 字符串
 */
export const capitalize = str => {
  if (typeof str === 'string') {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return str
}

/**
 * 定时器
 * @returns
 */
export const useInterval = () => {
  let timer = null

  const initInterval = (func, wait = 1000 * 30) => {
    const interv = function () {
      func.call(null)
      timer = setTimeout(interv, wait)
    }
    timer = setTimeout(interv, wait)
  }

  const clearInterval = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  return { initInterval, clearInterval }
}

/**
 * 快捷时间
 * @returns
 */
export const shortcutsTime = (() => {
  const timeRang = [2, 4, 12, 24, 48, 72]
  return timeRang.map(item => ({
    text: item + '小时',
    value: () => dayjs().add(item, 'hour').valueOf()
  }))
})()

/**
 * 根据身份证 获取 出生日期
 * @returns
 */
export const getBirthByIdCard = identity => {
  return `${identity.slice(6, 10)}-${identity.slice(10, 12)}-${identity.slice(12, 14)}`
}

/**
 * 根据身份证 获取 性别
 * @returns
 */
export const getSexByIdCard = identity => {
  return Number(identity.charAt(16)) % 2 === 0 ? '女' : '男'
}

/**
 * 提取纯文本
 * @param content
 * @returns
 */
export const getPureText = content => {
  return content.replace(/<[^>]+>/g, '')
}

/**
 * 表格 提取纯文本
 * @param row
 * @param column
 * @param cellValue
 * @param _index
 * @returns
 */
export function formatTablePureText(row, column, cellValue, _index) {
  return getPureText(cellValue)
}

/**
 * 判断终端
 * @returns string pc or h5
 */
export function judgeTerminal() {
  return navigator.platform.indexOf('Win') === 0 || navigator.platform.indexOf('Mac') === 0 ? 'pc' : 'h5'
}

// 生成随机数字id
/**
 * @ifConnect 是否连字符
 */
export function genId(ifConnect = true) {
  const str = ifConnect ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' : 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'
  return str
    .replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
    .toUpperCase()
}

// 关浏览器
export const closeWindow = () => {
  if (navigator.userAgent.indexOf('MSIE') > 0) {
    if (navigator.userAgent.indexOf('MSIE 6.0') > 0) {
      window.opener = null
      window.close()
    } else {
      window.open('', '_top')
      window.top?.close()
    }
  } else if (navigator.userAgent.indexOf('Firefox') > 0) {
    window.location.href = 'about:blank ' //火狐默认状态非window.open的页面window.close是无效的
  } else {
    window.opener = null
    window.open('', '_self', '')
    window.close()
  }
}
