<script setup lang='ts'>
import Table from '@/components/common/Table.vue'
import Drawer from '@/components/common/Drawer.vue'
import TableHook from '@/hooks/TableHooks'
import DrawerHooks from '@/hooks/DrawerHooks'
// 商品分类表格columns数据
const columns = ref<Array<any>>([
  { label: 'Id', prop: 'id' },
  { label: '商品名称', prop: 'goods_name' },
  { label: '商品价格', prop: 'goods_price' },
  { label: '商品图片', prop: 'goods_img', __slotName: 'goodsImg' },
  { label: '添加时间', prop: 'createGoodsTime' },
  { label: '操作', __slotName: 'operation' },
])
// 添加表单格式数据
const Form = ref<any>()

// 使用Hooks
const { TableData, delTableData } = TableHook('goods')
const { DrawerRef, openDrawer } = DrawerHooks('goods')


</script>

<template>
  <el-card>
    <Table :TableData="TableData" :columns="columns">
      <template #table_button>
        <el-button color="#324157" style="color:#fff" @click="openDrawer">添加商品</el-button>
      </template>
      <template #goodsImg="slotProps">
        <el-image
          style="width: 50px; height: 50px"
          :src="slotProps.data.row.goods_img"
          :preview-src-list="[slotProps.data.row.goods_img]"
        />
      </template>
      <template #operation="slotProps">
        <el-button round color="#64d572" style="color: #fff">编辑</el-button>
        <el-button
          round
          color="#f25e43"
          style="color: #fff"
          @click="delTableData(slotProps.data.row.id)"
        >下架</el-button>
      </template>
    </Table>
    <Drawer ref="DrawerRef" />
  </el-card>
</template>

<style scoped lang="less">
.el-card {
  margin: 15px;
}
</style>
