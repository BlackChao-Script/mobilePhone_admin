<script setup lang='ts'>

const drawer = ref<boolean>(false)

defineExpose({
  drawer
})

</script>

<template>
  <el-drawer v-model="drawer">
    <template #title>
      <h4>添加商品</h4>
    </template>
    <template #default>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button color="#64d572" style="color: #fff">完成添加</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<style scoped lang="less">
</style>
