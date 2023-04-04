const Koa = require("koa");
const fs = require("fs.promised");
// 创建app实例
const app = new Koa();

const asyncMain = async (ctx, next) => {
  ctx.type = "html";
  ctx.body = await fs.readFile("../01基本用法/index.html");
};

// 挂载函数到app实例上
app.use(asyncMain);

// 监听端口
app.listen(3000, () => {
  console.log("启动成功~");
});
