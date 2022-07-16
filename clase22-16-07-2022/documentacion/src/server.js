import express from "express";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerConf = {
  definition: {
    openapi: "3.0.0.",
    info: {
      title: "Documentación swagger",
      description: "Es una documentación de API",
    },
  },
  apis: ["./docs/**/*.yaml"],
};

const specs = swaggerJSDoc(swaggerConf);

app.use("/documentacion", swaggerUI.serve, swaggerUI.setup(specs));

app.post("/products", (req, res) => {
  console.log(req.body);
  const response = {
    id: "123ZZZ",
    title: "Producto 1 Coderhouse",
    price: 123,
    thumbnail: "http://www.image.com/image.jpg",
  };
  res.status(200).json(response);
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
