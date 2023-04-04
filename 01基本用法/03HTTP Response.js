const Koa = require("koa");
const app = new Koa();

const res = (ctx) => {
  if (ctx.request.accepts("xml")) {
    ctx.type = "xml";
    ctx.body = "<data>我是xml类型响应体</data>";
  } else if (ctx.request.accepts("html")) {
    ctx.type = "html";
    ctx.body = "<p>我是html类型响应体</p>";
  } else if (ctx.request.accepts("json")) {
    ctx.type = "json";
    ctx.body = '{ data: "我是json类型响应体" }';
  } else {
    ctx.type = "text";
    ctx.body = "我是text类型响应体";
  }
};

// 挂载函数到app上
app.use(res);

app.listen(3000, () => {
  console.log("启动成功~");
});
