<script setup lang='ts'>
import { useRoute } from 'vue-router'

const route = useRoute()
const Routername = ref<string>('')



watch(route, to => {
  window.sessionStorage.setItem('Routername', to.meta.name as string)
  Routername.value = window.sessionStorage.getItem('Routername') as string
})

onMounted(() => {
  Routername.value = window.sessionStorage.getItem('Routername') as string
})


</script>

<template>
  <div class="tabs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>主页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ Routername }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="less">
.tabs {
  height: 35px;
  background-color: #fff;
  box-shadow: 0 5px 10px #ddd;
}
</style>
