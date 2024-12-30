import axios from 'axios'
import { ResCodeEnum } from './enum'
import { getToken } from '../storage/user'
import { ElMessage } from 'element-plus'
import router from '@/router' //只能在setup里用useRouter
import { debounce } from '../util'

// 创建axios
const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 20_000,
  headers: {
    'Content-Security-Policy': 'upgrade-insecure-requests'
  }
})

// 请求拦截器
http.interceptors.request.use(
  config => {
    config.headers.token = getToken()

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  res => {
    if (res.status === 200) {
      if (res.data.code === ResCodeEnum.SUCCESS) {
        return res.data.data
      }
      if (res.data.code === ResCodeEnum.AUTH_NULL || res.data.code === ResCodeEnum.AUTH_EXPIRE) {
        debounceBackLogin()
      } else {
        ElMessage.error(res.data.msg)
      }
      return Promise.reject(res)
    }
    return Promise.reject(res)
  },
  err => {
    return Promise.reject(err)
  }
)

const backLogin = () => {
  ElMessage.error('请登录')
  router.push({ path: '/login' })
}
const debounceBackLogin = debounce(backLogin)

export default http
