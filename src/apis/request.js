import axios from 'axios'
import { Message } from 'element-ui'
import { BACK_API, TOKEN_NAME } from '@/config'
import router from '@/router'

const request = axios.create({
  baseURL: BACK_API,
  timeout: 3 * 60 * 1000, // 3 minutes
  responseType: 'json',
})

request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { status } = error.response
    if (status >= 500) {
      Message.error(`服务器错误 ${status}`)
    } else if (error.response && error.response.status === 403) {
      Message.error('您没有权限进行此操作')
    } else if (error.response && error.response.status === 500) {
      Message.error('服务器或网络错误')
    } else if (error.code === 'ECONNABORTED') {
      Message.error('网络连接超时')
    } else if (error.response && error.response.status === 400) {
      const msg = typeof error.response.data === 'string'
        ? error.response.data
        : Object.values(error.response.data).join('；')
      Message.error(msg)
    }

    return Promise.reject(error.response)
  },
)

export default request
