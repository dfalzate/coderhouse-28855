const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.argv[2];
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));

app.get("/", (req, res) => {
  console.log(`Puerto ${PORT}, PID ${process.pid}`);
  res.send(`Puerto ${PORT}, PID ${process.pid}`);
});
