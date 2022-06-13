import express from "express";
import path from "path";
import { engine } from "express-handlebars";
import session from "express-session";
import AuthRouter from "./routers/auth.router.js";
import passport from "./utils/passport.util.js";

import "./config/db.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", "./src/views");
app.set("view engine", "hbs");
app.engine(
  "hbs",
  engine({
    extended: ".hbs",
    defaultLayout: "main.hbs",
    layoutsDir: path.resolve() + "/src/views/layouts",
  }),
);

app.use(
  session({
    secret: process.env.SECRET,
    cookie: {
      maxAge: Number(process.env.EXPIRE),
    },
    rolling: true,
    resave: true,
    saveUninitialized: true,
  }),
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/", AuthRouter);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
