import { ElNotification } from 'element-plus'
import { GoodsService } from '@/api/api'
import TableHook from '@/hooks/TableHooks'

const DrawerHooks = (type: string, formData?: any) => {
  // 禁用上传图片
  const disabledUpload = ref<boolean>(false)
  // 表单Ref
  const FormRef = ref<HTMLElement | any>(null)
  //  获取表格对应数据使用TableHook
  const { getTableData } = TableHook(type)
  // 打开添加商品抽屉
  const openDrawer = () => {}
  // 关闭抽屉的钩子
  const closeDrawer = () => {
    for (let i in formData) {
      formData[i] = ''
    }
  }
  // 图片上传成功的钩子
  const successImg = (file: any) => {
    ElNotification({
      title: '成功',
      message: '图片上传成功',
      type: 'success',
    })
    disabledUpload.value = true
    formData.goods_img = file.result.file_path
    console.log(formData.goods_img)
  }
  // 图片上传失败的钩子
  const errorImg = () => {
    ElNotification({
      title: '成功',
      message: '图片上传失败',
      type: 'error',
    })
  }
  // 图片上传超出限制个数的钩子
  const handleExceed = () => {
    ElNotification({
      title: '失败',
      message: '超出图片上传个数',
      type: 'error',
    })
  }
  // 提交表单
  const submitForm = () => {
    FormRef.value.validate(async (value: boolean) => {
      if (value === false) return
      if (type == 'goods') {
        formData.goods_price = parseInt(formData.goods_price)
        formData.sort_id = parseInt(formData.sort_id)
        formData.goods_num = parseInt(formData.goods_num)
        formData.goods_img = formData.goods_img.split('/')[4]
        await GoodsService.add(formData)
        getTableData()
      }
    })
  }

  return {
    FormRef,
    disabledUpload,
    openDrawer,
    closeDrawer,
    successImg,
    errorImg,
    handleExceed,
    submitForm,
  }
}

export default DrawerHooks
