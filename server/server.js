// const koa = require("koa");
// const Router = require("koa-router");
// //生成令牌、验证令牌
// const jwt = require("jsonwebtoken");
// const jwtAuth = require("koa-jwt");

// const secret = "it's a secret";

// const app = new koa();
// const router = new Router();
// router.get("/api/login", async (ctx) => {
//   const { user, password } = ctx.query;
//   console.log(user, password);
//   if (user == "123" && password == "123") {
//     // 生成令牌
//     const token = jwt.sign(
//       {
//         data: { name: "tom" },
//         exp: Math.floor(Date.now() / 1000) + 60 * 60,
//       },
//       secret
//     );
//     ctx.body = { code: 1, token };
//   } else {
//     ctx.status = 401;
//     ctx.body = { code: 0, message: "用户名或者密码错误" };
//   }
// });

// router.get("/api/userinfo", jwtAuth({ secret }), async (ctx) => {
//   ctx.body = { code: 1, data: { name: "tom", age: "26" } };
// });
// app.use(router.routes());
// app.listen(3000);
