const Koa = require("koa");
const route = require("koa-route");
// 创建app实例
const app = new Koa();

const about = (ctx) => {
  ctx.type = "html";
  ctx.body = '<a href= "/">index page</a>';
};

const main = (ctx) => {
  ctx.body = "hello Koa";
};

// 挂载路由到app实例上
app.use(route("/", main));
app.use(route("/foo", about));

// 监听端口
app.listen(3000, () => {
  console.log("启动成功~");
});
