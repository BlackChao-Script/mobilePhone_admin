<script setup lang='ts'>
import Table from '@/components/common/Table.vue'
import Drawer from '@/components/common/Drawer.vue'
import TableHooks from '@/hooks/TableHooks'

//! 数据
// 分类表格columns数据
const columns = ref<Array<any>>([
  { label: 'Id', prop: 'id' },
  { label: '分类名称', prop: 'sort_name' },
  { label: '操作', __slotName: 'operation' }
])
// 分类表单Item数据
const sortFromItem = ref<Array<any>>([
  {
    label: '分类名称',
    field: 'sort_name',
    itemType: 'input',
    placeholder: '请输入分类名称'
  }
])

//! 使用hooks
const { TableData, formData, editDrawer, closeDrawer, getTableData, addGoods, delTableData } = TableHooks('sort')

provide('formData', formData)

onMounted(() => {
  getTableData()
})
</script>

<template>
  <el-card>
    <Table :TableData="TableData" :columns="columns">
      <template #table_button>
        <el-button color="#324157" style="color:#fff" @click="addGoods">添加分类</el-button>
      </template>
      <template #operation="slotProps">
        <el-button
          round
          color="#64d572"
          style="color: #fff"
          @click="editDrawer(slotProps.data.row)"
        >编辑</el-button>
        <el-button
          round
          color="#f25e43"
          style="color: #fff"
          @click="delTableData(slotProps.data.row.id)"
        >删除</el-button>
      </template>
    </Table>
  </el-card>
  <!-- 抽屉 -->
  <Drawer :FormItem="sortFromItem" type="sort" btnNumber="添加(修改)分类" @closeDrawer="closeDrawer" />
</template>

<style scoped lang="less">
</style>
