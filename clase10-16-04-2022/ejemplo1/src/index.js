import "./config/db.js";
import { UsuariosModel } from "./modules/usuarios.modules.js";

const usuario1 = {
  nombres: "Coderhouse1",
  apellidos: "Backend1",
  email: "n1@n.com",
  usuario: "coder1",
  password: 11111,
};
const usuario2 = {
  nombres: "Coderhouse2",
  apellidos: "Backend2",
  email: "n2@n.com",
  usuario: "coder2",
  password: 22222,
  url: "www.coderhouse.com",
};

/* -------------------------------------------------------------------------- */
/*                                CRUD Mongoose                               */
/* -------------------------------------------------------------------------- */

/* --------------------------------- CREATE --------------------------------- */

async function createUser() {
  try {
    const response = await UsuariosModel.create([usuario1, usuario2]);
    console.log(response);
    // const usuario = new UsuariosModel(usuario1);
    // console.log(usuario);
    // const response = usuario.save();
    // console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// createUser();

/* -------------------------------- READ ALL -------------------------------- */
async function readAll() {
  try {
    const response = await UsuariosModel.find();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// readAll();

/* -------------------------------- READ ONE -------------------------------- */
async function readOne() {
  try {
    // const response = await UsuariosModel.findOne({ nombres: "Coderhouse22" });
    const response = await UsuariosModel.find({ _id: "625ac980f2c7449901111245" });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// readOne();

/* --------------------------------- UPDATE --------------------------------- */
let nombre = "Coderhouse1";
let data = {
  nombres: "coderhouse",
  password: 2222220000,
};
async function update(nombre, data) {
  try {
    const response = await UsuariosModel.updateMany({ nombres: nombre }, data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// update(nombre,data);

/* --------------------------------- DELETE --------------------------------- */

async function deleteUser() {
  try {
    const response = await UsuariosModel.deleteMany({ nombres: "Coderhouse2" });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// deleteUser();

/* ------------------------------- PROJECTIONS ------------------------------ */
let response;

async function fn() {
  response = await UsuariosModel.find({ nombres: /CODER/i }, { _id: 0, nombres: 1, apellidos: 1 });
  // response = await UsuariosModel.find(
  //   { nombres: /CODER/i },
  //   { _id: 0, nombres: 1, apellidos: 1 },
  //   ).sort({ nombres: 1 });
  // response = await UsuariosModel.find(
  //   { nombres: "CODERHOUSE" },
  //   { _id: 0, nombres: 1, apellidos: 1 },
  // )
  //   .limit(1)
  //   .skip(4 * 1);

  console.log(response);
}

fn();
