import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'

const _import = router => () => import(`@/views/${router}.vue`) // 路由懒加载
const tabBarRoutes = [
  { 
    path: '/main/home',
    name: '首页',
    meta: {
      icon: 'icon-shouye', // 存储路由icon
    },
    component: _import('home/home')
  },
  {
    path: '/main/photo',
    name: '相册',
    meta: {
      icon: 'icon-xiangce',
    },
    component: _import('photo/photo')
  },
  {
    path: '/main/me',
    name: '我的',
    meta: {
      icon: 'icon-gerenzhongxin',
    },
    component: _import('me/me')
  }
]

const routes = [
  {
    path: '/login',
    name: 'login_self',
    component: _import('login/login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/main',
    component: MainPage,
    children: [
      ...tabBarRoutes
    ]
  },
  {
    path: '/',
    redirect: '/login', // 避免单词写错
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    meta: {
      title: '404'
    },
    component: _import('errorPage/error404')
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
  sensitive: true
})

export { router, tabBarRoutes as routes }
