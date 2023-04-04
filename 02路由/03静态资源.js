const Koa = require("koa");
const path = require("path");
const server = require("koa-static");
// 创建app实例
const app = new Koa();

const main = server(path.join(__dirname));

// 挂载函数到app实例上
app.use(main);

// 监听端口
app.listen(3000, () => {
  console.log("启动成功~");
});
