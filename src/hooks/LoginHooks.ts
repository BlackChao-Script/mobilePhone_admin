import { UserService } from '@/api/api'
import { UserParamsType } from '@/types/login'
import { useRouter } from 'vue-router'
const LoginHooks = () => {
  const router = useRouter()
  // 登录数据
  const loginUserParams = reactive<UserParamsType>({
    user_name: 'admin',
    password: '123456',
  })
  // 注册数据
  const registerUserParams = reactive<UserParamsType>({
    user_name: '',
    password: '',
  })
  // 登录
  const loginClick = async () => {
    const res = (await UserService.login(loginUserParams)) as any
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
  }
  // 注册
  const registerClick = async () => {
    await UserService.register(registerUserParams)
    registerUserParams.user_name = ''
    registerUserParams.password = ''
  }
  return {
    loginUserParams,
    registerUserParams,
    loginClick,
    registerClick,
  }
}

export default LoginHooks
