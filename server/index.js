const Koa = require("koa");
const Router = require("@koa/router")
const serve = require("koa-static");
const path = require("path");

const PORT = process.env.PORT || 8080;

// usually "app" is used here but I like "server" more
const server = new Koa();
const router = new Router();

router.get("/", (ctx) => ctx.body = "Oh, hi there.");
router.get("/test", (ctx) => {
  ctx.body = {message: "Hello, you have passed the test."}
})

server.use(serve(path.resolve(__dirname, '../client/dist')));
// server.use(serve('dist'));

server.use(router.routes());

// console.log('---PROC ENV', process.env);

console.log("==========================");
console.log(process.env.PORT, process.env.NODE_ENV);
console.log("==========================");

server.listen(PORT, () => {
  console.log("Koa server is running on port", PORT);
});
