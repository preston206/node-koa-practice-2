const Koa = require("koa");
const Router = require("@koa/router")
const serve = require("koa-static");
// const path = require("path");

const PORT = process.env.PORT || 5500;

// usually "app" is used here but I like "server" more
const server = new Koa();
const router = new Router();

router.get("/", (ctx) => ctx.body = "Oh, hi there.");
router.get("/test", (ctx) => {
  ctx.body = {message: "Hello, you have passed the test."}
})

// server.use(serve(path.resolve(__dirname, '../client/dist')));
server.use(serve('dist'));

server.use(router.routes());

// console.log('---PROC ENV', process.env);

server.listen(PORT, () => {
  console.log("Koa server is running on port", PORT);
});
