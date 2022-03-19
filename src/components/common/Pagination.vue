<script setup lang='ts'>
const { PagData = {} } = defineProps({
  PagData: Object
})

const em = defineEmits(['getTableData'])

const getTableData = () => em('getTableData')

const handleSizeChange = (val: number) => {
  PagData.pageSize = val
  getTableData()
}
const handleCurrentChange = (val: number) => {
  PagData.pageNum = val
  getTableData()
}


</script>

<template>
  <div>
    <el-pagination
      :page-sizes="[3, 5, 8]"
      :page-size="PagData.pageSize"
      layout="sizes, prev, pager, next"
      :total="PagData.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<style scoped lang="less">
div{
  display: flex;
  justify-content: center;
}
</style>
