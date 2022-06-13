import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import cookieParser from "cookie-parser";
import mongoStore from "connect-mongo";
// import FileStore from "session-file-store";
// import redis from "redis";
// import RedisStore from "connect-redis";
import auth from "./middleware/auth.middleware.js";
dotenv.config();

// const fileStore = FileStore(session);

// const client = redis.createClient(process.env.PORT_REDIS, process.env.HOST_REDIS);

// client.auth(process.env.PASS_REDIS);

// const redisStore = RedisStore(session);

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    store: mongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      options: {
        userNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }),
    // store: new redisStore({
    //   host: "localhost",
    //   port: 6379,
    //   client: client,
    //   ttl: 300,
    // }),
    //sessionFile
    // store: new fileStore({
    //   path:'./sesiones', ttl:300, retries:0
    // }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    // cookie: { maxAge: 1000 },
  }),
);

app.get("/contador", (req, res) => {
  if (req.session.contador) {
    req.session.contador++;
    res.send(`Has visto la pagina ${req.session.contador} veces`);
  } else {
    req.session.contador = 1;
    res.send("Bienvenido!");
  }
});

app.get("/login", (req, res) => {
  const { user, password } = req.query;
  if (user === "coderhouse" && password === "123456") {
    req.session.login = true;
    res.send("Login correcto");
  } else {
    res.send("Login incorrecto");
  }
});

app.get("/restringida", auth, (req, res) => {
  res.send("Información restringida");
});

app.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (!err) {
      res.status(200).send("Salio de la aplicación");
    } else {
      res.json(err);
    }
  });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
