const path = require('path');
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
    },
    configureWebpack: {
        resolve: {
            alias: {
                components: path.resolve(__dirname,'src/components'),
            }
        }
    }
}