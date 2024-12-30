import MyEnum from '@/utils/enum'

//菜单状态
export const MEMU_STATES = new MyEnum([
  { key: 'ENABLE', value: 0, label: '启用' },
  { key: 'DISABLE', value: 1, label: '停用' }
])

//菜单类型
export const MEMU_TYPES = new MyEnum([
  { key: 'CATALOGUE', value: 0, label: '目录' },
  { key: 'MENU', value: 1, label: '菜单' },
  { key: 'BUTTON', value: 2, label: '按钮' }
])
