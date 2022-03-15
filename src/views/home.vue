<script setup lang='ts'>

</script>

<template>
  <el-container>
    <!-- 侧边栏 -->
    <el-aside>aside</el-aside>
    <el-container>
      <!-- 头部 -->
      <el-header>header</el-header>
      <!-- 主体 -->
      <el-main>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
