import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

// const corsOptions = {
//   origin: "http://localhost:3000",
// };

const whiteList = ["http://example1.com", "example2.com", "http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const app = express();
// app.use(cors()); abierto completamente

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("Hola CORS");
});

app.get("/cors", cors(corsOptions), (req, res) => {
  res.status(200).send("Hola CORS");
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
