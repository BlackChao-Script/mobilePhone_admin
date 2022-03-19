import { GoodsService } from '@/api/api'
import { PagDataTyoe } from '@/types'

const TableHook = (type: string) => {
  // 表格数据
  const TableData = ref<Array<any>>([])
  // 分页数据
  const PagData = reactive<PagDataTyoe>({
    pageNum: 1,
    pageSize: 12,
  })
  // 获取表格数据
  const getTableData = async () => {
    // 获取商品数据
    if (type == 'goods') {
      const res = (await GoodsService.get(TableData)) as any
      res.result.list.forEach((value: any) => {
        value.createGoodsTime = value.createGoodsTime.split('T')[0]
      })
      TableData.value = res.result.list
    }
    // 获取分类数据
    // 获取轮播图数据
    // 获取地址数据
    // 获取订单数据
  }
  // 删除数据
  const delTableData = async (id: number) => {
    if (type == 'goods') {
      await GoodsService.off(id, {})
      getTableData()
    }
  }
  return {
    TableData,
    PagData,
    getTableData,
    delTableData,
  }
}

export default TableHook
