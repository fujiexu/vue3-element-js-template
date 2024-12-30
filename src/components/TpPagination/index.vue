<template>
  <el-pagination
    class="tp-pagination"
    @current-change="onChange"
    @size-change="showSizeChange"
    :current-page="pages.pageNum"
    :page-size="pages.pageSize"
    :layout="layout"
    background
    :total="pages.total"
  />
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TpPagination',
  props: {
    pages: {
      type: Object,
      required: true
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next'
    }
  },
  emits: ['currentChange', 'sizeChange'],
  setup(props, { emit }) {
    const onChange = current => {
      emit('currentChange', current)
    }

    const showSizeChange = pageSize => {
      emit('sizeChange', pageSize)
    }

    return {
      onChange,
      showSizeChange
    }
  }
})
</script>
<style scoped lang="scss">
.tp-pagination {
  justify-content: flex-end;
  margin-bottom: $tp-default-dis;
  padding: 0 $tp-default-dis;

  :deep(.el-icon) {
    color: inherit;
  }
}
</style>
