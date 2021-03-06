import { request } from '@/utils/axois'

//! 用户接口
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
//! todo接口
export class TodoService {
  // 添加todo
  static async add(params: object) {
    return request('todo/addtodo', params, 'POST')
  }
  // 获取todo列表
  static async get(params: object) {
    return request('todo', params, 'GET')
  }
  // 删除todo
  static async del(id: number, params: object) {
    return request(`todo/${id}`, params, 'DELETE')
  }
  // 选中
  static async check(id: number, params: object) {
    return request(`todo/check/${id}`, params, 'POST')
  }
  // 取消选中
  static async uncheck(id: number, params: object) {
    return request(`todo/uncheck/${id}`, params, 'POST')
  }
}
//! 商品接口
export class GoodsService {
  // 获取商品数量
  static async num(params: object) {
    return request('goods/getnumber', params, 'GET')
  }
  // 添加商品
  static async add(params: object) {
    return request('goods/creategoods', params, 'POST')
  }
  // 更新商品
  static async update(id: number, params: object) {
    return request(`goods/creategoods/${id}`, params, 'PUT')
  }
  // 下架商品
  static async off(id: number, params: object) {
    return request(`goods/goodsoff/${id}`, params, 'POST')
  }
  // 上架商品
  static async on(id: number, params: object) {
    return request(`goods/goodson/${id}`, params, 'POST')
  }
  // 获取商品列表
  static async get(params: object) {
    return request('goods', params, 'GET')
  }
}
//! 分类接口
export class SortService {
  // 获取分类列表
  static async get(params: object) {
    return request('sort/getsort', params, 'GET')
  }
  // 修改分类
  static async update(id: number, params: object) {
    return request(`sort/${id}`, params, 'PUT')
  }
  // 获取分类详细
  static async getData(params: object) {
    return request('sort/getsortdata', params, 'GET')
  }
  // 添加分类
  static async add(param: object) {
    return request('sort/addsort', param, 'POST')
  }
  // 删除分类
  static async rem(id: number, params: object) {
    return request(`sort/${id}`, params, 'DELETE')
  }
}
//! 轮播图接口
export class CarouselService {
  // 创建轮播图
  static async create(params: object) {
    return request('carousel/create', params, 'POST')
  }
  // 获取轮播图列表
  static async get(params: object) {
    return request('carousel', params, 'GET')
  }
  // 修改轮播图
  static async update(id: number, params: object) {
    return request(`/carousel/create/${id}`, params, 'PUT')
  }
  // 删除轮播图
  static async rem(id: number, params: object) {
    return request(`carousel/delcarouse/${id}`, params, 'DELETE')
  }
}
//! 地址接口
export class AddressService {
  // 添加地址
  static async add(params: object) {
    return request('address/addtoaddress', params, 'POST')
  }
  // 获取地址列表
  static async get(params: object) {
    return request('address/admin', params, 'GET')
  }
  // 修改地址
  static async update(id: number, params: object) {
    return request(`address/${id}`, params, 'PUT')
  }
  // 删除地址
  static async rem(id: number, params: object) {
    return request(`address/${id}`, params, 'DELETE')
  }
}
//! 订单接口
export class OrderService {
  // 获取订单数量
  static async num(params: object) {
    return request('order/ordernum', params, 'GET')
  }
  // 获取订单列表
  static async get(params: object) {
    return request('order', params, 'GET')
  }
  // 更新订单状态
  static async update(id: number, params: object) {
    return request(`order/${id}`, params, 'PATCH')
  }
}
