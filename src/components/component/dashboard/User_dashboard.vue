<script setup lang='ts'>

const nowTime = ref<string>('')
const loginAddress = ref<string>('')
const user_name = ref<string>('')

onMounted(() => {
  nowTime.value = window.sessionStorage.getItem('nowTime') as string
  loginAddress.value = window.sessionStorage.getItem('loginAddress') as string
  user_name.value = window.sessionStorage.getItem('user_name') as string
})
</script>

<template>
  <el-card shadow="hover" class="left_admin">
    <div class="admin_top">
      <div class="top_img">
        <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div class="top_userinfo">
        <div class="userinfo_name">{{ user_name }}</div>
        <div class="userinfo_type">管理员</div>
      </div>
    </div>
    <el-divider />
    <div class="admin_bottom">
      <div class="bottom_time">
        <div class="time_text">上次登录时间:</div>
        <div class="time_info">{{ nowTime }}</div>
      </div>
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
  height: 45px;
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
