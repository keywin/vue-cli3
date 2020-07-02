module.exports = {
	// publicPath: './',
	productionSourceMap: false,
	devServer: {
    // host: "localhost", 
    // port: '8080',
    // https: false,
		proxy: {
			// 配置跨域
			'/api': {
				//要访问的跨域的api的域名
				target: process.env.VUE_APP_BASEURL,
				ws: true,
				changOrigin: true,
				pathRewrite: {
					'^/api/': ''
				}
			}
		}
	}
}