const Koa = require("koa");
// 创建app实例
const app = new Koa();

const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.statucCode || err.statuc || 500;
    ctx.type = "html";
    ctx.body = "<p>报错了</p>";
    // 使用trycatch捕获错误需要释放error时间
    ctx.app.emit("error", err, ctx);
  }
};

const main = (ctx) => {
  ctx.throw(500);
};
// 挂载函数到app实例上
app.on("error is:", (err) => {
  console.log(err.message);
  console.log(err);
});

app.use(handler);
app.use(main);

// 监听端口
app.listen(3000, () => {
  console.log("启动成功~");
});
