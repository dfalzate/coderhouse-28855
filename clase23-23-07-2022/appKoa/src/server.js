import koa from "koa";
import dotenv from "dotenv";
import KoaBody from "koa-body";
import BookRoute from "./routes/book.route.js";
dotenv.config();

const app = new koa();
app.use(KoaBody());

// app.get("/", () => {
//   console.log("Hello Koa");
// });

app.use(BookRoute.routes());

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
