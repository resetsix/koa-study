const Koa = require("koa");
const koaBody = require("koa-body");
// 创建app实例
const app = new Koa();

// 挂载函数到app实例上
const main = async (ctx) => {
  const body = ctx.request.body;
  if (!ctx.request.body.name) ctx.throw(400, ".name required");
  ctx.body = { name: body.name };
};

// app.use(koaBody());
app.use(main);
// 监听端口
app.listen(3000, () => {
  console.log("启动成功~");
});
