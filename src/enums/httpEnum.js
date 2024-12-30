import MyEnum from '@/utils/enum'

/**
 * @description: 请求结果 code
 */

export const ResCodeEnum = new MyEnum([
  { key: 'SUCCESS', value: 100000 },
  { key: 'AUTH_EXPIRE', value: 160056 } //token已过期
])

/**
 * @description:  常用的contentTyp类型
 */

export const ContentTypeEnum = new MyEnum([
  { key: 'JSON', value: 'application/json;charset=UTF-8' }, // json
  { key: 'TEXT', value: 'text/plain;charset=UTF-8' },
  { key: 'FORM_URLENCODED', value: 'application/x-www-form-urlencoded;charset=UTF-8' }, // form-data 一般配合qs
  { key: 'FORM_DATA', value: 'multipart/form-data;charset=UTF-8' } // form-data  上传
])
