<script setup lang='ts'>
import Hearder from '@/components/common/Header.vue'
import Aside from '@/components/common/Aside.vue'
</script>

<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <Hearder />
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <Aside />
      <!-- 主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="less">
</style>
