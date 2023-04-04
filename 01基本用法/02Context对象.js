const Koa = require("koa");
const app = new Koa();

const judgeMethod = (ctx) => {
  ctx.response.body = "hello Koa";
  console.log(ctx.method);
  console.log(ctx.url);
  console.log(ctx.status);
};

// 挂载函数到app上
app.use(judgeMethod);

app.listen(3000, () => {
  console.log("启动成功~");
});
