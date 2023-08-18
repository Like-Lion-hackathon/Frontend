import { createProxyMiddleware } from 'http-proxy-middleware'

export default function (app) {
    app.use(
        '/login','/login2','/PostUrl','/postData',
        createProxyMiddleware({
            target: "http://43.200.8.72",
            changeOrigin: true,

        })
    )
};