/**
 * 接口文档
 */
const { api, resp, mock } = require('apite')

/**
 * 列表数据
 */
api.get('/list', resp.ok({
  id: 1,
  name: '姓名'
}))