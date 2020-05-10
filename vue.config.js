module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/static': {
                target: 'https://www.imooc.com',
                changeOrigin: true,
                pathRewrite: {
                    '/static': '/static'
                }
            }
        }
    }
}