export default function ({ store, redirect, req, router, app: { $axios } }) {
  // 设置请求路径头
  $axios.defaults.baseURL = 'http:127.0.0.1:1337/'
}
