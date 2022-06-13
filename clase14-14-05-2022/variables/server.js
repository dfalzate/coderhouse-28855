const express = require("express");
// const config = require("./config.js");
const dotenv = require("dotenv").config({
  path: process.env.MODO === "DEV" ? __dirname + "/.env1" : __dirname + "/.env2",
});

console.log(process.env, process.argv);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
