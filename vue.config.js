const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}
console.log('ww', resolve('/'))
console.log('aaa', resolve('./'))
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
	// 配置路径别名
	configureWebpack: {
		devServer: {
			// 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
			disableHostCheck: true
		}
	},
	//productionSourceMap: false,
}
