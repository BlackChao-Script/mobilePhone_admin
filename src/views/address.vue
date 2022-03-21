<script setup lang='ts'>
import Table from '@/components/common/Table.vue'
import Drawer from '@/components/common/Drawer.vue'
import TableHook from '@/hooks/TableHooks'
import { ColumnsType, ItemType } from '@/types'

//!数据
// 地址columns数据
const columns = ref<Array<ColumnsType>>([
  { label: 'Id', prop: 'id' },
  { label: '用户Id', prop: 'user_id' },
  { label: '地址用户名', prop: 'consignee' },
  { label: '联系方式', prop: 'phone' },
  { label: '深圳', prop: 'address' },
  { label: '操作', __slotName: 'operation' }
])
// 地址Item数据
const addressForm = ref<Array<ItemType>>([
  {
    label: '地址用户名',
    field: 'consignee',
    itemType: 'input',
    placeholder: '请输入地址用户名'
  },
  {
    label: '联系方式',
    field: 'phone',
    itemType: 'input',
    placeholder: '请输入联系方式'
  },
  {
    label: '地址',
    field: 'address',
    itemType: 'input',
    placeholder: '请输入地址'
  }
])

//! 使用Hooks
const { TableData, formData, editDrawer, closeDrawer, addGoods, getTableData, delTableData } = TableHook('address')

provide('formData', formData)

onMounted(() => {
  getTableData()
})
</script>

<template>
  <el-card>
    <!-- 表格 -->
    <Table :TableData="TableData" :columns="columns">
      <template #table_button>
        <el-button color="#324157" style="color:#fff" @click="addGoods">添加商品</el-button>
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
  <Drawer :FormItem="addressForm" type="address" btnNumber="添加(修改)地址" @closeDrawer="closeDrawer" />
</template>

<style scoped lang="less">
.el-card {
  margin: 15px;
}
</style>
