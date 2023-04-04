const Koa = require("koa");
// 创建app实例
const app = new Koa();

const main = (ctx, next) => {
  ctx.throw(500);
};

// 挂载函数到app实例上
app.on("error", (err, ctx) => {
  console.error("server error is", err);
});
app.use(main);

// 监听端口
app.listen(3000, () => {
  console.log("启动成功~");
});
