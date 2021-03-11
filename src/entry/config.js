
// 配置-生产环境
const config = {
  apiUrl: '.'
}

// 不同环境配置
const env = {
  // 开发环境
  development: {
    apiUrl: './api'
  },
  // 测试环境
  test: {

  }
}

Object.assign(config, env[process.env.NODE_ENV])


export default config

