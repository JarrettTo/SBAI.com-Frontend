const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.sportradar.com/:path*',
      },
    ];
  },
  async middleware() {
    return [
      createProxyMiddleware({
        target: 'https://api.sportradar.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      }),
    ];
  },
};
