import express from "express";
import "./config/db.js";
import UserRouter from "./routers/user.router.js";
import AuthRouter from "./routers/auth.router.js";
import { isAuth } from "./middlewares/auth.middleware.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", UserRouter);
app.use("/login", AuthRouter);

app.get("/auth", isAuth, (req, res) => {
  console.log("Usuario autorizado", req.user);
  console.log("Estas autenticado");
  res.send("Estas autenticado");
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
