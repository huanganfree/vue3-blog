import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'

const _import = router => () => import(`@/views/${router}.vue`) // 路由懒加载
const tabBarData = [ // 用于tarBar组件的数组，统一数据源
  // { 
  //   path: '/main/home',
  //   name: 'home',
  //   meta: {
  //     title: '首页',
  //     icon: 'icon-shouye', // 存储路由icon
  //   },
  //   component: _import('home/home')
  // },
  // {
  //   path: '/main/photo',
  //   name: 'photo',
  //   meta: {
  //     title: '相册',
  //     icon: 'icon-xiangce',
  //   },
  //   component: _import('photo/photo')
  // },
  {
    path: '/main/me',
    name: 'me',
    meta: {
      title: '我的',
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
      ...tabBarData,
      {
        path: '/about',
        name: 'about',
        component: _import('about/about'),
        meta: {
          title: '关于'
        }
      },
      {
        path: '/userInfo',
        name: 'userInfo',
        component: _import('userInfo/userInfo'),
        meta: {
          title: '用户信息修改'
        }
      },
      {
        path: '/resetPassword',
        name: 'resetPassword',
        component: _import('resetPassword/resetPassword'),
        meta: {
          title: '重置密码'
        }
      }
    ]
  },
  {
    path: '/',
    redirect: '/login'
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

export { router, tabBarData as routes }
