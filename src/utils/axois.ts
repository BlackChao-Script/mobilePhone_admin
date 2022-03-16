import axios from 'axios'
import { showMessage } from '@/api/status'
import { ElNotification } from 'element-plus'

axios.defaults.timeout = 6000

axios.defaults.baseURL = '/api'

axios.interceptors.request.use(
  (config) => {
    // 配置请求头
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: window.sessionStorage.getItem('token') as string,
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const { response } = error
    if (response) {
      showMessage(response.status)
      return Promise.reject(response.data)
    } else {
      console.log('网络连接异常，请稍后再试！')
    }
  }
)

export function request(url = '', params = {}, type = '') {
  return new Promise((resolve, reject) => {
    let promise: any
    if (type.toUpperCase() === 'GET') {
      promise = axios({
        url,
        params,
      })
    } else if (type.toUpperCase() === 'POST') {
      promise = axios({
        method: 'POST',
        url,
        data: params,
      })
    } else if (type.toUpperCase() === 'PUT') {
      promise = axios({
        method: 'PUT',
        url,
        data: params,
      })
    } else if (type.toUpperCase() === 'DELETE') {
      promise = axios({
        method: 'DELETE',
        url,
      })
    } else if (type.toUpperCase() === 'PATCH') {
      promise = axios({
        method: 'PATCH',
        url,
        data: params,
      })
    }
    // 处理返回
    promise
      .then((res: any) => {
        if (res.message !== '') {
          ElNotification({
            title: '成功',
            message: res.message,
            type: 'success',
          })
        }
        resolve(res)
      })
      .catch((err: any) => {
        ElNotification({
          title: '失败',
          message: err.message,
          type: 'error',
        })
        reject(err)
      })
  })
}
