<script setup lang='ts'>
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import screenfull from 'screenfull'

const store = useStore()
const router = useRouter()

const user_name = ref<string>('')

// 点击全屏
const clickFull = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
// 退出登录
const nextLogin = () => {
  window.sessionStorage.removeItem('token')
  router.push('/login')
}
onMounted(() => {
  user_name.value = window.sessionStorage.getItem('user_name') as string
})
</script>

<template>
  <div class="heard">
    <div class="heard_left">
      <div class="left_icon" @click="store.changAsideOpen()">
        <el-icon v-if="store.asideOpen">
          <component is="fold"></component>
        </el-icon>
        <el-icon v-else>
          <component is="fold"></component>
        </el-icon>
      </div>
      <div class="left_title">后台管理系统</div>
    </div>
    <div class="heard_right">
      <div class="right_fullicon">
        <el-icon @click="clickFull">
          <component is="FullScreen"></component>
        </el-icon>
      </div>
      <div class="right_user">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div class="right_name">
        <el-dropdown>
          <span style="cursor: pointer">
            {{ user_name }}
            <el-icon>
              <component is="arrowdown"></component>
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <el-link
                  href="https://github.com/BlackChao-Script/mobilePhone_admin"
                  target="_blank"
                >项目地址</el-link>
              </el-dropdown-item>
              <el-dropdown-item @click="nextLogin">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.heard {
  line-height: 60px;
  color: #fff;
  .heard_left {
    float: left;
    display: flex;
    .left_title {
      margin-left: 10px;
      font-size: 23px;
    }
  }
  .heard_right {
    float: right;
    display: flex;
    .right_user {
      margin: 10px;
    }
    .right_name {
      .el-dropdown {
        color: #fff;
        line-height: 60px;
      }
    }
  }
  .left_icon,
  .right_fullicon {
    margin-right: 10px;
    margin-top: 10px;
    .el-icon {
      font-size: 30px;
      cursor: pointer;
    }
  }
}
</style>
