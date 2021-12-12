import { createRouter, createWebHashHistory } from 'vue-router'

const _import = router => () => import(`@/views/${router}.vue`) // 路由懒加载



const routes = [
  {
    path: '/home',
    name: '首页',
    meta:{
      icon: 'icon-shouye', // 存储路由icon
    },
    component: _import('home/home')
  },
  {
    path: '/photo',
    name: '相册',
    meta:{
      icon: 'icon-xiangce',
    },
    component: _import('photo/photo')
  },
  {
    path: '/me',
    name: '我的',
    meta:{
      icon: 'icon-gerenzhongxin',
    },
    component: _import('me/me')
  }
]

const allRoutes = [
  {
    path: '/',
    redirct: '/login',
    name: '登录',
    component: _import('login/login')
  },
  ...routes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes
})

export { router, routes }
  