import { ref } from 'vue'
import router from '@/router'
const manageVisible = ref(false)
const manageId = ref('')

const manage = () => {
  manageId.value = ''
  manageVisible.value = true
}

const editRow = row => {
  console.log('editRow', row)
  manageId.value = row.id
  manageVisible.value = true
}

const closeManageDialog = () => {
  manageVisible.value = false
}

const deleteRow = row => {
  console.log('deleteRow', row)
}

const sortRow = (row, n) => {
  const { id, menuSort } = row
  console.log('sortRow', id, menuSort, n)
}

const detailVisible = ref(false)
const detailId = ref('detailId')
const show = row => {
  console.log('show', row)
  detailId.value += '1'
  detailVisible.value = true
}

const manage2 = () => {
  router.push({ name: 'MenuManage' }) //query: { id: manageId.value }
}

export const useTableOperate = {
  manageId,
  editRow,
  deleteRow,
  manageVisible,
  manage,
  sortRow,
  detailVisible,
  show,
  detailId,
  closeManageDialog,
  manage2
}
