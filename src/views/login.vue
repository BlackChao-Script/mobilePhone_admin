<script setup lang='ts'>
import { UserService } from '@/api/api'
import { UserParamsType } from '@/types'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

const router = useRouter()
const store = useStore()
// 登录数据
const loginUserParams = reactive<UserParamsType>({
  user_name: '',
  password: '',
})
// 注册数据
const registerUserParams = reactive<UserParamsType>({
  user_name: '',
  password: '',
})
// 登录
const loginClick = async () => {
  const res = (await UserService.login(loginUserParams))
  const { token } = res.result
  window.sessionStorage.setItem('token', token)
  router.push('/home')
  // 获取当前登录时间
  const getnowTime = () => {
    const date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    if (month < 10) {
      month = ('0' + month) as any
    }
    if (day < 10) {
      day = ('0' + day) as any
    }
    return year + '-' + month + '-' + day
  }
  window.sessionStorage.setItem('nowTime', getnowTime())
  window.sessionStorage.removeItem('path')
  window.sessionStorage.setItem('user_name', loginUserParams.user_name)
  store.changPath()
}
// 注册
const registerClick = async () => {
  await UserService.register(registerUserParams)
  registerUserParams.user_name = ''
  registerUserParams.password = ''
}

</script>

<template>
  <div class="login-wrap">
    <div class="login-html">
      <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
      <label for="tab-1" class="tab">登录</label>
      <input id="tab-2" type="radio" name="tab" class="sign-up" />
      <label for="tab-2" class="tab">注册</label>
      <div class="login-form">
        <div class="sign-in-htm">
          <div class="group">
            <label for="user" class="label">用户名</label>
            <el-input v-model="loginUserParams.user_name" placeholder="请输入用户名" />
          </div>
          <div class="group">
            <label for="pass" class="label">密码</label>
            <el-input
              type="password"
              v-model="loginUserParams.password"
              show-password
              placeholder="请输入密码"
            />
          </div>
          <div class="group">
            <label for="check" style="color:#fff">登录表示您已同意《服务条款》</label>
          </div>
          <div class="group">
            <input type="submit" class="button" value="登录" @click="loginClick" />
          </div>
          <div class="hr"></div>
        </div>
        <div class="sign-up-htm">
          <div class="group">
            <label for="user" class="label">用户名</label>
            <el-input v-model="registerUserParams.user_name" placeholder="请输入用户名" />
          </div>
          <div class="group">
            <label for="pass" class="label">密码</label>
            <el-input
              type="password"
              v-model="registerUserParams.password"
              show-password
              placeholder="请输入密码"
            />
          </div>
          <div class="group">
            <label for="check" style="color:#fff">注册表示您已同意《服务条款》</label>
          </div>
          <div class="group">
            <input type="submit" class="button" value="注册(非管理员)" @click="registerClick" />
          </div>
          <div class="hr"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
*,
:after,
:before {
  box-sizing: border-box !important;
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  display: block;
}
a {
  color: inherit !important;
  text-decoration: none !important;
}

.login-wrap {
  position: relative;
  top: 10%;
  width: 100%;
  margin: auto;
  max-width: 525px;
  min-height: 600px;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.login-html {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 90px 70px 50px 70px;
  box-shadow: 0 21px 41px 0 rgb(0 0 0 / 20%);
  background: rgba(40, 57, 101, 0.9);
}
.login-html .sign-in-htm,
.login-html .sign-up-htm {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: all 0.4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check {
  display: none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button {
  text-transform: uppercase;
  margin-bottom: 20px;
  cursor: pointer;
}
.login-html .tab {
  font-size: 22px;
  margin-right: 15px;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab {
  color: #fff;
  border-color: #1161ee;
}
.login-form {
  min-height: 345px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}
.login-form .group {
  margin-bottom: 15px;
}
.login-form .group .label,
.login-form .group .button {
  width: 100%;
  color: #fff;
  display: block;
}
.login-form .group .button {
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
}
.login-form .group .label {
  color: #aaa;
  font-size: 12px;
}
.login-form .group .button {
  background: #1161ee;
}
.login-form .group label .icon {
  width: 15px;
  height: 15px;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after {
  content: "";
  width: 10px;
  height: 2px;
  background: #fff;
  position: absolute;
  transition: all 0.2s ease-in-out 0s;
}
.login-form .group label .icon:before {
  left: 3px;
  width: 5px;
  bottom: 6px;
  transform: scale(0) rotate(0);
}
.login-form .group label .icon:after {
  top: 6px;
  right: 0;
  transform: scale(0) rotate(0);
}
.login-form .group .check:checked + label {
  color: #fff;
}
.login-form .group .check:checked + label .icon {
  background: #1161ee;
}
.login-form .group .check:checked + label .icon:before {
  transform: scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after {
  transform: scale(1) rotate(-45deg);
}
.login-html
  .sign-in:checked
  + .tab
  + .sign-up
  + .tab
  + .login-form
  .sign-in-htm {
  transform: rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm {
  transform: rotate(0);
}

.hr {
  height: 2px;
  margin: 60px 0 50px 0;
  background: rgba(255, 255, 255, 0.2);
}
.foot-lnk {
  text-align: center;
}
</style>
