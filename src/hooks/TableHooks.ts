import {
  GoodsService,
  SortService,
  CarouselService,
  AddressService,
  OrderService,
} from '@/api/api'
import { PagDataTyoe } from '@/types'
import { useStore } from '@/store'

const TableHook = (type: string) => {
  const store = useStore()
  // 表格数据
  const TableData = ref<Array<any>>([])
  // 分页数据
  const PagData = reactive<PagDataTyoe>({
    pageNum: 1,
    pageSize: 8,
    total: 0,
  })
  // 表单数据
  let formData = ref<object>({})
  // 商品表单数据
  if (type == 'goods') {
    formData = ref({
      goods_name: '',
      goods_price: '',
      goods_num: '',
      goods_img: '',
      sort_id: '',
    })
  }
  // 分类表单数据
  if (type == 'sort') {
    formData = ref({
      sort_name: '',
    })
  }
  // 轮播图表单数据
  if (type == 'carousel') {
    formData = ref({
      carousel_name: '',
      carousel_src: '',
      carousel_link: '',
    })
  }
  // 地址表单数据
  if (type == 'address') {
    formData = ref({
      consignee: '',
      phone: '',
      address: '',
    })
  }
  // 订单表单数据
  if (type == 'order') {
    formData = ref({
      state: 0,
    })
  }
  // 获取表格数据
  const getTableData = async () => {
    // 获取商品数据
    if (type == 'goods') {
      const res = (await GoodsService.get(PagData))
      res.result.list.forEach((value: any) => {
        value.createGoodsTime = value.createGoodsTime.split('T')[0]
      })
      PagData.total = res.result.total
      TableData.value = res.result.list
    }
    // 获取分类数据
    if (type == 'sort') {
      const res = (await SortService.get({}))
      TableData.value = res.result
    }
    // 获取轮播图数据
    if (type == 'carousel') {
      const res = (await CarouselService.get({}))
      TableData.value = res.result.list
    }
    // 获取地址数据
    if (type == 'address') {
      const res = (await AddressService.get({}))
      TableData.value = res.result
    }
    // 获取订单数据
    if (type == 'order') {
      const res = (await OrderService.get({}))
      PagData.total = res.result.total
      TableData.value = res.result.list
    }
  }
  // 删除数据
  const delTableData = async (id: number) => {
    if (type == 'goods') {
      await GoodsService.off(id, {})
      getTableData()
    }
    if (type == 'sort') {
      await SortService.rem(id, {})
      getTableData()
    }
    if (type == 'carousel') {
      await CarouselService.rem(id, {})
      getTableData()
    }
    if (type == 'address') {
      await AddressService.rem(id, {})
      getTableData()
    }
  }
  // 打开编辑数据抽屉
  const editDrawer = async (data: any) => {
    store.changDrawer()
    store.showEdit = true
    formData.value = data
  }
  // 关闭抽屉回调
  const closeDrawer = () => {
    formData.value = {}
  }
  // 点击添加
  const addGoods = () => {
    store.changDrawer()
    store.showEdit = false
  }

  return {
    TableData,
    PagData,
    formData,
    editDrawer,
    closeDrawer,
    addGoods,
    getTableData,
    delTableData,
  }
}

export default TableHook
