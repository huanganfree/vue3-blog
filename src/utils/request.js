import axios from "axios";
// 原因是，在vue3中第一种useRouter的引入方式是vue3的hooks，因此在js文件中需要导入你创建的router文件即可
import {router} from '@/router/index.js'
import { Notify } from 'vant';

// 这里就是提供了实例的默认值，可以在具体请求方法中覆写
const service = axios.create({
  baseURL: process.env.VUE_APP_REQUEST_BASEURL,
  timeout: 10000,
  withCredentials: true // 携带凭证
})

// 请求拦截器：用于添加token
// 请求发出前拦截， return的目的是给then，或者catch使用的
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 响应拦截器：判断登录状态是否失效
// 添加响应拦截器, 响应返回的res是浏览器给的
service.interceptors.response.use(function (response) {
  const res = response.data
  if (res.code === 401) {
    router.push('/login') // 统一处理退回登录
  }
  return res; // 给具体页面提示
}, function (error) {
  if (error.response.status == 401) {
    Notify({ type: 'danger', message: '登录状态已失效，请重新登录' });
    router.push('/login') // 统一处理退回登录
    return
  }
  return Promise.reject(error);
});

export default service