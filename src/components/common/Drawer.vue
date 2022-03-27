<script setup lang='ts'>
import { ElNotification } from 'element-plus'
import { GoodsService, SortService, CarouselService, AddressService, OrderService } from '@/api/api'
import { useStore } from '@/store'
import TableHook from '@/hooks/TableHooks'

//! 使用状态管理
const store = useStore()

//! 接收参数
// 接收父组件属性
let { btnNumber, type, FormItem }: any = defineProps({
  btnNumber: String,
  type: String,
  FormItem: Array,
})
const formData = ref<any>(inject('formData'))
// 接收父组件方法
const em = defineEmits(['closeDrawer'])
const closeDrawer = () => em('closeDrawer')

//! 数据
// 表单Ref
const FormRef = ref<HTMLElement | any>(null)
// 禁用上传图片
const disabledUpload = ref<boolean>(false)

//! Hooks
//  获取表格对应数据使用TableHook
const { getTableData } = TableHook(type)

//! 方法
// 图片上传成功的钩子
const successImg = (file: any) => {
  ElNotification({
    title: '成功',
    message: '图片上传成功',
    type: 'success',
  })
  disabledUpload.value = true
  if (type == 'goods') {
    formData.value.goods_img = file.result.file_path
  }
  if (type == 'carousel') {
    formData.value.carousel_src = file.result.file_path
  }
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
  FormRef.value.validate(async (valid: any) => {
    if (!valid) return
    //* 商品
    if (type == 'goods') {
      if (store.showEdit) {
        const { createGoodsTime, deletedAt, id, ...params } = formData.value
        params.goods_img = params.goods_img.split('/')[4]
        params.goods_num = params.goods_num * 1
        params.goods_price = params.goods_price * 1
        await GoodsService.update(id, params)
      } else {
        formData.value.goods_price = formData.value.goods_price * 1
        formData.value.sort_id = parseInt(formData.value.sort_id)
        formData.value.goods_num = parseInt(formData.value.goods_num)
        formData.value.goods_img = formData.value.goods_img.split('/')[4]
        await GoodsService.add(formData.value)
      }
    }
    if (type == 'sort') {
      if (store.showEdit) {
        const { id, sort_name } = formData.value
        await SortService.update(id, { sort_name })
      } else {
        await SortService.add(formData.value)
      }

    }
    if (type == 'carousel') {
      const { id, ...params } = formData.value
      if (store.showEdit) {
        params.carousel_src = params.carousel_src.split('/')[4]
        await CarouselService.update(id, params)
      } else {
        formData.value.carousel_src = formData.value.carousel_src.split('/')[4]
        await CarouselService.create(formData.value)
      }
    }
    if (type == 'address') {
      const { id, user_id, ...params } = formData.value
      if (store.showEdit) {
        await AddressService.update(id, params)
      } else {
        await AddressService.add(params)
      }
    }
    if (type == 'order') {
      const { state, id, ...params } = formData.value
      await OrderService.update(id, { state })
    }
    store.changDrawer()
    getTableData()
  })

}


</script>

<template>
  <el-drawer v-model="store.drawer" @close="closeDrawer">
    <template #title>
      <h4>{{ btnNumber }}</h4>
    </template>
    <template #default>
      <el-form ref="FormRef" :model="formData" label-width="120px">
        <template v-for="item in FormItem" :key="item.label">
          <el-form-item :label="item.label">
            <template v-if="item.itemType === 'input'">
              <el-input v-model="formData[`${item.field}`]" :placeholder="item.placeholder"></el-input>
            </template>
            <template v-if="item.itemType === 'upload'">
              <div v-if="formData.id">
                <el-image :src="formData.goods_img || formData.carousel_src"></el-image>
              </div>
              <div v-else>
                <el-upload
                  :action="item.option.uploadURL"
                  :headers="item.option.headerObj"
                  list-type="picture-card"
                  :disabled="disabledUpload"
                  :limit="1"
                  :on-success="successImg"
                  :on-error="errorImg"
                  :on-exceed="handleExceed"
                >
                  <el-icon>
                    <component is="plus"></component>
                  </el-icon>
                </el-upload>
              </div>
            </template>
            <template v-if="item.itemType === 'select'">
              <el-select v-model="formData[`${item.field}`]" placeholder="请选择状态">
                <el-option label="未支付" :value="0" />
                <el-option label="已支付" :value="1" />
                <el-option label="已发货" :value="2" />
                <el-option label="已签收" :value="3" />
                <el-option label="取消" :value="4" />
              </el-select>
            </template>
          </el-form-item>
        </template>
      </el-form>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button color="#64d572" style="color: #fff" @click="submitForm">完成</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<style scoped lang="less">
</style>
