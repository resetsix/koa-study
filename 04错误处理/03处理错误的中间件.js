const Koa = require("koa");
// 创建app实例
const app = new Koa();

const handle = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.statucCode || err.statuc || 500;
    ctx.body = {
      message: err.message,
    };
  }
};

const main = (ctx) => {
  ctx.throw(500);
};

// 挂载函数到app实例上
app.use(handle);
app.use(main);

// 监听端口
app.listen(3000, () => {
  console.log("启动成功~");
});
