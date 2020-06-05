// import _ from "lodash";
const _ = require("lodash");
const Koa = require("koa");

const app = new Koa();

const sss = _.last(["1", "2", "213"]);
app.use(async (ctx) => {
  ctx.body = sss;
});

app.listen(3000);
