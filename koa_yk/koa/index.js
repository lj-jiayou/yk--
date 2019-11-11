#! /usr/bin/env node
const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
    ctx.body = "你好，李江";
    console.log("月考练习-back");
});
app.listen(3000);
