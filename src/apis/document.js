import request from './request'
import Req from './Req'

export function patchArticle(id, payload) {
    return request.put(`/article/${id}`, payload)
}