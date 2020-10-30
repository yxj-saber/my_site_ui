import request from './request'

export default class Req {
  constructor(options = {}) {
    const { baseURL, ...config } = options
    this.config = config
    this.baseURL = baseURL || '/'
    this.$request = request
  }

  pathJoin = (...paths) => {
    let path = ''
    for (let i = 0; i < paths.length; i += 1) {
      const segment = paths[i]
      if (segment) {
        path += path ? `/${segment}` : segment
      }
    }
    const newPath = path.split('/').filter(p => p).join('/')
    return `/${newPath}/`
  }

  // 用于封装同一接口的 GET 请求
  get = (url, params = {}) => {
    const thisURL = this.pathJoin(this.baseURL, url)
    return this.$request.get(thisURL, { params })
  }

  // 用于封装同一接口的 POST 请求
  post = (url, payload) => {
    const thisURL = this.pathJoin(this.baseURL, url)
    return this.$request.post(thisURL, payload)
  }

  // 用于封装同一接口的 PATCH 请求
  patch = (url, payload) => {
    const thisURL = this.pathJoin(this.baseURL, url)
    return this.$request.patch(thisURL, payload)
  }

  // 用于封装同一接口的 PUT 请求
  put = (url, payload) => {
    const thisURL = this.pathJoin(this.baseURL, url)
    return this.$request.put(thisURL, payload)
  }

  // 用于封装同一接口的 DELETE 请求
  delete = (url, ...options) => {
    const thisURL = this.pathJoin(this.baseURL, url)
    return this.$request.delete(thisURL, ...options)
  }
}
