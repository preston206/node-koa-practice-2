require("dotenv").config();
const Koa = require("koa");
const Router = require("@koa/router")
const serve = require("koa-static");
const { koaBody } = require('koa-body');
const path = require("path");
const { MongoClient, ObjectId } = require("mongodb");

// connect to DB
const url = process.env.DATABASE_URL;
const client = new MongoClient(url);
const dbName = process.env.DATABASE_NAME;

// async function connectToDb() {
//   // Use connect method to connect to the server
//   const clientResponse = await client.connect();
//   console.log('---CLIENT RESPO', clientResponse);
//   console.log('Connected successfully to the database server');

//   const db = client.db(dbName);
//   const collection = db.collection('Documents');

//   console.log('---DB', db);
//   console.log('---COLL', collection);

//   return 'done.';
// }

// connectToDb()
//   .then(data => console.log("---DB CONNECT DATA", data))
//   .catch(error => console.error("---DB CONNECT ERROR:", error))
//   .finally(() => client.close());

let database;

client.connect()
  .then(conn => {
    console.log('---connected to the database server');
    // console.log('---CONNECTION', conn);
    return conn.db(dbName).collection('TestCollection');
  })
  .then(db => {
    console.log('---connected to the database')
    database = db;
  })
  .catch(error => console.log('---CONN ERROR', error))
// .finally(() => client.close());

const PORT = process.env.PORT || 8080;

// usually "app" is used here but I like "server" more
const server = new Koa();
const router = new Router();

// router.get("/", (ctx) => ctx.body = "Oh, hi there.");

server.use(koaBody());

router
  .get("/", (ctx) => ctx.body = serve(path.resolve(__dirname, 'client', 'dist', 'index.html')))
  // .get("/api/test", async (ctx) => {
  //   let doc;
  //   try {
  //     doc = await database.findOne({ "name": "Chicken and Waffles Test" });
  //   }
  //   catch (error) {
  //     console.log('---MONGO DB FIND ERROR 1', error);
  //   }

  //   // console.log('---DOC', doc);
  //   ctx.status = 200;
  //   ctx.body = doc;
  //   // next();
  // })
  // .get("/api/dishByName/:name", async (ctx) => {

  //   // console.log('---GET BY NAME CTX REQ', ctx.params);

  //   console.log('---GET CTX REQ PARAMS', ctx.params.name);

  //   let doc;
  //   try {
  //     doc = await database.findOne({ "name": ctx.params.name });
  //   }
  //   catch (error) {
  //     console.log('---MONGO DB FIND ERROR 2', error);
  //   }

  //   // console.log('---DOC', doc);
  //   // ctx.body = doc;
  //   ctx.status = 200;
  //   ctx.body = doc;
  //   // next();
  // })
  // .get("/api/dishById/:id", async (ctx) => {

  //   // console.log('---GET BY NAME CTX REQ', ctx.params);

  //   console.log('---GET CTX REQ PARAMS ID', ctx.params.id);

  //   let doc;
  //   try {
  //     // in Azure Cosmos shell I don't need to use "new ObjectId()"
  //     // but in node env I need to "require" it at the top and then do it like this
  //     doc = await database.findOne({ _id: new ObjectId(ctx.params.id) });
  //   }
  //   catch (error) {
  //     console.log('---MONGO DB FIND ERROR 3', error);
  //   }

  //   console.log('---GET BY ID DOC', doc);

  //   // console.log('---DOC', doc);
  //   ctx.status = 200;
  //   ctx.body = doc;
  //   // ctx.status = 200;
  // })
  // .get("/api/allPublicMainDishes/:type", async (ctx) => {

  //   // console.log('---GET BY NAME CTX REQ', ctx.params);

  //   console.log('---GET CTX REQ PARAMS TYPE', ctx.params.type);

  //   let doc;
  //   try {
  //     // in Azure Cosmos shell I don't need to use "new ObjectId()"
  //     // but in node env I need to "require" it at the top and then do it like this
  //     doc = await database.find({ "type": ctx.params.type }).toArray();
  //   }
  //   catch (error) {
  //     console.log('---MONGO DB FIND PUB MAIN DISHES ERROR', error);
  //   }

  //   console.log('---GET MAIN DISHES DOCS', doc);

  //   // console.log('---DOC', doc);
  //   // ctx.body = JSON.parse(doc);
  //   // ctx.body = JSON.stringify(doc);
  //   ctx.status = 200;
  //   ctx.body = doc;
  //   // ctx.status = 200;
  // })
  // .post("/api/dish", async (ctx) => {
  //   // console.log('---INSERT REQUEST BODY', JSON.parse(ctx.request.body));

  //   const body = JSON.parse(ctx.request.body);

  //   console.log('---POST REQ BODY', body);
  //   // console.log('---POST REQ BODY NAME', body.name);

  //   const months = [
  //     "Jan.",
  //     "Feb.",
  //     "Mar.",
  //     "Apr.",
  //     "May",
  //     "Jun.",
  //     "Jul.",
  //     "Aug.",
  //     "Sep.",
  //     "Oct.",
  //     "Nov.",
  //     "Dec."
  //   ]

  //   const date = new Date();
  //   const month = months[date.getMonth()];
  //   const day = date.getDate();
  //   const year = date.getFullYear();
  //   const dateCompiled = `${month} ${day}, ${year}`;

  //   const dish = {
  //     docType: "dish",
  //     type: body.dish_type,
  //     createdAt: dateCompiled,
  //     modifiedAt: null,
  //     isPrivate: body.is_private,
  //     authorId: body.account_id,
  //     authorName: body.account_name,
  //     name: body.dish_name,
  //     description: body.description,
  //     ingredients: body.ingredients,
  //     instructions: body.instructions,
  //     notes: body.notes
  //   }

  //   const responseObj = {
  //     error: false,
  //     error_message: null,
  //     message: "",
  //     mealId: ""
  //   }

  //   let doc;
  //   try {
  //     doc = await database.insertOne(dish);
  //   } catch (error) {
  //     console.log('---MONGO DB INSERT ERROR', error);
  //     responseObj.error = true;
  //     responseObj.error_message = error;
  //     ctx.body = responseObj;
  //     ctx.status = 400;
  //   }

  //   console.log('---POST RESPONSE FROM MONGO', doc);

  //   responseObj.mealId = doc.insertedId;
  //   responseObj.message = "Document added";
  //   ctx.status = 201;
  //   ctx.body = responseObj;
  // })
  // .post("/api/account", async (ctx) => {
  //   // console.log('---INSERT REQUEST BODY', JSON.parse(ctx.request.body));

  //   const body = JSON.parse(ctx.request.body);

  //   console.log('---POST ACCT REQ BODY', body);
  //   // console.log('---POST REQ BODY NAME', body.name);

  //   // const account = {
  //   //   docType: "account",
  //   //   type: body.type,
  //   //   isPrivate: body.isPrivate,
  //   //   authorId: body.accountId,
  //   //   authorName: body.accountName,
  //   //   name: body.name,
  //   //   description: body.description,
  //   //   ingredients: body.ingredients,
  //   //   instructions: body.instructions,
  //   //   notes: body.notes
  //   // }

  //   const responseObj = {
  //     error: false,
  //     error_message: null,
  //     message: "",
  //     mealId: ""
  //   }

  //   // let doc;
  //   // try {
  //   //   doc = await database.insertOne(dish);
  //   // } catch (error) {
  //   //   console.log('---MONGO DB INSERT ERROR', error);
  //   //   responseObj.error = true;
  //   //   responseObj.error_message = error;
  //   //   ctx.body = responseObj;
  //   //   ctx.status = 400;
  //   // }

  //   // console.log('---POST RESPONSE FROM MONGO', doc);

  //   responseObj.mealId = doc.insertedId;
  //   responseObj.message = "Account created";
  //   ctx.status = 201;
  //   ctx.body = responseObj;
  // })

// server.use(serve(path.resolve(__dirname, '../client/dist')));
// server.use(serve('dist'));

server
  .use(router.routes())
  .use(router.allowedMethods());

// console.log('---PROC ENV', process.env);

// console.log("==========================");
// console.log(process.env.PORT, process.env.NODE_ENV);
// console.log("==========================");

server.listen(PORT, () => {
  console.log("Koa server is running on port", PORT);
});
