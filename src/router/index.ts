import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Home = () => import('@/views/home.vue')
const Login = () => import('@/views/login.vue')
const Dashboard = () => import('@/views/dashboard.vue')
const Goods = () => import('@/views/goods.vue')
const Sort = () => import('@/views/sort.vue')
const Carousel = () => import('@/views/carousel.vue')
const Address = () => import('@/views/address.vue')
const Order = () => import('@/views/order.vue')

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
    redirect: '/home/dashboard',
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        meta: {
          KeepAlive: true,
          comp: Dashboard,
          name: '系统主页',
        },
      },
      {
        path: 'goods',
        component: Goods,
        meta: {
          KeepAlive: true,
          comp: Goods,
          name: '商品管理',
        },
      },
      {
        path: 'sort',
        component: Sort,
        meta: {
          KeepAlive: true,
          comp: Sort,
          name: '分类管理',
        },
      },
      {
        path: 'carousel',
        component: Carousel,
        meta: {
          KeepAlive: true,
          comp: Carousel,
          name: '轮播图管理',
        },
      },
      {
        path: 'address',
        component: Address,
        meta: {
          KeepAlive: true,
          comp: Address,
          name: '地址管理',
        },
      },
      {
        path: 'order',
        component: Order,
        meta: {
          KeepAlive: true,
          comp: Order,
          name: '订单管理',
        },
      },
    ],
  },
]
// 工厂函数创建router实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// 路由导航守卫
router.beforeEach((to, from, next) => {
  const islogin = window.sessionStorage.getItem('token') ? true : false
  if (to.path == '/login') {
    next()
  } else {
    islogin ? next() : next('/')
  }
})

export default router
