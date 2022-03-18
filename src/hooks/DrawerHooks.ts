import TableHook from '@/hooks/TableHooks'

const DrawerHooks = (type: string) => {
  // 抽屉对话框Ref
  const DrawerRef = ref<HTMLElement | any>('')
  // 获取数据函数
  let getData: Function = () => {}
  // 赋值获取商品数据
  if (type == 'goods') {
    getData = TableHook('goods').getTableData
  }
  // 打开添加商品抽屉
  const openDrawer = () => {
    DrawerRef.value.drawer = true
  }

  return {
    DrawerRef,
    openDrawer,
  }
}

export default DrawerHooks
