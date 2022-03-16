<script setup lang='ts'>

</script>

<template>
  <el-card shadow="hover" class="left_Language">
    <div class="Language_title">语言占比</div>
    <el-divider />
    <div class="Language_progress">
      <div class="progress_name">Vue</div>
      <el-progress :percentage="50" />
      <div class="progress_name">Ts</div>
      <el-progress :percentage="30" color="#f25e43" />
      <div class="progress_name">Element-plus</div>
      <el-progress :percentage="20" color="#64d572" />
    </div>
  </el-card>
</template>

<style scoped lang="less">
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
