const Koa = require("koa");
const route = require("koa-route");
// 创建app实例
const app = new Koa();

const redirect = (ctx) => {
  ctx.type = "html";
  ctx.redirect("/");
  ctx.body = '<a href="/">index page</a>';
};

// 挂载函数到app实例上
app.use(route.get("/redirect", redirect));

// 监听端口
app.listen(3000, () => {
  console.log("启动成功~");
});
