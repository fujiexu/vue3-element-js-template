// export enum StorageEnum {
//   ACCESS_TOKEN = 'access_token',
//   USER = 'user'
// }
import MyEnum from '../enum'

export const StorageEnum = new MyEnum([
  { key: 'ACCESS_TOKEN', value: 'access_token' },
  { key: 'USER', value: 'user' }
])
