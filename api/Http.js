import axios from 'axios'

const BASE_URL = '/'
// const BASE_URL = 'http://192.168.1.171:81'
/**
 * axios 初始值
 * 使用webpack代理，一般baseURL为空
 * @type {AxiosInstance}
 */
const Http = axios.create({
  timeout: 10000,
  baseURL: BASE_URL
})

/**
 * 请求前设置
 * 1，判断token
 */
Http.interceptors.request.use(
  config => {
    // 过滤不使用token的接口
    const isLogin = [
      '/login',
      '/signin'
    ].some(v => config.url.includes(v))
    // 获取本地缓存token
    const token = uni.getStorageSync('accessToken')
    // 判断是否返回登录页
    if (!isLogin) {
      if (!token) {
        uni.clearStorageSync()
        this.$u.route({url: `/pages/index/index`})
      }
      // 设置 头部token
      config.headers.Authorization = token
    }
    return config
  },
  error => {
    return error
  })

/**
 * 请求后返回结果设置
 * @config 返回数据
 */
Http.interceptors.response.use(
  config => {
    // 没有code码接口
    if ([
      '/login',
      '/QuestionStatistics',
    ].some(v => config.config.url.includes(v))) {
      return config
    }
    if (config.data.code && config.data.code !== '200') {
      this.$u.toast(config.data.msg)
      return config
    }
    return config
  },
  error => {
    if (JSON.stringify(error).includes('403')) {
      error.config.url.indexOf('signin') <= -1 ? this.$u.toast('登录过期，请重新登录') : this.$u.toast('用户名或密码错误')
      uni.clearStorageSync()
      this.$u.route({url: `/pages/index/index`})
    }
    return error
  })

export default Http
