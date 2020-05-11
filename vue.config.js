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
      before(app) {
        app.get("/api/login", (res, req) => {
          console.log(req)
          const { user, password } = req.query;
          console.log(user, password);
          if (user == "123" && password == "123") {
            res.json({ code: 1, token: "123456" });
          } else {
            res.status(401).json({ code: 0, message: "用户名或者密码错误" });
          }
        });
      },
    },
  },
};
