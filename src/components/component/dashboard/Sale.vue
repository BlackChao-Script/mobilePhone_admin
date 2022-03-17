<script setup lang='ts'>
import EchartsOPtion from '@/hooks/EchartsOptionHooks'

const { MyEchartsRef } = EchartsOPtion('barOption')
</script>

<template>
  <el-card shadow="hover">
    <div id="echarts_box" ref="MyEchartsRef"></div>
  </el-card>
</template>

<style scoped lang="less">
.el-card {
  width: 48.5%;
}
#echarts_box {
  margin-top: 15px;
  width: 100%;
  height: 350px;
}
</style>
