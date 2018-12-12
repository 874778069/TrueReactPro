const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'http://localhost:5000',
        pathRewrite: {'^/api': ''},
        changeOrigin: true
    }));
    app.use(proxy('/163', {
        target: 'http://m.you.163.com',
        pathRewrite: {'^/163': ''},
        changeOrigin: true
    }))
};
