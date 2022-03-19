<script setup lang='ts'>
import DrawerHooks from '@/hooks/DrawerHooks'


// 接收props
const { btnNumber, formData, FormItem }: any = defineProps({
  btnNumber: String,
  formData: Object,
  FormItem: Array,
})


const {
  disabledUpload,
  FormRef,
  closeDrawer,
  successImg,
  errorImg,
  handleExceed,
  submitForm
} = DrawerHooks('goods', formData)

</script>

<template>
  <el-drawer @close="closeDrawer">
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
            </template>
          </el-form-item>
        </template>
      </el-form>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button color="#64d572" style="color: #fff" @click="submitForm">完成添加</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<style scoped lang="less">
</style>
