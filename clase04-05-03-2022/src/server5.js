const express = require("express");
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

app.post("/profile", upload.single("avatar"), function (req, res, next) {
  console.log(req.file, req.body);
  res.status(200).send("Ok");
});

const PORT = 8085;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:8085`),
);
server.on("error", (err) => console.log(err));
