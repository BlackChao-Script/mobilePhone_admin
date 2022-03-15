<script setup lang='ts'>
import { useStore } from '@/store'
import menuData from '@/utils/menu'

const store = useStore()
const menuListIcon = ref<string[]>(['house', 'box', 'grid', 'picture', 'position', 'document'])
const saveNavState = (path: string) => {
  window.sessionStorage.setItem('path', path)
}
store.changPath()

</script>

<template>
  <el-aside :width="store.asideOpen ? '200px' : '64px'">
    <el-menu
      :collapse="!store.asideOpen"
      :collapse-transition="false"
      active-text-color="#409eff"
      background-color="#324157"
      class="el-menu-vertical-demo"
      text-color="#bfcbd9"
      :default-active="store.path"
      :router="true"
    >
      <el-menu-item
        :index="'/home/' + item.path"
        v-for="(item,index) in menuData[0].list"
        :key="item.id"
        @click="saveNavState('/home/' + item.path)"
      >
        <el-icon>
          <component :is="menuListIcon[index]"></component>
        </el-icon>
        <span>{{ item.authName }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style scoped lang="less">
</style>
