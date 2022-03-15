<script setup lang='ts'>
import { useRoute } from 'vue-router'

const route = useRoute()
const Routername = ref<string>('')
const opp = ref<string>('')

const Tmap = () => {
  window.addEventListener('message', (event) => {
    let loc = event.data;
    opp.value = loc.city
    console.log(opp.value)
  }, false)
}


watch(route, to => {
  window.sessionStorage.setItem('Routername', to.meta.name as string)
  Routername.value = window.sessionStorage.getItem('Routername') as string
})

onMounted(() => {
  Routername.value = window.sessionStorage.getItem('Routername') as string
  Tmap()
})


</script>

<template>
  <div class="tabs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>主页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ Routername }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <iframe
    id="geoPage"
    width="0"
    height="0"
    frameborder="0"
    style="display:none;"
    scrolling="no"
    src="https://apis.map.qq.com/tools/geolocation?key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp"
  ></iframe>
</template>

<style scoped lang="less">
.tabs {
  height: 35px;
  background-color: #fff;
  box-shadow: 0 5px 10px #ddd;
}
</style>
