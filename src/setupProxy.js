const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/jian", {
      // 完整路径:https://www.jianshu.com/asimov/subscriptions/recommended_collections
      target: "https://www.jianshu.com/asimov",
      changeOrigin: true,
      ws: true,
      pathRewrite: { "^/jian": "" },
    })
  );
  app.use(
    createProxyMiddleware("/zhi", {
      target: "https://news-at.zhihu.com/api/4",
      changeOrigin: true,
      ws: true,
      pathRewrite: { "^/zhi": "" },
    })
  );
};
