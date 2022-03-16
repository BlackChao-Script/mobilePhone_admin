<script setup lang='ts'>

const nowTime = ref<string>('')
const loginAddress = ref<string>('')

const Tmap = () => {
  window.addEventListener('message', function (event) {
    window.sessionStorage.setItem('loginAddress', event.data.city)
  }, false)
}

onMounted(() => {
  nowTime.value = window.sessionStorage.getItem('nowTime') as string
  loginAddress.value = window.sessionStorage.getItem('loginAddress') as string
  Tmap()
})
</script>

<template>
  <el-card shadow="hover" class="left_admin">
    <div class="admin_top">
      <div class="top_img">
        <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div class="top_userinfo">
        <div class="userinfo_name">admin</div>
        <div class="userinfo_type">超级管理员</div>
      </div>
    </div>
    <el-divider />
    <div class="admin_bottom">
      <div class="bottom_time">
        <div class="time_text">上次登录时间:</div>
        <div class="time_info">{{ nowTime }}</div>
      </div>
      <div class="bottom_address">
        <div class="address_text">上次登录地点:</div>
        <div class="address_info">{{ loginAddress }}</div>
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
    </div>
  </el-card>
</template>

<style scoped lang="less">
.admin_top {
  display: flex;
  justify-content: space-around;
  height: 120px;
  width: 80%;
  .top_img {
    width: 35%;
    display: flex;
    align-items: center;
    img {
      width: 110px;
      border-radius: 50%;
    }
  }
  .top_userinfo {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .userinfo_name {
      font-size: 30px;
    }
    .userinfo_type {
      color: #999999;
    }
  }
}
.admin_bottom {
  color: #999999;
  height: 73px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .bottom_time,
  .bottom_address {
    display: flex;
    align-items: center;
  }
  .time_text,
  .address_text {
    margin-left: 30px;
  }

  .time_info,
  .address_info {
    margin-left: 150px;
  }
}
</style>
