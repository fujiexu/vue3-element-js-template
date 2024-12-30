import { reactive } from 'vue'

// fn传入的查询方法名
export const usePage = fn => {
  const pages = reactive({
    pageNum: 1,
    total: 0,
    pageSize: 10
  })

  const sizeChange = size => {
    pages.pageNum = 1
    pages.pageSize = size
    fn()
  }

  const currentChange = (page = 1) => {
    pages.pageNum = page
    fn()
  }

  const tableIndex = index => {
    return pages.pageSize * (pages.pageNum - 1) + index + 1
  }

  return {
    pages,
    tableIndex,
    sizeChange,
    currentChange
  }
}
