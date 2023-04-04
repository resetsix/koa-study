const Koa = require("koa");
const compose = require("koa-compose");
// 创建app实例
const app = new Koa();

const one = (ctx, next) => {
  console.log(">>> one");
  next();
  console.log("<<< one");
};
const two = (ctx, next) => {
  console.log(">>> two");
  next();
  console.log("<<< two");
};
const three = (ctx, next) => {
  console.log(">>> three");
  next();
  console.log("<<< three");
};

// 挂载函数到app实例上
app.use(compose([one, two, three]));

// 监听端口
app.listen(3000, () => {
  console.log("启动成功~");
});
