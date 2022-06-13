const express = require("express");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    console.log(`Procesadores ${numCPUs}, PID ${process.pid}`);
    res.send(`Procesadores ${numCPUs}, PID ${process.pid}`);
  });

  const PORT = process.env.PORT || 3000;
  const server = app.listen(PORT, () =>
    console.log(`🚀 Server started on port http://localhost:${PORT} - PID ${process.pid}`),
  );
  server.on("error", (err) => console.log(err));
}
