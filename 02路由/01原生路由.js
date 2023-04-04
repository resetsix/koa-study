const Koa = require("koa");
// 创建app实例
const app = new Koa();

const main = (ctx) => {
  if (ctx.request.path !== "/") {
    ctx.type = "html";
    ctx.body = '<a href="/">index page</a>';
  } else {
    ctx.body = "hello Koa";
  }
};

// 挂载函数到app实例上
app.use(main);

// 监听端口
app.listen(3000, () => {
  console.log("启动成功~");
});
