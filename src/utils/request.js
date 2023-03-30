import axios from "axios";
import { Notify } from 'vant';

// 这里就是提供了实例的默认值，可以在具体请求方法中覆写
const service = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 7000
})

// 请求发出前拦截， return的目的是给then，或者catch使用的
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 添加响应拦截器, 响应返回的res是浏览器给的
service.interceptors.response.use(function (response) {
  const res = response.data
  if (res.code !== 200) {
    if (res.code === 401) {
      Notify({
        message: res.message || '登录失效，请重新登录',
        type: 'danger'
      });
      return // 必须的防止二次提示
    }
  }
  return res;
}, function (error) {
  error.response = error.response || {}
  const { status } = error.response
  const { message } = error.response.data || {}
  if (status === 401) {
    Notify({
      message: message || '登录失效，请重新登录',
      type: 'danger'
    });
  }
  return Promise.reject(error);
});

export default service