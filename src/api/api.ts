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
  static async num(params: object) {
    return request('user', params, 'GET')
  }
}
// 商品接口
export class GoodsService {
  // 获取商品数量
  static async num(params: object) {
    return request('goods/getnumber', params, 'GET')
  }
}
// 订单接口
export class OrderService {
  // 获取订单数量
  static async num(params: object) {
    return request('order/ordernum', params, 'GET')
  }
}
// todo接口
export class TodoService {
  // 添加todo
  static async add(params: object) {
    return request('/todo/addtodo', params, 'POST')
  }
  // 获取todo列表
  static async get(params: object) {
    return request('/todo', params, 'GET')
  }
  // 删除todo
  static async del(id: number, params: object) {
    return request(`/todo/${id}`, params, 'DELETE')
  }
  // 选中
  static async check(id: number, params: object) {
    return request(`/todo/check/${id}`, params, 'POST')
  }
  // 取消选中
  static async uncheck(id: number, params: object) {
    return request(`/todo/uncheck/${id}`, params, 'POST')
  }
}
