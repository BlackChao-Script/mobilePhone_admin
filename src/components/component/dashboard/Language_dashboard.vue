<script setup lang='ts'>
import EchartsOPtion from '@/hooks/EchartsOptionHooks'

const { MyEchartsRef } = EchartsOPtion('pieOption')

</script>

<template>
  <el-card shadow="hover" class="left_Language">
    <div class="Language_title">语言占比</div>
    <el-divider />
    <div id="echarts_box" ref="MyEchartsRef"></div>
  </el-card>
</template>

<style scoped lang="less">
#echarts_box {
  width: 100%;
  height: 150px;
}
.Language_title {
  margin: 15px;
}
.Language_progress {
  margin-left: 30px;
  width: 90%;
  .progress_name {
    font-size: 17px;
    margin-top: 5px;
  }
}
</style>
