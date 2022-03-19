<script setup lang='ts'>

const formData = inject('formData') as any
const FormItem = inject('FormItem') as any
</script>

<template>
  <el-form label-width="120px">
    <template v-for="item in FormItem" :key="item.field">
      <el-form-item :label="item.label">
        <template v-if="item.type === 'input'">
          <el-input v-model="formData[`${item.field}`]" :placeholder="item.placeholder"></el-input>
        </template>
      </el-form-item>
    </template>
  </el-form>
</template>

<style scoped lang="less">
</style>
