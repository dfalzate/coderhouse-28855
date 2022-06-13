const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router1 = express.Router();
const router2 = express.Router();

router1.get("/", (req, res) => {
  console.log("router1");
  res.status(200).send("Router1");
});

router2.get("/", (req, res) => {
  console.log("router2");
  res.status(200).send("Router2");
});

app.use("/router1", router1);
app.use("/router2", router2);

const PORT = 8082;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:8082`),
);
server.on("error", (err) => console.log(err));
