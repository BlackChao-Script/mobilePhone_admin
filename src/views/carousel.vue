<script setup lang='ts'>
import Table from '@/components/common/Table.vue'
import Drawer from '@/components/common/Drawer.vue'
import TableHook from '@/hooks/TableHooks'

//! 数据
// 轮播图columns数据
const columns = ref<Array<any>>([
  { label: 'Id', prop: 'id' },
  { label: '轮播图名称', prop: 'carousel_name' },
  { label: '轮播图地址', prop: 'carousel_src', __slotName: 'carousel_src' },
  { lable: '轮播图链接', prop: 'carousel_link' },
  { label: '操作', __slotName: 'operation' },
])
// 轮播图Item数据
const carouselForm = ref<Array<any>>([
  {
    label: '轮播图名称',
    field: 'carousel_name',
    itemType: 'input',
    placeholder: '请输入轮播图名称'
  },
  {
    label: '轮播图地址',
    field: 'carousel_src',
    itemType: 'upload',
    placeholder: '请输入商品照片',
    option: {
      uploadURL: '/api/upload',
      headerObj: {
        Authorization: window.sessionStorage.getItem('token'),
      }
    }
  },
  {
    label: '轮播图链接',
    field: 'carousel_link',
    itemType: 'input',
  }
])

//! 使用Hooks
// 使用TableHook Hooks
const { TableData, formData, editDrawer, closeDrawer, addGoods, getTableData, delTableData } = TableHook('carousel')

provide('formData', formData)

onMounted(() => {
  getTableData()
})
</script>

<template>
  <el-card>
    <Table :TableData="TableData" :columns="columns">
      <template #table_button>
        <el-button color="#324157" style="color:#fff" @click="addGoods">添加轮播图</el-button>
      </template>
      <template #carousel_src="slotProps">
        <el-image
          style="width: 50px; height: 50px"
          :src="slotProps.data.row.carousel_src"
          :preview-src-list="[slotProps.data.row.carousel_src]"
        />
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
  <Drawer
    :FormItem="carouselForm"
    type="carousel"
    btnNumber="添加(修改)轮播图"
    @closeDrawer="closeDrawer"
  />
</template>

<style scoped lang="less">
</style>
