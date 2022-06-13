import express, { json, urlencoded } from "express";
import { UserRoute } from "./routers/user.router.js";

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api/usuarios", new UserRoute());

const PORT = 4000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
