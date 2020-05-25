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
      // proxy: {
      //   "/api": {
      //     target: "http://127.0.0.1:3000",
      //     changeOrigin: true,
      //   },
      // },
      before(app) {
        app.get("/api/login", (req, res) => {
          const { user, password } = req.query;
          if (user == "123" && password == "123") {
            res.json({ code: 1, token: "123456" });
          } else {
            res.status(401).json({ code: 0, message: "用户名或者密码错误" });
          }
        });
        //保护接口中间件
        function auth(req, res, next) {
          if (req.headers.token) {
            next();
          } else {
            res.sendStatus(401);
          }
        }
        app.get("/api/userinfo", auth, (req, res) => {
          console.log(req.query);
          res.json({ code: 1, data: { name: "tom", age: "26" } });
        });
        app.get("/api/goods", (req, res) => {
          res.json({
            code: 1,
            slider: [
              {
                id: 21,
                img: "/imgs/01.jpg",
              },
              {
                id: 22,
                img: "/imgs/02.jpg",
              },
              {
                id: 23,
                img: "/imgs/03.jpg",
              },
              {
                id: 24,
                img: "/imgs/04.jpg",
              },
            ],
            data: {
              fe: [
                {
                  id: 1,
                  title: "fe1",
                  price: 100,
                  img: "/imgs/01.jpg",
                  count: 100,
                },
                {
                  id: 2,
                  title: "fe2",
                  price: 100,
                  img: "/imgs/01.jpg",
                  count: 100,
                },
              ],
              python: [
                {
                  id: 3,
                  title: "python1",
                  price: 100,
                  img: "/imgs/02.jpg",
                  count: 100,
                },
                {
                  id: 4,
                  title: "python2",
                  price: 100,
                  img: "/imgs/02.jpg",
                  count: 100,
                },
              ],
              java: [
                {
                  id: 5,
                  title: "java1",
                  price: 100,
                  img: "/imgs/03.jpg",
                  count: 100,
                },
                {
                  id: 6,
                  title: "java2",
                  price: 100,
                  img: "/imgs/03.jpg",
                  count: 100,
                },
              ],
              bigdata: [
                {
                  id: 7,
                  title: "bigdata1",
                  price: 100,
                  img: "/imgs/04.jpg",
                  count: 100,
                },
                {
                  id: 8,
                  title: "bigdata2",
                  price: 100,
                  img: "/imgs/04.jpg",
                  count: 100,
                },
              ],
              ai: [
                {
                  id: 9,
                  title: "ai1",
                  price: 100,
                  img: "/imgs/01.jpg",
                  count: 100,
                },
                {
                  id: 10,
                  title: "ai2",
                  price: 100,
                  img: "/imgs/01.jpg",
                  count: 100,
                },
              ],
            },
            keys: ["fe", "python", "java", "bigdata", "ai"],
          });
        });
      },
    },
  },
};
