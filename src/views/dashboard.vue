<script setup lang='ts'>
import UserDashboard from '@/components/component/dashboard/User_dashboard.vue'
import LanguageDashboard from '@/components/component/dashboard/Language_dashboard.vue'
import InfoDashboard from '@/components/component/dashboard/Info_dashboard.vue'
import TodoDashboard from '@/components/component/dashboard/Todo_dashboard.vue'
import Sale from '@/components/component/dashboard/Sale.vue'
import Stacked from '@/components/component/dashboard/Stacked.vue'

</script>

<template>
  <div class="dashboard_top">
    <div class="dashboard_left">
      <UserDashboard />
      <LanguageDashboard />
    </div>
    <div class="dashboard_right">
      <div class="right_icon">
        <InfoDashboard />
      </div>
      <TodoDashboard />
    </div>
  </div>

  <div class="dashboard_bottom">
    <Sale />
    <Stacked />
  </div>
</template>

<style scoped lang="less">
.dashboard_top {
  display: flex;
  width: 100%;
  height: 480px;
  .dashboard_left {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .left_admin,
    .left_Language {
      width: 95%;
      height: 50%;
      margin-top: 15px;
    }
  }
  .dashboard_right {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .right_icon {
      margin-top: 15px;
      width: 98%;
      height: 25%;
      display: flex;
      justify-content: space-between;
    }
    .right_todo {
      width: 98%;
      height: 70%;
    }
  }
}

.dashboard_bottom {
  margin-top: 20px;
  height: 350px;
  display: flex;
  justify-content: space-around;
}
</style>
