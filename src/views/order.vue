<script setup lang='ts'>
import Table from '@/components/common/Table.vue'
import Drawer from '@/components/common/Drawer.vue'
import Pagination from '@/components/common/Pagination.vue'
import TableHook from '@/hooks/TableHooks'
import { ColumnsType, ItemType } from '@/types'

//! 数据
// 订单columns数据
const columns = ref<Array<ColumnsType>>([
  { label: 'Id', prop: 'id' },
  { label: '商品信息', prop: 'goods_info' },
  { label: '总价格', prop: 'total' },
  { label: '订单编号', prop: 'order_number' },
  { label: '地址Id', prop: 'address_id' },
  { label: '状态', prop: 'state', __slotName: 'state' },
  { label: '操作', __slotName: 'operation' },
])
// 轮播图Item数据
const carouselForm = ref<Array<ItemType>>([
  {
    label: '状态',
    field: 'state',
    itemType: 'select',
    placeholder: '请选择订单状态(0：未支付，1：已支付，2：已发货，3：已签收，4：取消)'
  },
])

//! 使用Hooks
// 使用TableHook Hooks
const {
  TableData,
  formData,
  PagData,
  editDrawer,
  closeDrawer,
  getTableData,
  delTableData
} = TableHook('order')

provide('formData', formData)

onMounted(() => {
  getTableData()
})
</script>

<template>
  <el-card>
    <Table :TableData="TableData" :columns="columns">
      <template #state="slotProps">
        <el-tag v-if="slotProps.data.row.state == 0" type="danger">未支付</el-tag>
        <el-tag v-if="slotProps.data.row.state == 1" type="success">已支付</el-tag>
        <el-tag v-if="slotProps.data.row.state == 2">已发货</el-tag>
        <el-tag v-if="slotProps.data.row.state == 3" type="warning">已签收</el-tag>
        <el-tag v-if="slotProps.data.row.state == 4" type="info">取消</el-tag>
      </template>
      <template #operation="slotProps">
        <el-button
          round
          color="#64d572"
          style="color: #fff"
          @click="editDrawer(slotProps.data.row)"
        >更改状态</el-button>
        <el-button
          round
          color="#f25e43"
          style="color: #fff"
          @click="delTableData(slotProps.data.row.id)"
        >删除</el-button>
      </template>
    </Table>
  </el-card>
  <Drawer
    :FormItem="carouselForm"
    type="order"
    btnNumber="添加(修改)轮播图"
    @closeDrawer="closeDrawer"
  />
  <Pagination :PagData="PagData" @getTableData="getTableData" />
</template>

<style scoped lang="less">
.el-card {
  margin: 15px;
}
</style>
