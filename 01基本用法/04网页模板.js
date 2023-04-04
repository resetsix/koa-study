const Koa = require("koa");
const fs = require("fs");
const app = new Koa();

const main = (ctx) => {
  ctx.type = "html";
  ctx.body = fs.createReadStream("./index.html");
};

// 挂载函数到app上
app.use(main);

app.listen(3000, () => {
  console.log("启动成功~");
});
