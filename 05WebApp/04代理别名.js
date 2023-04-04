const Koa = require("koa");
// 创建app实例
const app = new Koa();

const main = async (ctx, next) => {
  ctx.request; // 原始的请求对象
  ctx.url; // 原始的请求对象

  // 创建request代理别名
  Object.defineProperty(ctx, "requests", {
    get() {
      return ctx.request.method;
    },
  });
  console.log(ctx.requests);
};

// 挂载函数到app实例上
app.use(main);

// 监听端口
app.listen(3000, () => {
  console.log("启动成功~");
});
