module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: [],
      },
    },
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: false,
    },
  },
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
          target: "http://127.0.0.1:3000",
          changeOrigin: true,
        },
      },
      // before(app) {
      //   app.get("/api/login", (req, res) => {
      //     const { user, password } = req.query;
      //     if (user == "123" && password == "123") {
      //       res.json({ code: 1, token: "123456" });
      //     } else {
      //       res.status(401).json({ code: 0, message: "用户名或者密码错误" });
      //     }
      //   });
      //   //保护接口中间件
      //   function auth(req, res, next) {
      //     if (req.headers.token) {
      //       next();
      //     } else {
      //       res.sendStatus(401);
      //     }
      //   }
      //   app.get("/api/userInfo", auth, (req, res) => {
      //     console.log(req.query);
      //     res.json({ code: 1, data: { name: "tom", age: "26" } });
      //   });
      // },
    },
  },
};
