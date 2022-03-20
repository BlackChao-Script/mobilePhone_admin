<script setup lang='ts'>
import Table from '@/components/common/Table.vue'
import Drawer from '@/components/common/Drawer.vue'
import Pagination from '@/components/common/Pagination.vue'
import { useStore } from '@/store'
import TableHook from '@/hooks/TableHooks'

const store = useStore()

//! 数据
// 商品分类表格columns数据
const columns = ref<Array<any>>([
  { label: 'Id', prop: 'id' },
  { label: '商品名称', prop: 'goods_name' },
  { label: '商品价格', prop: 'goods_price' },
  { label: '商品图片', prop: 'goods_img', __slotName: 'goodsImg' },
  { label: '库存', prop: 'goods_num' },
  { label: '添加时间', prop: 'createGoodsTime' },
  { label: '操作', __slotName: 'operation' },
])
// 商品表单Item数据
const goodsFormItem = ref<Array<any>>([
  {
    label: '商品名称',
    field: 'goods_name',
    itemType: 'input',
    placeholder: '请输入商品名称'
  },
  {
    label: '商品价格',
    field: 'goods_price',
    itemType: 'input',
    placeholder: '请输入商品价格'
  },
  {
    label: '商品数量',
    field: 'goods_num',
    itemType: 'input',
    placeholder: '请输入商品价格'
  },
  {
    label: '分类id',
    field: 'sort_id',
    itemType: 'input',
    placeholder: '请输入分类id'
  },
  {
    label: '商品照片',
    field: 'goods_img',
    itemType: 'upload',
    placeholder: '请输入商品照片',
    option: {
      uploadURL: '/api/upload',
      headerObj: {
        Authorization: window.sessionStorage.getItem('token'),
      }
    }
  }

])
// 表单数据
const formData = ref<any>({
  goods_name: '',
  goods_price: '',
  goods_num: '',
  goods_img: '',
  sort_id: '',
})

provide('formData', formData)

//! 使用Hooks
// 使用TableHook Hooks
const { TableData, PagData, getTableData, delTableData } = TableHook('goods')

//! 方法
// 打开编辑数据抽屉
const editDrawer = async (data: any) => {
  store.changDrawer()
  store.showEdit = true
  const { createGoodsTime, deletedAt, ...params } = data
  formData.value = params
}
// 点击添加
const addGoods = () => {
  store.changDrawer()
  store.showEdit = false
}
// 关闭抽屉回调
const closeDrawer = () => {
  formData.value = {}
}

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
      <template #goodsImg="slotProps">
        <el-image
          style="width: 50px; height: 50px"
          :src="slotProps.data.row.goods_img"
          :preview-src-list="[slotProps.data.row.goods_img]"
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
        >下架</el-button>
      </template>
    </Table>
  </el-card>
  <!-- 抽屉 -->
  <Drawer :FormItem="goodsFormItem" type="goods" btnNumber="添加(修改)商品" @closeDrawer="closeDrawer" />
  <!-- 分页器 -->
  <Pagination :PagData="PagData" @getTableData="getTableData" />
</template>

<style scoped lang="less">
.el-card {
  margin: 15px;
}
</style>
