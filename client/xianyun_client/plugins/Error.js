// 错误拦截模块
import { Message } from 'element-ui'
export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    // 将错误对象解构出来
    const { statusCode, message } = error.response.data
    if (statusCode === 400) {
      // 400状态码的错误
      Message.error(message)
    }

    // 判断未登录状态
    if (statusCode === 401 || statusCode === 403) {
      // 重定向到登录界面
      redirect('/user/login')
    }
  })
}
