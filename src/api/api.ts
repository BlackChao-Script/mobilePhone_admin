import { request } from '@/utils/axois'

// 用户接口
export class UserService {
  // 注册
  static async register(params: object) {
    return request('user/register', params, 'POST')
  }
  // 登录
  static async login(params: object) {
    return request('user/login', params, 'POST')
  }
  // 修改密码
  static async modify(params: object) {
    return request('user/modify', params, 'PATCH')
  }
  // 获取用户数量
  static async userNumber(params: object) {
    return request('/user', params, 'GET')
  }
}
// 商品接口
export class GoodsService {
  // 获取商品数量
  static async goodsNum(params: object) {
    return request('/goods/getnumber', params, 'GET')
  }
}
