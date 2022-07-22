import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { uuid } from "uuidv4";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const schema = buildSchema(`
  type Persona {
    id: ID!
    nombre: String
    edad: Int
    email: String
    avatar: String
  }
  input PersonasInput {
    nombre: String!
    edad: Int!
    email: String!
    avatar: String!
  }
  input PersonasEditInput {
    nombre: String
    edad: Int
    email: String
    avatar: String
  }
  input FilterInput {
    edad: Int
  }
  type Query {
    encontrarPersona(id:ID!):Persona
    obtenerPersonas:[Persona]
  }
  type Mutation {
    agregarPersona(data: PersonasInput): Persona
    editarPersona(id:ID!, data:PersonasEditInput!):Persona
  }
`);

// type Persona = {
//   id: number
//   nombre: string
//   edad: number
//   email: string
//   avatar: string
// }

const personas = [
  {
    id: "aaa",
    nombre: "Nombre1",
    edad: 1,
    email: "email1@email.com",
    avatar: "http://www.image1.com/image1.jpg",
  },
  {
    id: "bbb",
    nombre: "Nombre2",
    edad: 2,
    email: "email2@email.com",
    avatar: "http://www.image2.com/image2.jpg",
  },
]; //:[Persona]

function agregarPersona({ data }) {
  const persona = {
    id: uuid(),
    ...data,
  };
  personas.push(persona);
  return persona;
}

function encontrarPersona({ id }) {
  const persona = personas.find((per) => per.id === id);
  return persona;
}

function editarPersona({ id, data }) {
  let persona = null;
  personas.map((per, index) => {
    if (per.id === id) {
      let newPersona = Object.assign(per, data);
      persona = newPersona;
      personas[index] = newPersona;
    }
  });
  console.log(persona);
  return persona;
}

function obtenerPersonas() {
  return personas;
}

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: {
      agregarPersona,
      encontrarPersona,
      editarPersona,
      obtenerPersonas,
    },
    graphiql: true,
  }),
);

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
