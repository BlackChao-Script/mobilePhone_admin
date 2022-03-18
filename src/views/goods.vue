<script setup lang='ts'>
import Table from '@/components/common/Table.vue'
import { GoodsService } from '@/api/api'
import { PagDataTyoe } from '@/types'
// 商品表格数据
const goodsTableData = ref<Array<any>>([])
// 商品分页数据
const goodsPagData = reactive<PagDataTyoe>({
  pageNum: 1,
  pageSize: 12
})
// 商品分类表格columns数据
const columns = ref<Array<any>>([
  { label: 'Id', prop: 'id' },
  { label: '商品名称', prop: 'goods_name' },
  { label: '商品价格', prop: 'goods_price' },
  { label: '商品图片', prop: 'goods_img', __slotName: 'goodsImg' },
  { label: '添加时间', prop: 'createGoodsTime' },
])

// 获取商品表格数据
const getGoodsTableData = async () => {
  const res = await GoodsService.get(goodsPagData) as any
  res.result.list.forEach((value: any) => {
    value.createGoodsTime = value.createGoodsTime.split('T')[0]
  })
  goodsTableData.value = res.result.list
}

onMounted(() => {
  getGoodsTableData()
})

</script>

<template>
  <el-card>
    <Table :TableData="goodsTableData" :columns="columns">
      <template #table_button>
        <el-button color="#324157" style="color:#fff">添加商品</el-button>
      </template>
      <template #goodsImg="slotProps">
        <el-image
          style="width: 50px; height: 50px"
          :src="slotProps.data.row.goods_img"
          :preview-src-list="[slotProps.data.row.goods_img]"
        />
      </template>
    </Table>
  </el-card>
</template>

<style scoped lang="less">
.el-card {
  margin: 15px;
}
</style>
