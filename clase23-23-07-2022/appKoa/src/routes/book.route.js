import Router from "koa-router";

const router = new Router({
  prefix: "/books",
});

const books = [
  {
    name: "Name1",
    price: 1,
    category: "Category1",
    author: "Author1",
  },
];

router.get("/", (ctx, next) => {
  ctx.body = books;
  next();
});

router.get("/:id", (ctx, next) => {
  const { id } = ctx.params;
  //....

  next();
});

router.post("/", (ctx, next) => {
  const book = ctx.request.body;
  books.push(book);
  ctx.body = book;
  next();
});

export default router;
