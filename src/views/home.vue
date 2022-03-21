<script setup lang='ts'>
import Hearder from '@/components/common/Header.vue'
import Aside from '@/components/common/Aside.vue'
import Tabs from '@/components/common/Tabs.vue'
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
      <!-- 标签栏 -->

      <el-main>
        <Tabs />
        <el-scrollbar height="850px">
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="less">
</style>
